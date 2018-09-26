(ns tse.deck-search
  (:require [tse.autocomplete :as autocomplete]
            [carbon.rx :as rx :include-macros true]))

(defn deck-label [{:keys [name]} lang]
  (let [en-name (get name :en)]
    (if (= :en lang)
      en-name
      (str (get name lang) " / " en-name))))

(defn deck->autocomplete-item [lang [k m]]
  {:value k
   :label (deck-label m lang)})

(defn view [{:keys [sub emit] :as ctx}]
  (let [lang (sub [:lang/code])
        items (rx/rx (mapv (partial deck->autocomplete-item @lang) @(sub [:deck/all])))
        active (rx/lens {:label (deck-label @(sub [:deck/active]) @lang)
                         :value @(sub [:deck/active-id])}
                        #(emit [:deck/set-active (get % :value)]))]
    [:div
     [autocomplete/view {:items items
                         :active active
                         :placeholder (sub [:t :deck-search/placeholder "Select a deck..."])
                         :hint (sub [:t :deck-search/hint "Start typing deck name (at least 3 letters)"])}]]))
