(ns tse.card.sub-test
  (:require [cljs.test :refer [deftest is]]
            [carbon.rx :as rx :include-macros true]
            [tse.card.sub :as sub]))

(deftest used-by-deck-only-counts-that-deck
  (let [items (rx/cell [{:card {:deck "A", :suit 0, :index 1}}
                        {:card {:deck "B", :suit 0, :index 2}} {:layer :labels}
                        {:card {:deck "A", :suit 1, :index 1}}
                        {:card {:deck "A", :suit 0, :index 1}}])
        ctx {:sub (fn [v] (when (= v [:item/all]) items)), :args ["A"]}]
    (is (= [[0 1] [1 1] [0 1]] @(sub/used-by-deck ctx)))))
