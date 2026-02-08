(ns tse.toolbar
  (:require))

(defn view
  [{:keys [sub emit]}]
  (let [shift-mode? @(sub [:transformer/shift-mode?])
        has-selected? (not (empty? @(sub [:item/selected])))]
    [:div
     {:style {:display "flex", :margin "1em", :flex-wrap "wrap", :gap "4px"}}
     [:button.pure-button.button-destructive
      {:disabled (when-not has-selected? "disabled"),
       :title @(sub [:t :toolbar/remove-selected]),
       :aria-label @(sub [:t :toolbar/remove-selected]),
       :on-click #(emit [:item/remove-selected])} [:i.fa.fa-times]]
     [:button.pure-button.button-destructive
      {:disabled (when (empty? @(sub [:item/all])) "disabled"),
       :title @(sub [:t :toolbar/remove-all]),
       :aria-label @(sub [:t :toolbar/remove-all]),
       :on-click #(emit [:item/remove-all])} [:i.fa.fa-trash]]
     [:div {:style {:flex 1}}]
     [:button.pure-button
      {:title @(sub [:t :toolbar/add-label]),
       :aria-label @(sub [:t :toolbar/add-label]),
       :on-click #(emit [:label-editor/new])} [:i.fa.fa-tag]]
     [:button.pure-button
      {:title @(sub [:t :toolbar/set-background]),
       :aria-label @(sub [:t :toolbar/set-background]),
       :on-click #(emit [:background-dialog/open])} [:i.fa.fa-image]]
     (let [grid-on? @(sub [:config/show-grid?])]
       [:button.pure-button
        {:title @(sub [:t :toolbar/toggle-grid]),
         :aria-label @(sub [:t :toolbar/toggle-grid]),
         :style {:background-color (when grid-on? "rgba(100,149,237,0.9)")},
         :on-click #(emit [:config/toggle-grid-show (not grid-on?)])}
        [:i.fa.fa-th]])
     (let [board-visible? @(sub [:config/board-visible?])]
       [:button.pure-button
        {:title @(sub [:t :toolbar/toggle-board]),
         :aria-label @(sub [:t :toolbar/toggle-board]),
         :style {:background-color (when board-visible?
                                     "rgba(100,149,237,0.9)")},
         :on-click #(emit [:config/toggle-board])} [:i.fa.fa-columns]])
     [:button.pure-button
      {:disabled (when-not has-selected? "disabled"),
       :title "Toggle resize mode",
       :style {:background-color (when shift-mode? "rgba(100,149,237,0.9)")},
       :on-click #(emit [:transformer/shift-mode (not shift-mode?)])}
      [:i.fa.fa-expand]]]))
