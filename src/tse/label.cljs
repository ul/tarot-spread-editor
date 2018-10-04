(ns tse.label
  (:require [goog.labs.userAgent.browser :as browser]
            [cuerdas.core :as str]
            [carbon.rx :as rx :include-macros true]
            tse.transformer
            tse.menu))

(defn view [ctx id]
  (let [ref (tse.transformer/make-interact ctx (atom nil))]
    (fn [{:keys [sub emit] :as ctx} id]
      (let [{[x y] :origin
             [w h] :dimensions
             [w0 h0] :original-dimensions
             :keys [content angle z-index]}
            @(sub [:item/entity id])
            on-mousedown
            (fn [e]
              (.stopPropagation e)
              (emit [:item/toggle-selected id (.-shiftKey e)]))]
        [:div.ql-editor
         {:style
          {:position "absolute"
           :zIndex z-index
           :transform (str/format "translate(%spx, %spx) rotate(%srad)" x y angle)
           :will-change "transform"
           :padding "0"
           :width w
           :height h}
          :ref ref
          ;; NOTE mousedown is not fired in Firefox and pointerdown in Safari for somewhat reason
          :on-mousedown (when-not (browser/isFirefox) on-mousedown)
          :on-pointerdown (when (browser/isFirefox) on-mousedown)}
         [:div
          {:style
           {:transform (str/format "scale(%s)" (/ w w0))
            :transform-origin "left top"
            :width w0
            :height h0}}
          content]]))))
