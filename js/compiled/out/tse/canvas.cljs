(ns tse.canvas
  (:require [carbon.rx :as rx :include-macros true]
            tse.card
            tse.label
            tse.transformer
            tse.background))

(defn view [{:keys [sub emit] :as ctx}]
  (fn [{:keys [sub emit] :as ctx}]
    (let [scale @(sub [:canvas/scale])]
      [:div
       {:style {:position "relative"
                :display "flex"
                :flex-direction "column"
                :flex "1"}}
       [:div
        {:style {:margin-top "1rem"
                 :margin-bottom "1rem"
                 :display "flex"}}
        [:input
         {:type :range
          :title @(sub [:t :canvas/scale])
          :min 0.2
          :max 2.5
          :step 0.1
          :style {:flex 1}
          :value scale
          :on-input #(emit [:canvas/set-scale (-> % .-target .-value js/parseFloat)])}]]
       [:div#canvas
        {:style {:transform-origin "left top"
                 :transform (str "scale(" @(sub [:canvas/scale]) ")")
                 :will-change "transform"
                 :user-select "none"
                 :-webkit-user-select "none"}}
        [tse.background/view ctx]
        (for [id @(sub [:item/layer-indices :cards])]
          ^{:key id}
          [tse.card/view ctx id])
        (for [id @(sub [:item/layer-indices :labels])]
          ^{:key id}
          [tse.label/view ctx id])
        [tse.transformer/view ctx]]])))
