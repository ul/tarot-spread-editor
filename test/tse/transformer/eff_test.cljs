(ns tse.transformer.eff-test
  (:require [cljs.test :refer [deftest testing is]]
            [tse.helpers :refer [make-ctx]]
            [tse.transformer.eff :as eff]))

(deftest move-translates-selected-items
  (let [ctx (make-ctx {:db {:items [{:selected? true, :origin [100 100]}
                                    {:selected? false, :origin [200 200]}]},
                       :subs {[:canvas/scale] 1},
                       :args [[10 20]]})]
    (eff/move ctx)
    (let [items (:items @(:db ctx))]
      (is (= [110.0 120.0] (:origin (nth items 0))))
      (is (= [200 200] (:origin (nth items 1)))))))

(deftest move-respects-scale
  (let [ctx (make-ctx {:db {:items [{:selected? true, :origin [100 100]}]},
                       :subs {[:canvas/scale] 2},
                       :args [[20 40]]})]
    (eff/move ctx)
    (is (= [110.0 120.0] (:origin (first (:items @(:db ctx))))))))

(deftest move-clamps-to-zero
  (let [ctx (make-ctx {:db {:items [{:selected? true, :origin [5 5]}]},
                       :subs {[:canvas/scale] 1},
                       :args [[-100 -100]]})]
    (eff/move ctx)
    (is (= [0 0] (:origin (first (:items @(:db ctx))))))))

(deftest end-rotation-clears-rotator
  (let [ctx (make-ctx {:db {:transformer {:rotator {:angle 1,
                                                    :origin [0 0]}}}})]
    (eff/end-rotation ctx)
    (is (nil? (get-in @(:db ctx) [:transformer :rotator])))))

(deftest move-selection-sets-end
  (let [ctx (make-ctx {:db {:transformer {:selector {:start [0 0]}}},
                       :args [[50 60]]})]
    (eff/move-selection ctx)
    (is (= [50 60] (get-in @(:db ctx) [:transformer :selector :end])))))

(deftest shift-mode-sets-true
  (let [ctx (make-ctx {:db {:transformer {}}, :args [true]})]
    (eff/shift-mode ctx)
    (is (true? (get-in @(:db ctx) [:transformer :shift-mode?])))))

(deftest start-drag-sets-dragging
  (let [ctx (make-ctx {:db {:items [{:origin [10 20]}], :transformer {}}})]
    (eff/start-drag ctx)
    (is (true? (get-in @(:db ctx) [:transformer :dragging?])))))

(deftest end-drag-clears-dragging
  (let [ctx (make-ctx {:db {:transformer {:dragging? true}}})]
    (eff/end-drag ctx)
    (is (false? (get-in @(:db ctx) [:transformer :dragging?])))))
