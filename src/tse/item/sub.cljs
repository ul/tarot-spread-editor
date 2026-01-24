(ns tse.item.sub
  (:require [carbon.rx :as rx :include-macros true]
            [tse.math :as math]))

(defn layer-pred [layer] (fn [item] (= (get item :layer) layer)))

(defn all-indexed [{sub :sub}] (rx/rx (map-indexed vector @(sub [:item/all]))))

(defn layer-indices
  [{:keys [db sub], [layer] :args}]
  ;; FIXME transducers ftw
  (rx/rx (map first
           (filter (comp (layer-pred layer) second)
             @(sub [:item/all-indexed])))))

(defn layer-all
  [{:keys [db sub], [layer] :args}]
  ;; FIXME transducers ftw
  (rx/rx (filter (layer-pred layer) @(sub [:item/all]))))

(defn get-entity
  [{:keys [sub], [id] :args}]
  (rx/rx (get @(sub [:item/all]) id)))

(defn all-selected
  [{:keys [sub]}]
  (rx/rx (filter #(get % :selected?) @(sub [:item/all]))))

(defn all-selected-indexed
  [{:keys [sub]}]
  (rx/rx (filter #(get-in % [1 :selected?]) @(sub [:item/all-indexed]))))

(defn big-box
  [{:keys [sub]}]
  (rx/rx
    (let [items @(sub [:item/all])]
      (when (seq items)
        (loop [items items
               left ##Inf
               top ##Inf
               right ##-Inf
               bottom ##-Inf]
          (if-let [{[x y] :origin, [w h] :dimensions, angle :angle} (first
                                                                      items)]
            (let [w2 (* 0.5 w)
                  h2 (* 0.5 h)
                  x0 (+ x w2)
                  y0 (+ y h2)
                  cos (Math/cos angle)
                  sin (Math/sin angle)
                  ;; rotated corners (inlined from item-box)
                  x1 (+ x0 (+ (* (- w2) cos) (* h2 sin)))
                  y1 (+ y0 (- (* (- w2) sin) (* h2 cos)))
                  x2 (+ x0 (- (* (- w2) cos) (* h2 sin)))
                  y2 (+ y0 (+ (* (- w2) sin) (* h2 cos)))
                  x3 (+ x0 (- (* w2 cos) (* h2 sin)))
                  y3 (+ y0 (+ (* w2 sin) (* h2 cos)))
                  x4 (+ x0 (+ (* w2 cos) (* h2 sin)))
                  y4 (+ y0 (- (* w2 sin) (* h2 cos)))]
              (recur (next items)
                     (min left x1 x2 x3 x4)
                     (min top y1 y2 y3 y4)
                     (max right x1 x2 x3 x4)
                     (max bottom y1 y2 y3 y4)))
            [left top right bottom]))))))

(defn next-z-index
  [{:keys [sub]}]
  (rx/rx (inc (reduce max 0 (map :z-index @(sub [:item/all]))))))

(def spec
  {:item/all [:items],
   :item/all-indexed all-indexed,
   :item/layer-indices layer-indices,
   :item/layer-all layer-all,
   :item/entity get-entity,
   :item/selected all-selected,
   :item/selected-indexed all-selected-indexed,
   :item/pointers [:pointers],
   :item/big-box big-box,
   :item/next-z-index next-z-index})
