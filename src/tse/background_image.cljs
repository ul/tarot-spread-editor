(ns tse.background-image
  (:require cljsjs.interact
            [cuerdas.core :as str]))

(defn init [{:keys [emit]} *node]
  (fn [node]
    (when (not= node @*node)
      (if node
        (let [^js/Interactable interact (js/window.interact node)]
          (doto interact
            (.draggable #js {:inertia false
                             :autoScroll true
                             :onstart #(emit [:transformer/start-drag])
                             :onmove (fn [^js/InteractEvent e]
                                       (when-not (.-shiftKey e)
                                         (emit [:background/move [(.-dx e) (.-dy e)]])))
                             :onend #(emit [:transformer/end-drag])})
            (.resizable #js {:preserveAspectRatio false
                             :edges #js {:left true :top true :right true :bottom true}
                             :onstart #(emit [:transformer/start-drag])
                             :onmove (fn [^js/InteractEvent e]
                                       (when-not (.-shiftKey e)
                                         (emit [:background/resize (.-rect e) (.-deltaRect e)])))
                             :onend #(emit [:transformer/end-drag])})))
        (js/console.log "FIXME Dispose Interactable"))
      (reset! *node node))))

(defn view [ctx]
  (let [ref (init ctx (atom nil))]
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
