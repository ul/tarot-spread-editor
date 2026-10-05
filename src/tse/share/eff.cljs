(ns tse.share.eff
  (:require [tse.db :as db]
            [tse.share :as share]))

(defn load-from-fragment
  "Replaces the shared state with the one from the URL fragment. An empty
  fragment means the default state (e.g. navigating Back to the initial
  page). Open dialogs and in-progress gestures are reset, because they refer
  to the state being replaced."
  [{:keys [db]}]
  (let [[status data] (share/decode (.. js/window -location -hash))]
    (swap! db (fn [state]
                (cond-> (-> state
                            (assoc :loaded? true)
                            (assoc-in [:label-editor :visible?] false)
                            (assoc-in [:background-dialog :visible?] false)
                            ;; the elements being dragged may disappear
                            ;; without an end event
                            (update :transformer dissoc :rotator :selector)
                            (assoc-in [:transformer :dragging?] false))
                  (= :empty status) (merge db/shared-defaults)
                  (= :ok status) (merge db/shared-defaults data))))
    (when (= :invalid status)
      (js/console.warn "Ignoring invalid state in URL fragment" data))
    (reset! share/*current (share/encode @db))))

(def spec {:share/load-from-fragment load-from-fragment})
