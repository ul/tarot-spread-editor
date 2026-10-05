(ns tse.label.eff-test
  (:require [cljs.test :refer [deftest is]]
            [tse.helpers :refer [make-ctx]]
            [tse.label.eff :as eff]))

(deftest add-label-at-position-and-selects-it
  (let [ctx (make-ctx {:db {:items [{:selected? true}]},
                       :subs {[:item/next-z-index] 7},
                       :args [{:content ["x"]} [12 34]]})]
    (eff/add-label ctx)
    (let [[a b] (:items @(:db ctx))]
      (is (false? (:selected? a)))
      (is (= {:layer :labels,
              :origin [12 34],
              :angle 0,
              :selected? true,
              :z-index 7,
              :content ["x"]}
             b)))))

(deftest update-label-merges
  (let [ctx (make-ctx {:db {:items [{:layer :labels, :content ["a"]}]},
                       :args [{:content ["b"]} 0]})]
    (eff/update-label ctx)
    (is (= ["b"] (get-in @(:db ctx) [:items 0 :content])))))

(deftest update-label-ignores-non-labels
  ;; the item at id can change while the editor is open (history
  ;; navigation)
  (let [items [{:layer :cards, :card {}}]
        ctx (make-ctx {:db {:items items}, :args [{:content ["b"]} 0]})]
    (eff/update-label ctx)
    (is (= items (:items @(:db ctx))))
    (eff/update-label (assoc ctx :args [{:content ["b"]} 5]))
    (is (= items (:items @(:db ctx))))))
