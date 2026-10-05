(ns tse.deck.eff-test
  (:require [cljs.test :refer [deftest is]]
            [tse.helpers :refer [make-ctx]]
            [tse.deck.eff :as eff]))

(deftest set-active-resets-suit
  (let [ctx (make-ctx {:db {:active-deck "A", :active-suit 4}, :args ["B"]})]
    (eff/set-active ctx)
    (is (= {:active-deck "B", :active-suit 0} @(:db ctx)))))
