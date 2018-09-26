(ns tse.deck.sub
  (:require [carbon.rx :as rx :include-macros true]))

(defn get-active [{:keys [sub]}]
  (let [decks (sub [:deck/all])
        active-id (sub [:deck/active-id])]
    (rx/rx (get @decks @active-id))))

(defn get-entity [{:keys [sub], [id] :args}]
  (rx/rx
   (let [deck (get @(sub [:deck/all]) id)]
     (assoc deck :dimensions [(get deck :width) (get deck :height)]))))

(def spec
  {:deck/active-id [:active-deck]
   :deck/active get-active
   :deck/all [:decks]
   :deck/entity get-entity})
