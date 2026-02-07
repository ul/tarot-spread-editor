(ns tse.background-dialog.eff-test
  (:require [cljs.test :refer [deftest testing is]]
            [tse.helpers :refer [make-ctx]]
            [tse.background-dialog.eff :as eff]))

(deftest open-sets-visible
  (let [ctx (make-ctx {:db {:background-dialog {:visible? false}}})]
    (eff/open ctx)
    (is (true? (get-in @(:db ctx) [:background-dialog :visible?])))))

(deftest cancel-hides-dialog
  (let [ctx (make-ctx {:db {:background-dialog {:visible? true}}})]
    (eff/cancel ctx)
    (is (false? (get-in @(:db ctx) [:background-dialog :visible?])))))

(deftest select-tab-sets-tab
  (let [ctx (make-ctx {:db {:background-dialog {:tab :color}}, :args [:link]})]
    (eff/select-tab ctx)
    (is (= :link (get-in @(:db ctx) [:background-dialog :tab])))))

(deftest save-copies-to-background-and-hides
  (let [ctx (make-ctx {:db {:background-dialog {:visible? true,
                                                :src "http://img.png",
                                                :color "#fff"},
                            :background {}}})]
    (eff/save ctx)
    (let [db @(:db ctx)]
      (is (= "http://img.png" (get-in db [:background :src])))
      (is (= "#fff" (get-in db [:background :color])))
      (is (false? (get-in db [:background-dialog :visible?])))
      (is (nil? (get-in db [:background-dialog :src]))))))

(deftest save-with-nil-src
  (let [ctx (make-ctx {:db {:background-dialog
                              {:visible? true, :src nil, :color "#000"},
                            :background {}}})]
    (eff/save ctx)
    (let [db @(:db ctx)]
      (is (nil? (get-in db [:background :src])))
      (is (= "#000" (get-in db [:background :color]))))))

(deftest set-url-updates-dialog-src
  (let [ctx (make-ctx {:db {:background-dialog {}},
                       :args ["http://example.com/bg.jpg"]})]
    (eff/set-url ctx)
    (is (= "http://example.com/bg.jpg"
           (get-in @(:db ctx) [:background-dialog :src])))))

(deftest set-color-updates-dialog-color
  (let [ctx (make-ctx {:db {:background-dialog {}}, :args ["#ff0000"]})]
    (eff/set-color ctx)
    (is (= "#ff0000" (get-in @(:db ctx) [:background-dialog :color])))))

(deftest open-preserves-existing-fields
  (let [ctx (make-ctx {:db {:background-dialog {:tab :link, :src "old.png"}}})]
    (eff/open ctx)
    (let [dialog (get @(:db ctx) :background-dialog)]
      (is (true? (:visible? dialog)))
      (is (= :link (:tab dialog)))
      (is (= "old.png" (:src dialog))))))
