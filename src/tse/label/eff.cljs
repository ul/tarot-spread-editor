(ns tse.label.eff)

(defn add-label
  [{:keys [db sub], [item position] :args}]
  (let [z-index @(sub [:item/next-z-index])]
    (swap! db update
      :items
      (fn [items]
        (conj (mapv #(assoc % :selected? false) items)
              (merge {:layer :labels,
                      :origin (or position [0 0]),
                      :angle 0,
                      :selected? true,
                      :z-index z-index}
                     item))))))

(defn update-label
  "Updates the label at `id`. Does nothing if that item is no longer a label,
  e.g. the state was replaced by history navigation while editing."
  [{:keys [db], [item id] :args}]
  (swap! db update
    :items
    (fn [items]
      (if (= :labels (get-in items [id :layer]))
        (update items id merge item)
        items))))

(def spec {:label/add add-label, :label/update update-label})
