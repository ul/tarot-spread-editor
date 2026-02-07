(ns tse.card.eff-test
  (:require [cljs.test :refer [deftest testing is]]
            [tse.helpers :refer [make-ctx]]
            [tse.card.eff :as eff]))

(deftest set-random-reversible-true
  (let [ctx (make-ctx {:db {:random {:reversible? false}}, :args [true]})]
    (eff/set-random-reversible ctx)
    (is (true? (get-in @(:db ctx) [:random :reversible?])))))

(deftest set-random-reversible-false
  (let [ctx (make-ctx {:db {:random {:reversible? true}}, :args [false]})]
    (eff/set-random-reversible ctx)
    (is (false? (get-in @(:db ctx) [:random :reversible?])))))
