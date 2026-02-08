(ns tse.utils)

(defn update-selected
  [items f & args]
  (persistent! (reduce-kv (fn [acc idx item]
                            (if (get item :selected?)
                              (assoc! acc idx (apply f item args))
                              acc))
                          (transient items)
                          items)))

(defn measure-html
  [html]
  (when-let [ruler (.getElementById js/document "ruler")]
    (set! (.-innerHTML ruler) html)
    [(.-clientWidth ruler) (.-clientHeight ruler)]))
