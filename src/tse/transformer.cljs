(ns tse.transformer
  (:require cljsjs.interact
            [carbon.rx :as rx :include-macros true]
            [cuerdas.core :as str]
            [tse.math :as math]
            [taoensso.encore :as encore]))

(set! *warn-on-infer* true)

;; memoize?
(defn make-interact [{:keys [emit sub]} *node]
  (let [grid (sub [:config/grid])
        shift-mode? (sub [:transformer/shift-mode?])]
    (fn [node]
      (when (not= node @*node)
        (if node
          (do
            (.draggable ^js/Interactable (js/window.interact node)
                        #js {:inertia false
                             :autoScroll #js {:enabled true
                                              :margin 200}
                             :onstart #(emit [:transformer/start-drag])
                             :onmove (fn [^js/InteractEvent e]
                                       (emit [:transformer/move [(.-dx e) (.-dy e)]]))
                             :onend #(emit [:transformer/end-drag])})
            (add-watch shift-mode? :shift-mode?
                       (fn [_ _ _ shift-mode?]
                         (.resizable ^js/Interactable (js/window.interact node)
                                     (if shift-mode?
                                       #js {:preserveAspectRatio true
                                            :edges #js {:left true :top true :right true :bottom true}
                                            :onstart #(emit [:transformer/start-drag])
                                            :onmove (fn [^js/InteractEvent e]
                                                      (emit [:transformer/resize (.-rect e) (.-deltaRect e)]))
                                            :onend #(emit [:transformer/end-drag])}
                                       false))))
            (add-watch grid :transformer
                       (fn [_ _ _ {:keys [snap? step]}]
                         (if (.. ^js/Interactable (js/window.interact node) -_element -parentNode)
                           (.draggable ^js/Interactable (js/window.interact node)
                                       #js {:snap (if snap?
                                                    #js {:targets #js [(js/window.interact.createSnapGrid #js {:x step :y step})]
                                                         :range js/Infinity
                                                         :relativePoints #js [#js {:x 0 :y 0}]}
                                                    nil)})))))
          (do
            (remove-watch shift-mode? :shift-mode?)
            (remove-watch grid :transformer)
            (js/console.log "FIXME: Dispose Interactable")))
        (reset! *node node)))))

;; memoize?
(defn make-rotator [{:keys [emit]} *node]
  (fn [node]
    (when (not= node @*node)
      (if node
        (let [^js/Interactable interact (js/window.interact node)]
          (.draggable interact #js {:inertia false
                                    :onstart #(emit [:transformer/start-drag])
                                    :onmove (fn [^js/InteractEvent e] (emit [:transformer/rotate [(.-dx e) (.-dy e)]]))
                                    :onend (fn [] (emit [:transformer/end-rotation]) (emit [:transformer/end-drag]))}))
        (js/console.log "FIXME: Dispose Interactable"))
      (reset! *node node))))

(defn view [{:keys [sub emit] :as ctx}]
  (let [rotator-ref (make-rotator ctx (atom nil))
        interact-ref (make-interact ctx (atom nil))]
    (.addEventListener js/window "keydown"
                       (fn [^js/Event e] (when (.-shiftKey e) (emit [:transformer/shift-mode true]))))
    (.addEventListener js/window "keyup"
                       #(emit [:transformer/shift-mode false]))
    (fn [{:keys [sub emit] :as ctx}]
      [:div
       (when-not (empty? @(sub [:item/selected]))
         (let [{[x y] :origin
                [w h] :dimensions
                {rot :origin} :rotator
                {:keys [start end]} :selector
                angle :angle}
               @(sub [:transformer/entity])
               [rx ry] (or rot (math/get-rotator-origin x y w h))]
           [:div
            {:style {}}
            [:div
             {:ref rotator-ref
              :style
              {:position "absolute"
               :transform (str/format "translate(%spx, %spx)" rx ry)
               :will-change "transform"
               :zIndex 100000
               :width 24
               :height 24
               :border-radius 24
               :background-color "rgba(128,128,128,0.5)"
               :border "2px solid rgba(128,128,128,0.5)"
               :touch-action "none"}}]
            [:div
             {:ref interact-ref
              :style
              {:position "absolute"
               :transform (str/format "translate(%spx, %spx) rotate(%srad)" x y angle)
               :will-change "transform"
               :zIndex 100000
               :width w
               :height h
               :background-color "rgba(128,128,128,0.1)"
               :border "2px solid rgba(128,128,128,0.5)"
               :touch-action "none"}
              :on-dblclick #(emit [:item/edit])}
             (when @(sub [:transformer/shift-mode?])
               [:button.pure-button
                {:style {:width 24
                         :height 24
                         :font-size 12
                         :padding 0
                         :color "red"
                         :background-color "rgba(128,128,128,0.8)"
                         :position "relative"
                         :left (- w 28)}
                 :on-click #(emit [:item/remove-selected])}
                [:i.fa.fa-times]])]]))
       ;; FIXME move calc to sub
       (let [{{:keys [start end offset]} :selector} @(sub [:transformer/entity])
             scale @(sub [:canvas/scale])]
         (when end
           (let [end (math/v+ end offset)
                 [x1 y1 x2 y2] (math/selector-box scale start end)
                 w (- x2 x1)
                 h (- y2 y1)]
             [:div
              {:style
               {:position "absolute"
                :zIndex 100000
                :transform (str/format "translate(%spx, %spx)" x1 y1)
                :will-change "transform"
                :background-color "rgba(128,128,128,0.1)"
                :border "2px solid rgba(128,128,128,0.5)"
                :width w
                :height h}}])))])))
