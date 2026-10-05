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

(deftest perform-runs-remaining-effects-after-a-failure
  (let [db (rx/cell {})
        ran (atom [])
        key->fn (volatile! {:test/ok (fn [{[x] :args}] (swap! ran conj x)),
                            :test/fail (fn [_] (throw (js/Error. "boom")))})
        queue (volatile! [[:test/ok 1] [:test/fail] [:nonexistent/fx]
                          [:test/ok 2]])]
    (effect/perform* db identity identity identity key->fn queue)
    (is (= [1 2] @ran))
    (is (= [] @queue))))
