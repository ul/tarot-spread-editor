(ns tse.suitcase.sub
  (:require [carbon.rx :as rx :include-macros true]))

(defn get-entity [{:keys [sub], [id] :args}]
  (rx/rx (get @(sub [:suitcase/all]) id)))

(defn get-active [{:keys [sub]}]
  (let [deck (sub [:deck/active])
        suitcases (sub [:suitcase/all])]
    (rx/rx (get @suitcases (get @deck :suitcase)))))

(def spec
  {:suitcase/all [:suitcases]
   :suitcase/entity get-entity
   :suitcase/active get-active})
