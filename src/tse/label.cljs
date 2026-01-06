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
              (emit [:item/toggle-selected id (.-shiftKey e)]))
            on-touchstart
            (fn [e]
              (.stopPropagation e)
              (emit [:item/toggle-selected id false]))]
        [:div.ql-editor
         {:style
          {:position "absolute"
           :zIndex z-index
           :transform (str/format "translate(%spx, %spx) rotate(%srad)" x y angle)
           :will-change "transform"
           :padding "0"
           :width w
           :height h
           :touch-action "none"}
          :ref ref
          :on-mousedown on-mousedown
          :on-touch-start on-touchstart}
         [:div
          {:style
           {:transform (str/format "scale(%s)" (/ w w0))
            :transform-origin "left top"
            :width w0
            :height h0}}
          content]]))))
