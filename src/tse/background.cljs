(ns tse.background
  (:require [cuerdas.core :as str]
            [carbon.rx :as rx :include-macros true]
            tse.math
            tse.menu
            tse.background-image))

(defn show-grid-menu-item [{:keys [sub emit]}]
  (tse.menu/make-check-item {:content (sub [:t :menu/show-grid? "Show grid?"])
                             :checked? (sub [:config/show-grid?])
                             :action #(emit [:config/toggle-grid-show (.isChecked %)])}))

(defn snap-grid-menu-item [{:keys [sub emit]}]
  (tse.menu/make-check-item {:content (sub [:t :menu/snap-grid? "Snap to grid?"])
                             :checked? (sub [:config/snap-grid?])
                             :action #(emit [:config/toggle-grid-snap (.isChecked %)])}))

(defn download-menu-item [{:keys [sub emit]}]
  (tse.menu/make-item {:content (sub [:t :menu/download "Download"])
                       :action #(emit [:share/download])}))

(defn add-label-menu-item [{:keys [sub emit]}]
  (tse.menu/make-item {:content (sub [:t :menu/add-label "Add label"])
                       :action #(emit [:label-editor/new])}))

(defn set-background-menu-item [{:keys [sub emit]}]
  (tse.menu/make-item {:content (sub [:t :menu/set-background "Set background"])
                       :action #(emit [:background-dialog/open])}))

(defn make-popup-menu [{:keys [sub] :as ctx} node]
  (tse.menu/make-popup
   [(show-grid-menu-item ctx)
    (snap-grid-menu-item ctx)
    (download-menu-item ctx)
    (add-label-menu-item ctx)
    (set-background-menu-item ctx)]
   node))

(defn init-bg [{:keys [emit] :as ctx} *node]
  (fn [node]
    (when node
      (make-popup-menu ctx node))
    (reset! *node node)))

(defn grid-css [grid]
  (str/format "repeating-linear-gradient(0deg,transparent,transparent %(step)spx,#CCC %(step)spx,#CCC calc(%(step)spx + 1px)),repeating-linear-gradient(-90deg,transparent,transparent %(step)spx,#CCC %(step)spx,#CCC calc(%(step)spx + 1px))" grid))

(defn background-width [node border-box-width scale]
  (if node
    (max border-box-width
         (/ (- js/document.body.clientWidth (.-clientLeft node)) scale))
    border-box-width))

(defn background-height [node border-box-height scale]
  (if node
    (max border-box-height
         (/ (- js/document.body.clientHeight (.-clientTop node)) scale))
    border-box-height))

(defn view [_]
  (let [node (rx/cell nil)]
    (fn [{:keys [sub emit] :as ctx}]
      (let [[_ _ w h] @(sub [:item/big-box])
            grid @(sub [:config/grid])
            scale @(sub [:canvas/scale])]
        [:div
         {:ref (init-bg ctx node)
          :style {:position "absolute"
                  :backgroundImage (when (get grid :show?) (grid-css grid))
                  :backgroundColor @(sub [:background/color])
                  :width (background-width @node w scale)
                  :height (background-height @node h scale)}
          :on-mousedown #(when (and (zero? (.-button %)) (.-shiftKey %))
                           (let [offset [(.-offsetX %) (.-offsetY %)]
                                 target-rect (.. % -target getBoundingClientRect)
                                 target-offset [(.-left target-rect) (.-top target-rect)]
                                 node-rect (.getBoundingClientRect @node)
                                 node-offset [(.-left node-rect) (.-top node-rect)]]
                             (emit [:transformer/start-selection
                                    (tse.math/v+ offset (tse.math/v- target-offset node-offset))
                                    [(.-clientX %) (.-clientY %)]])))}
         [tse.background-image/view ctx]]))))
