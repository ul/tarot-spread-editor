(ns tse.background-dialog.eff-test
  (:require [cljs.test :refer [deftest is]]
            [tse.helpers :refer [make-ctx]]
            [tse.background-dialog.eff :as eff]))

(deftest open-starts-from-current-background
  (let [ctx (make-ctx {:db {:background-dialog {:visible? false, :tab "link"},
                            :background {:src "https://a/bg.png",
                                         :color "#123456"}}})]
    (eff/open ctx)
    (let [dialog (:background-dialog @(:db ctx))]
      (is (true? (:visible? dialog)))
      (is (= "link" (:tab dialog)))
      (is (= "https://a/bg.png" (:src dialog)))
      (is (= "#123456" (:color dialog)))
      (is (= 1 (:session dialog))))))

(deftest open-bumps-session
  (let [ctx (make-ctx {:db {:background-dialog {:session 4}, :background {}}})]
    (eff/open ctx)
    (is (= 5 (get-in @(:db ctx) [:background-dialog :session])))))

(deftest cancel-hides-dialog
  (let [ctx (make-ctx {:db {:background-dialog {:visible? true}}})]
    (eff/cancel ctx)
    (is (false? (get-in @(:db ctx) [:background-dialog :visible?])))))

(deftest select-tab-sets-tab
  (let [ctx (make-ctx {:db {:background-dialog {:tab "color"}},
                       :args ["link"]})]
    (eff/select-tab ctx)
    (is (= "link" (get-in @(:db ctx) [:background-dialog :tab])))))

(deftest save-new-image-resets-geometry
  (let [ctx (make-ctx {:db {:background-dialog {:visible? true,
                                                :src "https://a/new.png",
                                                :color "#ffffff"},
                            :background {:src "https://a/old.png",
                                         :origin [10 10],
                                         :dimensions [300 200]}}})]
    (eff/save ctx)
    (let [db @(:db ctx)]
      (is (= {:src "https://a/new.png", :color "#ffffff", :origin [0 0]}
             (:background db)))
      (is (false? (get-in db [:background-dialog :visible?]))))))

(deftest save-same-image-keeps-geometry
  ;; reopening the dialog and changing only the color must keep the image
  (let [bg {:src "https://a/bg.png", :origin [10 10], :dimensions [300 200]}
        ctx (make-ctx {:db {:background-dialog {:src "https://a/bg.png",
                                                :color "#000000"},
                            :background bg}})]
    (eff/save ctx)
    (is (= (assoc bg :color "#000000") (:background @(:db ctx))))))

(deftest save-without-image-removes-it
  (let [ctx (make-ctx {:db {:background-dialog {:src nil, :color "#000000"},
                            :background {:src "https://a/bg.png",
                                         :origin [5 5]}}})]
    (eff/save ctx)
    (is (= {:color "#000000", :origin [0 0]} (:background @(:db ctx))))))

(deftest set-url-updates-dialog-src
  (let [ctx (make-ctx {:db {:background-dialog {}},
                       :args [" https://example.com/bg.jpg "]})]
    (eff/set-url ctx)
    (is (= "https://example.com/bg.jpg"
           (get-in @(:db ctx) [:background-dialog :src])))))

(deftest set-url-blank-clears-src
  (let [ctx (make-ctx {:db {:background-dialog {:src "https://a"}},
                       :args [""]})]
    (eff/set-url ctx)
    (is (nil? (get-in @(:db ctx) [:background-dialog :src])))))

(deftest remove-image-clears-src-and-remounts
  (let [ctx (make-ctx {:db {:background-dialog {:src "https://a",
                                                :session 2}}})]
    (eff/remove-image ctx)
    (is (= {:src nil, :session 3} (:background-dialog @(:db ctx))))))

(deftest set-color-updates-dialog-color
  (let [ctx (make-ctx {:db {:background-dialog {}}, :args ["#ff0000"]})]
    (eff/set-color ctx)
    (is (= "#ff0000" (get-in @(:db ctx) [:background-dialog :color])))))
