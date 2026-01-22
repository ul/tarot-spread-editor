(ns tse.label-editor.eff
  (:require hickory.core
            [quill :as Quill]
            ["quill-delta" :as Delta]
            tse.math
            tse.utils))

(defn new-label [{:keys [db]}]
  (let [editor (get-in @db [:label-editor :editor])]
    (.setText ^Quill editor "\n"))
  (swap! db update :label-editor assoc :visible? true :id nil))

(defn edit-label [{:keys [db sub], [id] :args}]
  (let [editor (get-in @db [:label-editor :editor])
        label @(sub [:item/entity id])]
    (.setContents ^Quill editor (-> (get label :quill-content) (clj->js) (Delta.)))
    (swap! db update :label-editor assoc :visible? true :id id)))

(defn save-label [{:keys [db emit]}]
  (let [id (get-in @db [:label-editor :id])
        editor (get-in @db [:label-editor :editor])
        html (.. editor -root -innerHTML)
        content (->> html
                     hickory.core/parse-fragment
                     (map hickory.core/as-hiccup))
        ;; extra pixel to prevent accidental word wrap
        dimensions (mapv inc (tse.utils/measure-html html))
        quill-content (-> (.getContents ^Quill editor) (aget "ops") (js->clj))]
    (swap! db update :label-editor assoc :visible? false :id nil)
    (emit [(if id :label/update :label/add)
           {:content content
            :original-dimensions dimensions
            :quill-content quill-content
            :dimensions dimensions}
           id])))

(defn cancel [{:keys [db]}]
  (swap! db update :label-editor assoc :visible? false))

(defn set-editor [{:keys [db], [editor] :args}]
  (swap! db update :label-editor assoc :editor editor))

(defn dispose-editor [{:keys [db]}]
  (swap! db update :label-editor dissoc :editor))

(def spec
  {:label-editor/new new-label
   :label-editor/edit edit-label
   :label-editor/save save-label
   :label-editor/cancel cancel
   :label-editor/set-editor set-editor
   :label-editor/dispose-editor dispose-editor})
