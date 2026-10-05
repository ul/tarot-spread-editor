(ns tse.canvas
  (:require tse.card
            tse.label
            tse.transformer
            tse.background))

(defn view
  [{:keys [emit-sync]}]
  ;; Number of pointers pressed on the canvas, used for multi-touch
  ;; selection. Releases are tracked on window: a pointer can be released
  ;; outside of the canvas.
  (let [*node (atom nil)
        pointers (js/Set.)
        sync-pointers #(emit-sync [:item/set-pointers (.-size pointers)])
        pointer-down #(when (zero? (.-button %))
                        (.add pointers (.-pointerId %))
                        (sync-pointers))
        pointer-up #(when (.delete pointers (.-pointerId %)) (sync-pointers))
        ref (fn [node]
              (when (not= node @*node)
                (when-let [node @*node]
                  (.removeEventListener node "pointerdown" pointer-down true)
                  (.removeEventListener js/window "pointerup" pointer-up true)
                  (.removeEventListener js/window
                                        "pointercancel"
                                        pointer-up
                                        true))
                (when node
                  (.addEventListener node "pointerdown" pointer-down true)
                  (.addEventListener js/window "pointerup" pointer-up true)
                  (.addEventListener js/window "pointercancel" pointer-up true))
                (reset! *node node)))]
    (fn [{:keys [sub emit], :as ctx}]
      (let [scale @(sub [:canvas/scale])]
        [:div
         {:style {:position "relative",
                  :display "flex",
                  :flex-direction "column",
                  :flex "1"}}
         [:div
          {:style {:margin-top "1rem", :margin-bottom "1rem", :display "flex"}}
          [:input
           {:type :range,
            :title @(sub [:t :canvas/scale]),
            :aria-label @(sub [:t :canvas/scale]),
            :min 0.2,
            :max 2.5,
            :step 0.1,
            :style {:flex 1},
            :value scale,
            :on-input #(emit [:canvas/set-scale
                              (-> %
                                  .-target
                                  .-value
                                  js/parseFloat)])}]]
         [:div#canvas
          {:ref ref,
           :style {:transform-origin "left top",
                   :transform (str "scale(" @(sub [:canvas/scale]) ")"),
                   :will-change "transform",
                   :user-select "none",
                   :-webkit-user-select "none",
                   :touch-action "manipulation"}}
          ^{:key "background"} [tse.background/view ctx]
          (for [id @(sub [:item/layer-indices :cards])]
            ^{:key id} [tse.card/view ctx id])
          (for [id @(sub [:item/layer-indices :labels])]
            ^{:key id} [tse.label/view ctx id])
          ^{:key "transformer"} [tse.transformer/view ctx]]]))))
