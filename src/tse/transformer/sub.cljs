(ns tse.transformer.sub
  (:require [carbon.rx :as rx :include-macros true]
            [tse.math :as math]))

(defn get-entity [{:keys [sub db]}]
  (let [trans (rx/cursor db [:transformer])
        boxes (rx/rx (map math/item-box @(sub [:item/selected])))]
    (rx/rx
     (let [boxes @boxes
           [left top right bottom] (reduce math/merge-boxes boxes)]
       (merge
        {:origin [left top]
         :dimensions [(- right left) (- bottom top)]
         :angle 0}
        @trans)))))

(defn shift-mode? [{:keys [db]}]
  (rx/rx (get-in @db [:transformer :shift-mode?])))

(defn dragging? [{:keys [db]}]
  (rx/rx (get-in @db [:transformer :dragging?])))

(def spec
  {:transformer/entity get-entity
   :transformer/shift-mode? shift-mode?
   :transformer/dragging? dragging?})
