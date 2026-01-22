(ns tse.board
  (:require [carbon.rx :as rx :include-macros true]
            [taoensso.encore :as encore]
            [tse.deck-search :as deck-search]))

(defn suit-selector [{:keys [sub emit]}]
  [:div.pure-menu
   {:style {:width "150px"
            :margin-right "1rem"}}
   [:ul.pure-menu-list
    (let [lang @(sub [:lang/code])
          active @(sub [:suit/active-id])]
      (for [[k v] (map-indexed vector (get @(sub [:suitcase/active]) :suits))]
        ^{:key k}
        [:li.pure-menu-item
         {:class (when (= k active) "pure-menu-active")
          :style {}}
         [:a.pure-menu-link
          {:href "#"
           :style {:text-align "center"}
           :on-click (fn [e] (.preventDefault e) (emit [:suit/activate k]))}
          (or (get-in v [:name lang])
              (get-in v [:name :en]))]]))]])

(defn card-selector [{:keys [sub emit]}]
  [:div
   {:style {:flex 1}}
   (let [deck @(sub [:deck/active-id])
         suit @(sub [:suit/active-id])
         used (set @(sub [:card/used-by-deck deck]))]
     (for [{:keys [src index]} @(sub [:suit/active-cards])]
       ^{:key src}
       [:a.mini
        {:href "#"
         :class (when (contains? used [suit index]) "active")
         :on-click (fn [e]
                     (.preventDefault e)
                     (emit [:card/add {:deck deck :suit suit :index index}]))}
        [:img
         {:src src
          :style {:height "120px"}}]]))])

(defn view [{:keys [sub emit] :as ctx}]
  [:div
   {:style {:display "flex"
            :flex-direction "column"
            :margin "1rem"}}
   [deck-search/view ctx]
   [:div
    {:style {:display "flex"}}
    [suit-selector ctx]
    [:div
     {:style {:flex 1
              :display "flex"
              :flex-direction "column"}}
     [card-selector ctx]
     [:div
      [:button.pure-button
       {:title @(sub [:t :board/random-hint "Draw random card"])
        :on-click #(emit [:card/random])}
       @(sub [:t :board/random "random"])]
      " "
      [:label.pure-checkbox
       {:title @(sub [:t :board/reversible?-hint "reversible?"])}
       [:input
        {:type "checkbox"
         :checked (when @(sub [:card/random-reversible?]) "checked")
         :on-change #(emit [:card/set-random-reversible (.. % -target -checked)])}]
       " "
       @(sub [:t :board/reversible? "reversible?"])]]]]])
