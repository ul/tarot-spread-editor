(ns tse.card
  (:require [goog.labs.userAgent.browser :as browser]
            [cuerdas.core :as str]
            [carbon.rx :as rx :include-macros true]
            [tse.transformer :as trans]))

(defn view [ctx id]
  (let [ref (trans/make-interact ctx (atom nil))
        ratio (rx/cell nil)]
    (fn [{:keys [sub emit] :as ctx} id]
      (let [{:keys [src angle z-index]
             [x y] :origin
             [w h] :dimensions}
            @(sub [:card/entity id])
            offset-x
            (if @ratio (* 0.5 (- w (* h @ratio))) 0.0)
            on-load
            (fn [e]
              (reset! ratio (/ (.. e -target -width) (.. e -target -height))))
            on-pointer-down
            (fn [e]
              (emit [:item/toggle-selected id (or (.-shiftKey e) (> @(sub [:item/pointers]) 1))]))]
        [:img
         {:src src
          :ref ref
          :style
          {:position "absolute"
           :transform (str/format "translate(%spx, %spx) rotate(%srad)" (+ x offset-x) y angle)
           :will-change "transform"
           :z-index z-index
           :height (str h "px")
           :touch-action "none"}
          :on-load on-load
          :on-pointer-down on-pointer-down}]))))
