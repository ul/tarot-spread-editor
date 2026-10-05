(ns tse.transformer
  (:require [interactjs :default interact :refer [Interactable InteractEvent]]
            [cuerdas.core :as str]
            [tse.math :as math]))

(set! *warn-on-infer* true)

(defn make-interact
  [{:keys [emit sub]} *node & [*dragged?]]
  (let [shift-mode? (sub [:transformer/shift-mode?])]
    (fn [node]
      (when (not= node @*node)
        (if node
          (do
            (.draggable ^Interactable (interact node)
                        #js {:inertia false,
                             :autoScroll #js {:enabled true, :margin 200},
                             :onstart #(emit [:transformer/start-drag]),
                             :onmove (fn [^InteractEvent e]
                                       (when *dragged? (reset! *dragged? true))
                                       (emit [:transformer/move
                                              [(.-dx e) (.-dy e)]])),
                             :onend #(emit [:transformer/end-drag])})
            (let [apply-resizable
                    (fn [shift-mode?]
                      (.resizable
                        ^Interactable (interact node)
                        (if shift-mode?
                          #js {:preserveAspectRatio true,
                               :edges #js {:left true,
                                           :top true,
                                           :right true,
                                           :bottom true},
                               :onstart #(emit [:transformer/start-drag]),
                               :onmove (fn [^InteractEvent e]
                                         (emit [:transformer/resize (.-rect e)
                                                (.-deltaRect e)])),
                               :onend #(emit [:transformer/end-drag])}
                          false)))]
              (apply-resizable @shift-mode?)
              ;; the subscription is shared, so the watch key must be
              ;; unique per element
              (add-watch shift-mode?
                         *node
                         (fn [_ _ _ shift-mode?]
                           (apply-resizable shift-mode?)))))
          (do (remove-watch shift-mode? *node)
              (.unset ^Interactable (interact @*node))))
        (reset! *node node)))))


(defn make-rotator
  [{:keys [emit]} *node]
  (fn [node]
    (when (not= node @*node)
      (if node
        (let [^Interactable interact (interact node)]
          (.draggable interact
                      #js {:inertia false,
                           :onstart #(emit [:transformer/start-drag]),
                           :onmove (fn [^InteractEvent e]
                                     (emit [:transformer/rotate
                                            [(.-dx e) (.-dy e)]])),
                           :onend (fn []
                                    (emit [:transformer/end-rotation])
                                    (emit [:transformer/end-drag]))}))
        (.unset ^Interactable (interact @*node)))
      (reset! *node node))))

(defn make-shift-listener
  "Holding Shift enables shift mode (resize and delete handles), the same as
  the toolbar toggle does on touch devices."
  [{:keys [emit]} *node]
  (let [on-key (fn [^js/KeyboardEvent e]
                 (when (and (= "Shift" (.-key e)) (not (.-repeat e)))
                   (emit [:transformer/shift-mode (= "keydown" (.-type e))])))]
    (fn [node]
      (when (not= node @*node)
        (if node
          (do (.addEventListener js/window "keydown" on-key)
              (.addEventListener js/window "keyup" on-key))
          (do (.removeEventListener js/window "keydown" on-key)
              (.removeEventListener js/window "keyup" on-key)))
        (reset! *node node)))))

(defn view
  [{:keys [sub emit], :as ctx}]
  (let [rotator-ref (make-rotator ctx (atom nil))
        *dragged? (atom false)
        interact-ref (make-interact ctx (atom nil) *dragged?)
        shift-ref (make-shift-listener ctx (atom nil))]
    (fn [{:keys [sub emit], :as ctx}]
      [:div {:ref shift-ref}
       (when-not (empty? @(sub [:item/selected]))
         (let [{[x y] :origin,
                [w h] :dimensions,
                {rot :origin} :rotator,
                {:keys [start end]} :selector,
                angle :angle}
                 @(sub [:transformer/entity])
               [rx ry] (or rot (math/get-rotator-origin x y w h))]
           [:div {:style {}}
            [:div
             {:ref rotator-ref,
              :role "slider",
              :aria-label @(sub [:t :transformer/rotate]),
              :style {:position "absolute",
                      :transform (str/format "translate(%spx, %spx)" rx ry),
                      :will-change "transform",
                      :z-index 100000,
                      :width "44px",
                      :height "44px",
                      :border-radius "44px",
                      :background-color "rgba(128,128,128,0.5)",
                      :border "2px solid rgba(128,128,128,0.5)",
                      :touch-action "none"}}]
            [:div
             {:ref interact-ref,
              :style
                {:position "absolute",
                 :transform
                   (str/format "translate(%spx, %spx) rotate(%srad)" x y angle),
                 :will-change "transform",
                 :z-index 100000,
                 :width (str w "px"),
                 :height (str h "px"),
                 :background-color "rgba(128,128,128,0.1)",
                 :border "2px solid rgba(128,128,128,0.5)",
                 :touch-action "none"},
              :on-dblclick #(emit [:item/edit]),
              :on-click (fn []
                          (if @*dragged?
                            (reset! *dragged? false)
                            (let [selected @(sub [:item/selected])]
                              (when (= 1 (count selected))
                                (let [item (first selected)]
                                  (when (= :labels (:layer item))
                                    (emit [:item/edit])))))))}
             (when @(sub [:transformer/shift-mode?])
               [:button.pure-button
                {:style {:width "44px",
                         :height "44px",
                         :font-size "14px",
                         :padding 0,
                         :color "red",
                         :background-color "rgba(128,128,128,0.8)",
                         :position "relative",
                         :left (str (- w 48) "px")},
                 :on-click #(emit [:item/remove-selected]),
                 :title @(sub [:t :toolbar/remove-selected]),
                 :aria-label @(sub [:t :toolbar/remove-selected])}
                [:i.fa.fa-times]])]]))
       (when-let [{:keys [x y w h]} @(sub [:transformer/selector-box])]
         [:div
          {:style {:position "absolute",
                   :z-index 100000,
                   :transform (str/format "translate(%spx, %spx)" x y),
                   :will-change "transform",
                   :background-color "rgba(128,128,128,0.1)",
                   :border "2px solid rgba(128,128,128,0.5)",
                   :width (str w "px"),
                   :height (str h "px")}}])])))
