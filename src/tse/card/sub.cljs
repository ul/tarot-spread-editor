(ns tse.card.sub
  (:require [carbon.rx :as rx :include-macros true]))

(defn used-by-deck
  [{:keys [db sub], deck :args}]
  (rx/rx (map (comp vec (juxt :suit :index)) (keep :card @(sub [:item/all])))))

(defn usable-by-deck
  [{:keys [db sub], [deck] :args}]
  (let [deck (sub [:deck/entity deck])
        card-suitcase (rx/rx @(sub [:suitcase/entity (get @deck :suitcase)]))]
    (rx/rx (mapcat (fn [[k v]]
                     (map vector (repeat k) (range (count (get v :cards)))))
             (map-indexed vector (get @card-suitcase :suits))))))

(defn get-entity
  [{:keys [sub], [id] :args}]
  (let [item (sub [:item/entity id])
        base-url (sub [:config/deck-base-url])]
    (rx/rx (let [{{:keys [deck suit index]} :card, :as item} @item
                 {:keys [suitcase format], deck-src :src} @(sub [:deck/entity
                                                                 deck])
                 src (get-in @(sub [:suitcase/entity suitcase])
                             [:suits suit :cards index]
                             "back")
                 src (str @base-url deck-src "/" src "." format)]
             (assoc item :src src)))))

(def spec
  {:card/random-reversible? [:random :reversible?],
   :card/used-by-deck used-by-deck,
   :card/usable-by-deck usable-by-deck,
   :card/entity get-entity})
