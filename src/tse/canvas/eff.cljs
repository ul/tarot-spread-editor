(ns tse.canvas.eff)

(defn set-scale
  [{:keys [db], [scale] :args}]
  (swap! db assoc-in [:canvas :scale] scale))

(def spec {:canvas/set-scale set-scale})
