(ns tse.share.eff-test
  (:require [cljs.test :refer [deftest is]]
            [cognitect.transit :as t]
            [carbon.rx :as rx :include-macros true]
            [tse.db :as db]
            [tse.share :as share]
            [tse.share.eff :as eff]))

(defn set-hash!
  [data]
  (set! js/window.location.hash
        (str "#" (js/encodeURIComponent (t/write (t/writer :json) data)))))

(deftest load-from-fragment-valid-hash
  (let [db (rx/cell (assoc db/defaults :deck-base-url "https://decks/"))]
    (set-hash! {:active-deck "Test", :items []})
    (eff/load-from-fragment {:db db})
    (is (= "Test" (:active-deck @db)))
    (is (true? (:loaded? @db)))
    (is (= "https://decks/" (:deck-base-url @db)))
    (is (= (share/encode @db) @share/*current))))

(deftest load-from-fragment-ignores-non-shared-keys
  (let [db (rx/cell db/defaults)]
    (set-hash! {:deck-base-url "https://attacker.invalid/", :items []})
    (eff/load-from-fragment {:db db})
    (is (= "https://decks.mantike.pro/" (:deck-base-url @db)))))

(deftest load-from-fragment-sanitizes-labels
  (let [db (rx/cell db/defaults)]
    (set-hash! {:items [{:origin [0 0],
                         :dimensions [10 10],
                         :angle 0,
                         :layer :labels,
                         :content [[:p {:dangerouslySetInnerHTML {:__html "x"}}
                                    "hi"] [:iframe {:srcdoc "<script>"}]]}]})
    (eff/load-from-fragment {:db db})
    (is (= [[:p {} "hi"]] (get-in @db [:items 0 :content])))))

(deftest load-from-fragment-empty-hash-restores-defaults
  (let [db (rx/cell (assoc db/defaults
                      :items [{:origin [0 0], :dimensions [1 1], :angle 0}]
                      :active-deck "Thoth"))]
    (set! js/window.location.hash "")
    (eff/load-from-fragment {:db db})
    (is (true? (:loaded? @db)))
    (is (= [] (:items @db)))
    (is (= "RiderWaiteTarot" (:active-deck @db)))))

(deftest load-from-fragment-malformed-hash-keeps-state
  (doseq [hash ["#not-valid-transit-data!!!" "#%"]]
    (let [items [{:origin [0 0], :dimensions [1 1], :angle 0}]
          db (rx/cell (assoc db/defaults :items items))]
      (set! js/window.location.hash hash)
      (eff/load-from-fragment {:db db})
      (is (true? (:loaded? @db)))
      (is (= items (:items @db))))))

(deftest load-from-fragment-closes-dialogs-and-gestures
  (let [db (rx/cell (assoc db/defaults
                      :label-editor {:visible? true, :id 3}
                      :background-dialog {:visible? true}
                      :transformer {:dragging? true}))]
    (set! js/window.location.hash "")
    (eff/load-from-fragment {:db db})
    (is (false? (get-in @db [:transformer :dragging?])))
    (is (false? (get-in @db [:label-editor :visible?])))
    (is (false? (get-in @db [:background-dialog :visible?])))))
