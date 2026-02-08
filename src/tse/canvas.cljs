(ns tse.canvas
  (:require [carbon.rx :as rx :include-macros true]
            tse.card
            tse.label
            tse.transformer
            tse.background))

(defn view
  [{:keys [sub emit emit-sync], :as ctx}]
  (let [*node (atom nil)
        inc-pointers #(when (zero? (.-button %))
                        (emit-sync [:item/update-pointers 1]))
        dec-pointers #(when (zero? (.-button %))
                        (emit-sync [:item/update-pointers -1]))
        ref (fn [node]
              (when (not= node @*node)
                (when-let [node @*node]
                  (doto node
                    (.removeEventListener "pointerdown" inc-pointers true)
                    (.removeEventListener "pointerup" dec-pointers true)
                    (.removeEventListener "pointercancel" dec-pointers true)))
                (when node
                  (doto node
                    (.addEventListener "pointerdown" inc-pointers true)
                    (.addEventListener "pointerup" dec-pointers true)
                    (.addEventListener "pointercancel" dec-pointers true)))
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
