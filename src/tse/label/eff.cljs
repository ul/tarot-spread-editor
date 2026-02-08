(ns tse.label.eff)

(defn add-label
  [{:keys [db sub], [item] :args}]
  (let [canvas (.. js/document (getElementById "canvas") getBoundingClientRect)
        menu-pos @(sub [:background/menu-position])
        scale @(sub [:canvas/scale])
        [mx my]
          (or menu-pos
              [(+ (.-scrollX js/window) (.-x canvas) (/ (.-width canvas) 2))
               (+ (.-scrollY js/window)
                  (.-y canvas)
                  (/ (- (.-innerHeight js/window) (.-y canvas)) 2))])
        x (-> mx
              (- (.-scrollX js/window) (.-x canvas))
              (/ scale))
        y (-> my
              (- (.-scrollY js/window) (.-y canvas))
              (/ scale))]
    (swap! db update
      :items
      (fn [items]
        (conj (mapv #(assoc % :selected? false) items)
              (merge {:layer :labels,
                      :origin [x y],
                      :angle 0,
                      :selected? true,
                      :z-index @(sub [:item/next-z-index])}
                     item))))))

(defn update-label
  [{:keys [db sub], [item id] :args}]
  (swap! db update-in [:items id] merge item))

(def spec {:label/add add-label, :label/update update-label})
