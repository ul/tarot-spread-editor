(ns tse.share-test
  (:require [cljs.test :refer [deftest is]]
            [cognitect.transit :as t]
            [tse.db :as db]
            [tse.share :as share]))

(defn decode-fragment
  [fragment]
  (t/read (t/reader :json) (js/decodeURIComponent fragment)))

(deftest shared-state-drops-local-state
  (let [state
          (assoc db/defaults
            :items
              [{:origin [0 0], :dimensions [1 1], :angle 0, :selected? true}]
            :background {:origin [0 0], :src "data:image/png;base64,AAAA"})]
    (is (= {:active-deck "RiderWaiteTarot",
            :active-suit 0,
            :canvas {:scale 1.0},
            :grid {:step 50},
            :background {:origin [0 0]},
            :lang :en,
            :items [{:origin [0 0], :dimensions [1 1], :angle 0}]}
           (share/shared-state state)))))

(deftest shared-state-keeps-remote-background
  (let [bg {:origin [0 0], :src "https://example.com/bg.jpg"}]
    (is (= bg
           (:background (share/shared-state (assoc db/defaults
                                              :background bg)))))))

(deftest encode-decode-round-trip
  (let [state (assoc db/defaults
                :active-deck "Thoth"
                :lang :ru)
        [status data] (share/decode (str "#" (share/encode state)))]
    (is (= :ok status))
    (is (= (share/shared-state state) data))))

(deftest encode-ignores-non-shared-changes
  (is (= (share/encode db/defaults)
         (share/encode (assoc db/defaults
                         :pointers 2
                         :board-visible? false)))))

(deftest decode-statuses
  (is (= [:empty] (share/decode "")))
  (is (= [:empty] (share/decode "#")))
  (is (= :invalid (first (share/decode "#%"))))
  (is (= :invalid (first (share/decode "#garbage"))))
  (is (= :invalid
         (first (share/decode (js/encodeURIComponent
                                (t/write share/writer
                                         {:items "not-a-vector"})))))))

(deftest decode-rejects-unsafe-background
  (let [fragment #(js/encodeURIComponent (t/write share/writer %))]
    (is (= :invalid
           (first (share/decode (fragment {:background
                                             {:origin [0 0],
                                              :src "javascript:alert(1)"}})))))
    (is (= :invalid
           (first (share/decode (fragment {:background {:origin [0 0],
                                                        :color
                                                          "red;x:y"}})))))))

(deftest decode-accepts-legacy-links
  ;; written by the previous version after setting a background colour
  (let [legacy {:background {:origin [0 0],
                             :src nil,
                             :color "#ff0000",
                             :menu-position [10 20]},
                :items [{:origin [0 0],
                         :dimensions [210 360],
                         :angle 0,
                         :selected? true,
                         :layer :cards,
                         :card {:deck "RiderWaiteTarot", :suit 0, :index 3}}]}
        [status data] (share/decode (js/encodeURIComponent (t/write share/writer
                                                                    legacy)))]
    (is (= :ok status))
    (is (= {:origin [0 0], :color "#ff0000"} (:background data)))))

(deftest encode-is-uri-safe
  (is (map? (decode-fragment (share/encode db/defaults)))))
