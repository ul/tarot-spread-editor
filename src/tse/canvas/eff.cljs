(ns tse.canvas.eff)

(defn set-scale
  [{:keys [db], [scale] :args}]
  (swap! db assoc-in [:canvas :scale] scale))

(defn set-viewport-width
  [{:keys [db], [width] :args}]
  (swap! db assoc-in [:viewport :width] width))

(def spec {:canvas/set-scale set-scale, :viewport/set-width set-viewport-width})
