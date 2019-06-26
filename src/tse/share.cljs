(ns tse.share
  (:require))

(defn view [{:keys [sub]}]
  [:div
   {:style {:position "fixed"
            :top 0
            :bottom 0
            :left 0
            :right 0
            :background "#eee"
            :display (if @(sub [:share/in-progress]) "flex" "none")
            :align-items "center"
            :justify-content "center"}}
   [:h1 "Rendering..."]])
