(ns tse.background.eff
  (:require tse.math))

(defn move [{:keys [db sub], [dv] :args}]
  (swap! db update-in [:background :origin]
         (fn [v]
           (-> dv
               (tse.math/v% @(sub [:canvas/scale]))
               (tse.math/v+ v)
               (tse.math/v0)))))

(defn resize [{:keys [db sub emit], [^js/DomRect rect ^js/DomRect deltaRect] :args}]
  (let [dv [(.-width deltaRect) (.-height deltaRect)]
        scale @(sub [:canvas/scale])]
    (emit [:background/move [(.-left deltaRect) (.-top deltaRect)]])
    (swap! db update-in [:background :dimensions]
           tse.math/v+
           (tse.math/v% dv scale))))

(defn set-dimensions [{:keys [db], [dimensions] :args}]
  (swap! db assoc-in [:background :dimensions] dimensions))

(defn show-menu [{:keys [db], [menu] :args}]
  (let [p (.getPosition menu)
        x (.-x p)
        y (.-y p)]
    (swap! db assoc-in [:background :menu-position] [x y])))

(def spec
  {:background/move move
   :background/resize resize
   :background/set-dimensions set-dimensions
   :background/show-menu show-menu})
