(ns tse.share.sub
  (:require [carbon.rx :as rx :include-macros true]
            [cognitect.transit :as t]))

(def w (t/writer :json))

(def serialize-keys [:active-deck :active-suit :canvas :grid :background :lang :items])

(defn update-fragment [{:keys [db sub]}]
  (let [state (rx/rx (select-keys @db serialize-keys))
        loaded? (rx/rx (-> @db :loaded?))]
    (rx/rx
     (when @loaded?
       (let [hash (->> @state (t/write w) js/encodeURIComponent)
             loc js/window.location
             uri (str (.-pathname loc) (.-search loc) "#" hash)]
         (js/history.replaceState nil nil uri))))))

(def spec {:share/update-fragment update-fragment})
