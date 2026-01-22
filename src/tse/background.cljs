(ns tse.background
  (:require [cuerdas.core :as str]
            [carbon.rx :as rx :include-macros true]
            tse.math
            tse.menu
            tse.background-image))

(defn show-grid-menu-item [{:keys [sub emit]}]
  (tse.menu/make-check-item {:content (sub [:t :menu/show-grid? "Show grid?"])
                             :checked? (sub [:config/show-grid?])
                             :action #(emit [:config/toggle-grid-show (.isChecked ^goog.ui.MenuItem %)])}))

(defn snap-grid-menu-item [{:keys [sub emit]}]
  (tse.menu/make-check-item {:content (sub [:t :menu/snap-grid? "Snap to grid?"])
                             :checked? (sub [:config/snap-grid?])
                             :action #(emit [:config/toggle-grid-snap (.isChecked ^goog.ui.MenuItem %)])}))

(defn add-label-menu-item [{:keys [sub emit]}]
  (tse.menu/make-item {:content (sub [:t :menu/add-label "Add label"])
                       :action #(emit [:label-editor/new])}))

(defn set-background-menu-item [{:keys [sub emit]}]
  (tse.menu/make-item {:content (sub [:t :menu/set-background "Set background"])
                       :action #(emit [:background-dialog/open])}))

(defn make-popup-menu [{:keys [sub emit] :as ctx} node]
  (tse.menu/make-popup
   [(show-grid-menu-item ctx)
    (snap-grid-menu-item ctx)
    (add-label-menu-item ctx)
    (set-background-menu-item ctx)]
   node
   {:on-show #(emit [:background/show-menu %])}))

(def long-press-delay 500)

(defn init-bg [{:keys [emit] :as ctx} *node *popup]
  (fn [node]
    (when (not= node @*node)
      (when-let [p @*popup]
        (.dispose p))
      (reset! *popup (when node (make-popup-menu ctx node)))
      (reset! *node node))))

(defn grid-css [grid]
  (str/format "repeating-linear-gradient(0deg,transparent,transparent %(step)spx,#CCC %(step)spx,#CCC calc(%(step)spx + 1px)),repeating-linear-gradient(-90deg,transparent,transparent %(step)spx,#CCC %(step)spx,#CCC calc(%(step)spx + 1px))" grid))

;; Cache body dimensions to avoid layout thrashing during drag
(defonce ^:private cached-body-width (volatile! 0))
(defonce ^:private cached-body-height (volatile! 0))

(defn- update-body-dimensions! []
  (vreset! cached-body-width js/document.body.clientWidth)
  (vreset! cached-body-height js/document.body.clientHeight))

(defonce ^:private _resize-listener
  (do
    (update-body-dimensions!)
    (.addEventListener js/window "resize" update-body-dimensions!)
    true))

(defn background-width [node border-box-width scale]
  (if node
    (max border-box-width
         (/ (- @cached-body-width (.-clientLeft node)) scale))
    border-box-width))

(defn background-height [node border-box-height scale]
  (if node
    (max border-box-height
         (/ (- @cached-body-height (.-clientTop node)) scale))
    border-box-height))

(def padding 50)

(defn view [ctx]
  (let [node (rx/cell nil)
        popup (rx/cell nil)
        ref-callback (init-bg ctx node popup)
        long-press-timer (volatile! nil)
        cancel-long-press! (fn []
                             (when-let [timer @long-press-timer]
                               (js/clearTimeout timer)
                               (vreset! long-press-timer nil)))]
    (fn [{:keys [sub emit] :as ctx}]
      (let [[_ _ w h] @(sub [:item/big-box])
            grid @(sub [:config/grid])
            scale @(sub [:canvas/scale])]
        [:div
         {:ref ref-callback
          :style {:position "absolute"
                  :background-image (when (get grid :show?) (grid-css grid))
                  :background-color @(sub [:background/color])
                  :width (str (background-width @node w scale) "px")
                  :height (str (background-height @node (+ h padding) scale) "px")}
          :on-click #(emit [:item/unselect-all])
          :on-mousedown #(when (and (zero? (.-button %)) (.-shiftKey %))
                           (let [offset [(.-offsetX %) (.-offsetY %)]
                                 target-rect (.. % -target getBoundingClientRect)
                                 target-offset [(.-left target-rect) (.-top target-rect)]
                                 node-rect (.getBoundingClientRect @node)
                                 node-offset [(.-left node-rect) (.-top node-rect)]]
                             (emit [:transformer/start-selection
                                    (tse.math/v+ offset (tse.math/v- target-offset node-offset))
                                    [(.-clientX %) (.-clientY %)]])))
          :on-touch-start (fn [e]
                            (when (and @popup (= 1 (.. e -touches -length)))
                              (let [touch (aget (.-touches e) 0)
                                    x (.-clientX touch)
                                    y (.-clientY touch)]
                                (vreset! long-press-timer
                                         (js/setTimeout
                                          #(.showAt ^goog.ui.PopupMenu @popup x y)
                                          long-press-delay)))))
          :on-touch-move cancel-long-press!
          :on-touch-end cancel-long-press!
          :on-touch-cancel cancel-long-press!}
         [tse.background-image/view ctx]]))))
