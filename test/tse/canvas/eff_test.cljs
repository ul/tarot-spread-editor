(ns tse.canvas.eff-test
  (:require [cljs.test :refer [deftest testing is]]
            [tse.helpers :refer [make-ctx]]
            [tse.canvas.eff :as eff]))

(deftest set-scale-updates-db
  (let [ctx (make-ctx {:db {:canvas {:scale 1}}, :args [2]})]
    (eff/set-scale ctx)
    (is (= 2 (get-in @(:db ctx) [:canvas :scale])))))

(deftest set-scale-fractional
  (let [ctx (make-ctx {:db {:canvas {:scale 1}}, :args [0.5]})]
    (eff/set-scale ctx)
    (is (= 0.5 (get-in @(:db ctx) [:canvas :scale])))))
