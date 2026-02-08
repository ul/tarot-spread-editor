(ns tse.share.eff
  (:require [cognitect.transit :as t]
            [carbon.rx :as rx :include-macros true]
            [tse.share.sub :refer [*navigating?]]
            [tse.db :as db]))

(def r (t/reader :json))

(defn load-from-fragment
  [{:keys [db]}]
  (reset! *navigating? true)
  (let [loc js/window.location
        hash (-> (.-hash loc)
                 (subs 1)
                 (js/decodeURIComponent))]
    (rx/dosync (when (pos? (count hash))
                 (try (let [data (t/read r hash)]
                        (if (db/valid-shared-state? data)
                          (swap! db merge data)
                          (js/console.warn "Invalid state in URL fragment")))
                      (catch :default e
                        (js/console.warn "Failed to load from URL fragment"
                                         e))))
               (swap! db assoc :loaded? true))))

(def spec {:share/load-from-fragment load-from-fragment})
