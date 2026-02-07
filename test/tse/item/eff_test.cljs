(ns tse.item.eff-test
  (:require [cljs.test :refer [deftest testing is]]
            [tse.helpers :refer [make-ctx]]
            [tse.item.eff :as eff]))

(deftest toggle-selected-single-select
  (let [ctx (make-ctx {:db {:items [{:selected? false, :x 1}
                                    {:selected? true, :x 2}]},
                       :subs {[:item/next-z-index] 10},
                       :args [0 false]})]
    (eff/toggle-selected ctx)
    (let [items (:items @(:db ctx))]
      (is (true? (:selected? (nth items 0))))
      (is (false? (:selected? (nth items 1))))
      (is (= 10 (:z-index (nth items 0)))))))

(deftest toggle-selected-multiselect
  (let [ctx (make-ctx {:db {:items [{:selected? false} {:selected? true}]},
                       :args [0 true]})]
    (eff/toggle-selected ctx)
    (let [items (:items @(:db ctx))]
      (is (true? (:selected? (nth items 0))))
      (is (true? (:selected? (nth items 1)))))))

(deftest remove-selected-filters-selected
  (let [ctx (make-ctx {:db {:items [{:selected? true, :x 1}
                                    {:selected? false, :x 2}
                                    {:selected? true, :x 3}]}})]
    (eff/remove-selected ctx)
    (is (= [{:selected? false, :x 2}] (:items @(:db ctx))))))

(deftest remove-selected-none-selected
  (let [ctx (make-ctx {:db {:items [{:selected? false, :x 1}
                                    {:selected? false, :x 2}]}})]
    (eff/remove-selected ctx)
    (is (= 2 (count (:items @(:db ctx)))))))

(deftest unselect-all-clears-selection
  (let [ctx (make-ctx {:db {:items [{:selected? true} {:selected? true}]}})]
    (eff/unselect-all ctx)
    (is (every? #(false? (:selected? %)) (:items @(:db ctx))))))

(deftest unselect-all-keeps-unselected
  (let [ctx (make-ctx {:db {:items [{:selected? false, :x 1}]}})]
    (eff/unselect-all ctx)
    (is (= [{:selected? false, :x 1}] (:items @(:db ctx))))))

(deftest raise-selected-updates-z-index
  (let [ctx (make-ctx {:db {:items [{:selected? true, :z-index 1}
                                    {:selected? false, :z-index 2}]},
                       :subs {[:item/next-z-index] 10}})]
    (eff/raise-selected ctx)
    (let [items (:items @(:db ctx))]
      (is (= 10 (:z-index (nth items 0))))
      (is (= 2 (:z-index (nth items 1)))))))

(deftest update-pointers-increments
  (let [ctx (make-ctx {:db {:pointers 0}, :args [1]})]
    (eff/update-pointers ctx)
    (is (= 1 (:pointers @(:db ctx))))))
