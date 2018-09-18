(ns tse.header)

(def header-style
  {:display "flex"
   :background "#2d3e50"
   :color "#fff"
   :box-shadow "0 1px 1px rgba(0,0,0,.1)"
   :padding "0.5em"
   :justify-content "center"})

(def title-style
  {:font-weight 400
   :font-size "120%"
   :padding "0.5em 1.5em 0.5em 1em"
   :text-transform "uppercase"})

(def link-style
  {:text-decoration "none"
   :color "#fff"})

(def lang-style
  {:width "5em"
   :background "#2d3e50"
   :color "#6fbef3"})
   
(def item-style
  {:display "flex"
   :align-items "center"})

(defn view [{:keys [sub emit]}]
  [:div
   {:style header-style}
   [:div
    {:style title-style}
    @(sub [:t :app/title])]
   [:div
    {:style item-style}
    [:a
     {:style link-style
      :href "mailto:fer.obbee@gmail.com"}
     @(sub [:t :app/contact])]]
   [:div {:style {:flex 1}}]
   [:button.pure-button
    {:style (merge lang-style item-style)
     :title @(sub [:t :lang/switch])
     :on-click #(emit [:lang/switch])}
    [:i.fa.fa-language] @(sub [:lang/code])]])
