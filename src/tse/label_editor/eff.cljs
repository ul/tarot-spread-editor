(ns tse.label-editor.eff)

(defn new-label
  [{:keys [db], [position] :args}]
  (swap! db assoc
    :label-editor
    {:visible? true, :id nil, :delta nil, :position position}))

(defn edit-label
  [{:keys [db sub], [id] :args}]
  (let [label @(sub [:item/entity id])]
    (swap! db assoc
      :label-editor
      {:visible? true, :id id, :delta (get label :quill-content)})))

(defn save-label
  "Takes the label rendered by the editor view: hiccup :content, Quill
  :quill-content and measured :dimensions."
  [{:keys [db emit], [{:keys [content quill-content dimensions]}] :args}]
  (let [{:keys [id position]} (get @db :label-editor)
        item {:content content,
              :original-dimensions dimensions,
              :quill-content quill-content,
              :dimensions dimensions}]
    (swap! db update :label-editor assoc :visible? false)
    (emit (if (some? id) [:label/update item id] [:label/add item position]))))

(defn cancel
  [{:keys [db]}]
  (swap! db update :label-editor assoc :visible? false))

(def spec
  {:label-editor/new new-label,
   :label-editor/edit edit-label,
   :label-editor/save save-label,
   :label-editor/cancel cancel})
