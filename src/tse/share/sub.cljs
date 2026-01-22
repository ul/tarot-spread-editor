(ns tse.share.sub
  (:require [carbon.rx :as rx :include-macros true]
            [cognitect.transit :as t]))

(def w (t/writer :json))

(def serialize-keys [:active-deck :active-suit :canvas :grid :background :lang :items])

(def ^:private debounce-timeout (atom nil))

(defn- write-fragment! [state]
  (let [hash (->> state (t/write w) js/encodeURIComponent)
        loc js/window.location
        uri (str (.-pathname loc) (.-search loc) "#" hash)]
    (js/history.pushState nil nil uri)))

(defn update-fragment [{:keys [db sub]}]
  (let [state (rx/rx (select-keys @db serialize-keys))
        loaded? (rx/rx (-> @db :loaded?))
        dragging? (sub [:transformer/dragging?])]
    (rx/rx
     (when (and @loaded? (not @dragging?))
       (let [current-state @state]
         (when-let [t @debounce-timeout]
           (js/clearTimeout t))
         (reset! debounce-timeout
                 (js/setTimeout #(write-fragment! current-state) 1000)))))))

(def spec {:share/update-fragment update-fragment})
