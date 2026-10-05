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

(defn- canvas-rect
  []
  (some-> (.getElementById js/document "canvas")
          .getBoundingClientRect))

(defn page->canvas
  "Converts page coordinates to unscaled canvas coordinates."
  [scale [x y]]
  (if-let [rect (canvas-rect)]
    [(/ (- x (.-scrollX js/window) (.-x rect)) scale)
     (/ (- y (.-scrollY js/window) (.-y rect)) scale)]
    [0 0]))

(defn viewport-center
  "The middle of the visible part of the canvas, in canvas coordinates."
  [scale]
  (if-let [rect (canvas-rect)]
    [(/ (.-width rect) 2 scale)
     (/ (- (.-innerHeight js/window) (.-y rect)) 2 scale)]
    [0 0]))
