(ns tse.effect-test
  (:require [cljs.test :refer [deftest testing is]]
            [carbon.rx :as rx :include-macros true]
            [tse.sub :as sub]
            [tse.effect :as effect]))

(deftest emit-sync-calls-registered-effect
  (let [db (rx/cell {:x 0})
        s (sub/make db)
        {:keys [register-effect emit-sync]} (effect/make db (:sub s))
        called (atom false)]
    (register-effect :test/fx (fn [_] (reset! called true)))
    (emit-sync [:test/fx])
    (is (true? @called))))

(deftest emit-sync-throws-on-missing-effect
  (let [db (rx/cell {})
        s (sub/make db)
        {:keys [emit-sync]} (effect/make db (:sub s))]
    (is (thrown? js/Error (emit-sync [:nonexistent/effect])))))
