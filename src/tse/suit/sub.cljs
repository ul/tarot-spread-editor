(ns tse.suit.sub
  (:require [carbon.rx :as rx :include-macros true]))

(defn get-active
  [{:keys [sub]}]
  (let [suitcase (sub [:suitcase/active])
        suit-id (sub [:suit/active-id])]
    (rx/rx (get-in @suitcase [:suits @suit-id]))))

(defn active-cards
  [{:keys [sub]}]
  (let [suit (sub [:suit/active])
        base-url (sub [:config/deck-base-url])
        deck (sub [:deck/active])]
    (rx/rx (let [base-url (str @base-url (get @deck :src) "/")
                 back? (get @deck :back)
                 format (get @deck :format)
                 make-url #(str base-url % "." format)
                 active-cards (vec (map-indexed #(-> {:src (make-url %2)}
                                                     (assoc :index %1))
                                                (get @suit :cards)))]
             (if back?
               (conj active-cards {:src (make-url "back"), :index -1})
               active-cards)))))

(def spec
  {:suit/active-id [:active-suit],
   :suit/active get-active,
   :suit/active-cards active-cards})
