(ns tse.background-image
  (:require cljsjs.interact
            [cuerdas.core :as str]))

(defn init [{:keys [emit]}]
  (fn [node]
    (when node
      (let [^js/Interactable interact (js/window.interact node)]
        (doto interact
          (.draggable #js {:inertia false
                           :autoScroll true
                           :onmove (fn [^js/InteractEvent e]
                                     (when-not (.-shiftKey e)
                                       (emit [:background/move [(.-dx e) (.-dy e)]])))})
          (.resizable #js {:preserveAspectRatio false
                           :edges #js {:left true :top true :right true :bottom true}
                           :onmove (fn [^js/InteractEvent e]
                                     (when-not (.-shiftKey e)
                                       (emit [:background/resize (.-rect e) (.-deltaRect e)])))}))))))

(defn view [ctx]
  (let [ref (init ctx)]
    (fn [{:keys [sub emit]}]
      (let [{:keys [src]
             [x y] :origin
             [w h] :dimensions}
            @(sub [:background/item])]
        [:img
         {:ref ref
          :on-load #(emit [:background/set-dimensions [(.. % -target -clientWidth) (.. % -target -clientHeight)]])
          :style {:position "absolute"
                  :transform (str/format "translate(%spx, %spx)" x y)
                  :will-change "transform"
                  :width w
                  :height h}
          :src src}]))))
