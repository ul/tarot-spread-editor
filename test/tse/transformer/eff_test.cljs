(ns tse.transformer.eff-test
  (:require [cljs.test :refer [deftest testing is]]
            [tse.helpers :refer [make-ctx]]
            [tse.transformer.eff :as eff]))

(deftest move-translates-selected-items
  (let [ctx (make-ctx {:db {:items [{:selected? true, :origin [100 100]}
                                    {:selected? false, :origin [200 200]}]},
                       :subs {[:canvas/scale] 1,
                              [:config/grid] {:snap? false, :step 50}},
                       :args [[10 20]]})]
    (eff/move ctx)
    (let [items (:items @(:db ctx))]
      (is (= [110.0 120.0] (:origin (nth items 0))))
      (is (= [200 200] (:origin (nth items 1)))))))

(deftest move-respects-scale
  (let [ctx (make-ctx {:db {:items [{:selected? true, :origin [100 100]}]},
                       :subs {[:canvas/scale] 2,
                              [:config/grid] {:snap? false, :step 50}},
                       :args [[20 40]]})]
    (eff/move ctx)
    (is (= [110.0 120.0] (:origin (first (:items @(:db ctx))))))))

(deftest move-clamps-to-zero
  (let [ctx (make-ctx {:db {:items [{:selected? true, :origin [5 5]}]},
                       :subs {[:canvas/scale] 1,
                              [:config/grid] {:snap? false, :step 50}},
                       :args [[-100 -100]]})]
    (eff/move ctx)
    (is (= [0 0] (:origin (first (:items @(:db ctx))))))))

(deftest move-snaps-to-grid-when-enabled
  (let [db {:items [{:selected? true, :origin [100 100]}], :transformer {}}
        ctx (make-ctx {:db db,
                       :subs {[:canvas/scale] 1,
                              [:config/grid] {:snap? true, :step 50}}})]
    ;; simulate drag lifecycle
    (eff/start-drag ctx)
    (let [ctx (make-ctx {:db @(:db ctx),
                         :subs {[:canvas/scale] 1,
                                [:config/grid] {:snap? true, :step 50}},
                         :args [[23 18]]})]
      (eff/move ctx)
      ;; 100+23=123 snaps to 100; 100+18=118 snaps to 100
      (is (= [100 100] (:origin (first (:items @(:db ctx)))))))))

(deftest move-snaps-to-next-grid-point
  (let [db {:items [{:selected? true, :origin [100 100]}], :transformer {}}
        ctx (make-ctx {:db db,
                       :subs {[:canvas/scale] 1,
                              [:config/grid] {:snap? true, :step 50}}})]
    (eff/start-drag ctx)
    (let [ctx (make-ctx {:db @(:db ctx),
                         :subs {[:canvas/scale] 1,
                                [:config/grid] {:snap? true, :step 50}},
                         :args [[30 30]]})]
      (eff/move ctx)
      ;; 100+30=130 snaps to 150
      (is (= [150 150] (:origin (first (:items @(:db ctx)))))))))

(deftest move-snap-accumulates-deltas
  (testing "multiple small moves accumulate correctly with snap"
    (let [db {:items [{:selected? true, :origin [100 100]}], :transformer {}}
          ctx (make-ctx {:db db,
                         :subs {[:canvas/scale] 1,
                                [:config/grid] {:snap? true, :step 50}}})]
      (eff/start-drag ctx)
      ;; first small move: +10 → total delta 10, 100+10=110 → snaps to 100
      (let [ctx1 (make-ctx {:db @(:db ctx),
                            :subs {[:canvas/scale] 1,
                                   [:config/grid] {:snap? true, :step 50}},
                            :args [[10 10]]})]
        (eff/move ctx1)
        (is (= [100 100] (:origin (first (:items @(:db ctx1))))))
        ;; second small move: +10 → total delta 20, 100+20=120 → snaps to
        ;; 100
        (let [ctx2 (make-ctx {:db @(:db ctx1),
                              :subs {[:canvas/scale] 1,
                                     [:config/grid] {:snap? true, :step 50}},
                              :args [[10 10]]})]
          (eff/move ctx2)
          (is (= [100 100] (:origin (first (:items @(:db ctx2))))))
          ;; third move: +10 → total delta 30, 100+30=130 → snaps to 150
          (let [ctx3 (make-ctx {:db @(:db ctx2),
                                :subs {[:canvas/scale] 1,
                                       [:config/grid] {:snap? true, :step 50}},
                                :args [[10 10]]})]
            (eff/move ctx3)
            (is (= [150 150] (:origin (first (:items @(:db ctx3))))))))))))

(deftest move-no-snap-when-disabled
  (let [ctx (make-ctx {:db {:items [{:selected? true, :origin [100 100]}]},
                       :subs {[:canvas/scale] 1,
                              [:config/grid] {:snap? false, :step 50}},
                       :args [[23 18]]})]
    (eff/move ctx)
    (is (= [123.0 118.0] (:origin (first (:items @(:db ctx))))))))

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
    (is (true? (get-in @(:db ctx) [:transformer :dragging?])))
    (is (= [[10 20]] (get-in @(:db ctx) [:transformer :drag-origins])))))

(deftest end-drag-clears-dragging
  (let [ctx (make-ctx {:db {:transformer {:dragging? true,
                                          :drag-origins [[0 0]],
                                          :drag-delta [5 5]}}})]
    (eff/end-drag ctx)
    (is (false? (get-in @(:db ctx) [:transformer :dragging?])))
    (is (nil? (get-in @(:db ctx) [:transformer :drag-origins])))
    (is (nil? (get-in @(:db ctx) [:transformer :drag-delta])))))
