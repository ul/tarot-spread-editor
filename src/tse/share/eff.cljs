(ns tse.share.eff
  (:require [cognitect.transit :as t]))

(def r (t/reader :json))

(defn load-from-fragment [{:keys [db]}]
  (let [loc js/window.location
        hash (-> (.-hash loc) (subs 1) (js/decodeURIComponent))]
    (when (pos? (count hash))
      (swap! db merge (t/read r hash)))
    (swap! db assoc :loaded? true)))

(def spec {:share/load-from-fragment load-from-fragment})
