(ns tse.deck.eff
  (:require [cognitect.transit :as t]))

(def reader (t/reader :json))

(defn set-active [{:keys [db], [id] :args}]
  (swap! db assoc :active-deck id))

(defn load-decks [{:keys [db]}]
  (-> (js/fetch "decks.min.json")
      (.then #(.text %))
      (.then #(swap! db assoc :decks (t/read reader %)))))

(def spec
  {:deck/set-active set-active
   :deck/load load-decks})
