(ns tse.toolbar
  (:require))

(defn view [{:keys [sub emit]}]
  [:div
   {:style {:display "flex"
            :margin "1em"}}
   ;; [:div {:style {:flex 1}}]
   [:button.pure-button.button-destructive
    {:disabled (when (empty? @(sub [:item/selected])) "disabled")
     :title @(sub [:t :toolbar/remove-selected])
     :on-click #(emit [:item/remove-selected])}
    [:i.fa.fa-times]]
   [:button.pure-button.button-destructive
    {:disabled (when (empty? @(sub [:item/all])) "disabled")
     :title @(sub [:t :toolbar/remove-all])
     :on-click #(emit [:item/remove-all])}
    [:i.fa.fa-trash]]])
