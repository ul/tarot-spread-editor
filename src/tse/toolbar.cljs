(ns tse.toolbar
  (:require))

(defn view
  [{:keys [sub emit]}]
  (let [shift-mode? @(sub [:transformer/shift-mode?])
        has-selected? (not (empty? @(sub [:item/selected])))]
    [:div {:style {:display "flex", :margin "1em"}}
     [:button.pure-button.button-destructive
      {:disabled (when-not has-selected? "disabled"),
       :title @(sub [:t :toolbar/remove-selected]),
       :on-click #(emit [:item/remove-selected])} [:i.fa.fa-times]]
     [:button.pure-button.button-destructive
      {:disabled (when (empty? @(sub [:item/all])) "disabled"),
       :title @(sub [:t :toolbar/remove-all]),
       :on-click #(emit [:item/remove-all])} [:i.fa.fa-trash]]
     [:div {:style {:flex 1}}]
     [:button.pure-button
      {:disabled (when-not has-selected? "disabled"),
       :title "Toggle resize mode",
       :style {:background-color (when shift-mode? "rgba(100,149,237,0.9)")},
       :on-click #(emit [:transformer/shift-mode (not shift-mode?)])}
      [:i.fa.fa-expand]]]))
