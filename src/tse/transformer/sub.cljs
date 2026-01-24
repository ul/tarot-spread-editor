(ns tse.transformer.sub
  (:require [carbon.rx :as rx :include-macros true]
            [tse.math :as math]))

(defn get-entity
  [{:keys [sub db]}]
  (let [trans (rx/cursor db [:transformer])
        boxes (rx/rx (map math/item-box @(sub [:item/selected])))]
    (rx/rx (let [boxes @boxes
                 [left top right bottom] (reduce math/merge-boxes boxes)]
             (merge {:origin [left top],
                     :dimensions [(- right left) (- bottom top)],
                     :angle 0}
                    @trans)))))

(defn shift-mode?
  [{:keys [db]}]
  (rx/rx (get-in @db [:transformer :shift-mode?])))

(defn dragging? [{:keys [db]}] (rx/rx (get-in @db [:transformer :dragging?])))

(defn selector-box
  [{:keys [sub]}]
  (rx/rx (let [{{:keys [start end offset]} :selector} @(sub
                                                         [:transformer/entity])
               scale @(sub [:canvas/scale])]
           (when end
             (let [end (math/v+ end offset)
                   [x1 y1 x2 y2] (math/selector-box scale start end)]
               {:x x1, :y y1, :w (- x2 x1), :h (- y2 y1)})))))

(def spec
  {:transformer/entity get-entity,
   :transformer/shift-mode? shift-mode?,
   :transformer/dragging? dragging?,
   :transformer/selector-box selector-box})
