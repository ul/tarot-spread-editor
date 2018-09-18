(ns tse.utils)

(defn update-selected [items f & args]
  (mapv
   (fn [item]
     (if (get item :selected?)
       (apply f item args)
       item))
   items))

(defn measure-html [html]
  (let [ruler (.getElementById js/document "ruler")]
    (set! (.-innerHTML ruler) html)
    [(.-clientWidth ruler) (.-clientHeight ruler)]))
