(ns tse.item.sub
  (:require [carbon.rx :as rx :include-macros true]
            [tse.math :as math]))

(defn layer-pred [layer]
  (fn [item]
    (= (get item :layer) layer)))

(defn all-indexed [{sub :sub}]
  (rx/rx (map-indexed vector @(sub [:item/all]))))

(defn layer-indices [{:keys [db sub], [layer] :args}]
  ;; FIXME transducers ftw
  (rx/rx (map first (filter (comp (layer-pred layer) second) @(sub [:item/all-indexed])))))

(defn layer-all [{:keys [db sub], [layer] :args}]
  ;; FIXME transducers ftw
  (rx/rx (filter (layer-pred layer) @(sub [:item/all]))))

(defn get-entity [{:keys [sub], [id] :args}]
  (rx/rx (get @(sub [:item/all]) id)))

(defn all-selected [{:keys [sub]}]
  (rx/rx (filter #(get % :selected?) @(sub [:item/all]))))

(defn all-selected-indexed [{:keys [sub]}]
  (rx/rx (filter #(get-in % [1 :selected?]) @(sub [:item/all-indexed]))))

(defn big-box [{:keys [db sub]}]
  (rx/rx (reduce math/merge-boxes (map math/item-box @(sub [:item/all])))))

(defn next-z-index [{:keys [sub]}]
  (rx/rx (inc (reduce max 0 (map :z-index @(sub [:item/all]))))))

(def spec
  {:item/all [:items]
   :item/all-indexed all-indexed
   :item/layer-indices layer-indices
   :item/layer-all layer-all
   :item/entity get-entity
   :item/selected all-selected
   :item/selected-indexed all-selected-indexed
   :item/big-box big-box
   :item/next-z-index next-z-index})
