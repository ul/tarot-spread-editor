(ns tse.item.eff
  (:require [tse.utils :refer [update-selected]]))

(defn toggle-selected [{:keys [db sub], [id multiselect?] :args}]
  (if multiselect?
    (swap! db update-in [:items id :selected?] not)
    (swap! db update :items
           (fn [items]
             (vec (map-indexed
                   (fn [i item]
                     (if (= i id)
                       (assoc item :selected? true :z-index @(sub [:item/next-z-index]))
                       (assoc item :selected? false)))
                   items))))))

(defn remove-selected [{:keys [db]}]
  (swap! db update :items (fn [items] (filterv #(not (get % :selected?)) items))))

(defn remove-all [{:keys [db sub]}]
  (when (js/confirm @(sub [:t :toolbar/remove-all-confirmation]))
    (swap! db assoc :items [])))

(defn unselect-all [{db :db}]
  (swap! db update :items update-selected assoc :selected? false))

(defn raise-selected [{:keys [db sub]}]
  (let [z-index @(sub [:item/next-z-index])]
    (swap! db update :items
           (fn [items]
             (mapv
              (fn [item]
                (if (get item :selected?)
                  (assoc item :z-index z-index)
                  item)) items)))))

(defn edit-item [{:keys [sub emit]}]
  (let [selected @(sub [:item/selected-indexed])]
    (when (and (= (count selected) 1)
               (-> selected first (get-in [1 :layer]) (= :labels)))
      (emit [:label-editor/edit (ffirst selected)]))))

(def spec
  {:item/toggle-selected toggle-selected
   :item/remove-selected remove-selected
   :item/remove-all remove-all
   :item/unselect-all unselect-all
   :item/raise-selected raise-selected
   :item/edit edit-item})
