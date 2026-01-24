(ns tse.share.sub
  (:require [carbon.rx :as rx :include-macros true]
            [cognitect.transit :as t]))

(def *navigating? (atom false))

(def w (t/writer :json))

(def serialize-keys
  [:active-deck :active-suit :canvas :grid :background :lang :items])

(def ^:private *debounce-timeout (atom nil))

(defn- write-fragment!
  [state]
  (let [loc js/window.location]
    (->> state
         (t/write w)
         js/encodeURIComponent
         (str (.-pathname loc) (.-search loc) "#")
         (js/history.pushState nil nil))))

(defn update-fragment
  [{:keys [db sub]}]
  (rx/rx (when (and (get @db :loaded?) (not @(sub [:transformer/dragging?])))
           (let [updater #(if @*navigating?
                            (reset! *navigating? false)
                            (write-fragment! (select-keys @db serialize-keys)))]
             (when-let [t @*debounce-timeout] (js/clearTimeout t))
             (reset! *debounce-timeout (js/setTimeout updater 250))))))

(def spec {:share/update-fragment update-fragment})
