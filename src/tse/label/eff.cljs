(ns tse.label.eff)

(defn add-label [{:keys [db sub], [item] :args}]
  (swap! db update :items
         (fn [items]
           (conj (mapv #(assoc % :selected? false) items)
                 (merge
                  {:layer :labels
                   :origin [0 0]
                   :angle 0
                   :selected? true
                   :z-index @(sub [:item/next-z-index])}
                  item)))))

(defn update-label [{:keys [db sub], [item id] :args}]
  (swap! db update-in [:items id] merge item))

(def spec
  {:label/add add-label
   :label/update update-label})
