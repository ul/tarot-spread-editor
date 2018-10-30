(ns tse.label.eff)

(defn add-label [{:keys [db sub], [item] :args}]
  (let [canvas (.. js/document (getElementById "canvas") getBoundingClientRect)
        [mx my] @(sub [:background/menu-position])
        scale @(sub [:canvas/scale])
        x (-> mx (- (.-scrollX js/window) (.-x canvas)) (/ scale))
        y (-> my (- (.-scrollY js/window) (.-y canvas)) (/ scale))]
    (js/console.log canvas mx my (.-scrollX js/window) scale x y)
    (swap! db update :items
           (fn [items]
             (conj (mapv #(assoc % :selected? false) items)
                   (merge
                    {:layer :labels
                     :origin [x y]
                     :angle 0
                     :selected? true
                     :z-index @(sub [:item/next-z-index])}
                    item))))))

(defn update-label [{:keys [db sub], [item id] :args}]
  (swap! db update-in [:items id] merge item))

(def spec
  {:label/add add-label
   :label/update update-label})
