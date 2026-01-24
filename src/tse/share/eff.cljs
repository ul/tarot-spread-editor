(ns tse.share.eff
  (:require [cognitect.transit :as t]
            [carbon.rx :as rx :include-macros true]
            [tse.share.sub :refer [*navigating?]]))

(def r (t/reader :json))

(defn load-from-fragment [{:keys [db]}]
  (reset! *navigating? true)
  (let [loc js/window.location
        hash (-> (.-hash loc) (subs 1) (js/decodeURIComponent))]
    (rx/dosync
     (when (pos? (count hash))
       (swap! db merge (t/read r hash)))
     (swap! db assoc :loaded? true))))

(def spec {:share/load-from-fragment load-from-fragment})
