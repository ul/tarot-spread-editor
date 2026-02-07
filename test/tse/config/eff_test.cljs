(ns tse.config.eff-test
  (:require [cljs.test :refer [deftest testing is]]
            [tse.helpers :refer [make-ctx]]
            [tse.config.eff :as eff]))

(deftest toggle-grid-show-on
  (let [ctx (make-ctx {:db {:grid {:show? false}}, :args [true]})]
    (eff/toggle-grid-show ctx)
    (is (true? (get-in @(:db ctx) [:grid :show?])))))

(deftest toggle-grid-show-off
  (let [ctx (make-ctx {:db {:grid {:show? true}}, :args [false]})]
    (eff/toggle-grid-show ctx)
    (is (false? (get-in @(:db ctx) [:grid :show?])))))

(deftest toggle-grid-snap-on
  (let [ctx (make-ctx {:db {:grid {:snap? false}}, :args [true]})]
    (eff/toggle-grid-snap ctx)
    (is (true? (get-in @(:db ctx) [:grid :snap?])))))

(deftest toggle-grid-snap-off
  (let [ctx (make-ctx {:db {:grid {:snap? true}}, :args [false]})]
    (eff/toggle-grid-snap ctx)
    (is (false? (get-in @(:db ctx) [:grid :snap?])))))
