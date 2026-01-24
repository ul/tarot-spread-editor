(ns tse.card.eff)

(defn set-random-reversible
  [{:keys [db], [value] :args}]
  (swap! db assoc-in [:random :reversible?] value))

(defn add-card
  [{:keys [db sub], [{:keys [deck], :as card} item] :args}]
  (let [{:keys [dimensions]} @(sub [:deck/entity deck])
        z-index @(sub [:item/next-z-index])
        last-card (last @(sub [:item/layer-all :cards]))
        scale @(sub [:canvas/scale])
        origin (if last-card
                 (let [{[x y] :origin, [w h] :dimensions} last-card
                       doc-width (.. js/document -documentElement -scrollWidth)]
                   (if (< doc-width (* scale (+ x w (first dimensions))))
                     [0 (+ y h)]
                     [(+ x w) y]))
                 [0 0])]
    (swap! db update
      :items
      (fn [items]
        (conj (mapv #(assoc % :selected? false) items)
              (merge {:card card,
                      :layer :cards,
                      :angle 0,
                      :origin origin,
                      :dimensions dimensions,
                      :z-index z-index,
                      :selected? true}
                     item))))))

(defn random-card
  [{:keys [db sub emit]}]
  (let [deck @(sub [:deck/active-id])
        usable (set @(sub [:card/usable-by-deck deck]))
        used @(sub [:card/used-by-deck deck])
        used-by-freq (frequencies used)
        max-freq (reduce max (vals used-by-freq))
        used-in-the-last-deck (set (map first
                                     (remove (fn [[_ freq]] (< freq max-freq))
                                       used-by-freq)))
        available (clojure.set/difference usable used-in-the-last-deck)
        [suit index] (rand-nth (vec (if (empty? available) usable available)))
        reversible? @(sub [:card/random-reversible?])]
    (emit [:card/add {:deck deck, :suit suit, :index index}
           {:angle (if reversible? (rand-nth [0 Math/PI]) 0)}])))

(def spec
  {:card/set-random-reversible set-random-reversible,
   :card/add add-card,
   :card/random random-card})
