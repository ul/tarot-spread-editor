(ns tse.suitcase.eff
  (:require [cognitect.transit :as t]))

(def reader (t/reader :json))

(defn load-suitcases
  [{:keys [db]}]
  (-> (js/fetch "suitcases.min.json")
      (.then #(.text %))
      (.then #(swap! db assoc :suitcases (t/read reader %)))))

(def spec {:suitcase/load load-suitcases})
