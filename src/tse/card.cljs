(ns tse.card
  (:require [goog.labs.userAgent.browser :as browser]
            [cuerdas.core :as str]
            [carbon.rx :as rx :include-macros true]
            [tse.transformer :as trans]))

(defn view [ctx id]
  (let [ref (trans/make-interact ctx (atom nil))]
    (fn [{:keys [sub emit] :as ctx} id]
      (let [{:keys [src angle z-index]
             [x y] :origin
             [w h] :dimensions}
            @(sub [:card/entity id])
            on-mousedown
            (fn [e]
              (.stopPropagation e)
              (emit [:item/toggle-selected id (.-shiftKey e)]))]
        [:img
         {:src src
          :ref ref
          :style
          {:position "absolute"
           :transform (str/format "translate(%spx, %spx) rotate(%srad)" x y angle)
           :will-change "transform"
           :zIndex z-index
           :width w
           :height h}
          ;; NOTE mousedown is not fired in Firefox and pointerdown in Safari for somewhat reason
          :on-mousedown (when-not (browser/isFirefox) on-mousedown)
          :on-pointerdown (when (browser/isFirefox) on-mousedown)}]))))
