(ns tse.label-editor
  (:require carbon.vdom
            hickory.core
            ["quill" :default Quill :refer [Delta]]
            tse.dialog
            tse.sanitize
            tse.utils))

(let [Parchment (.import Quill "parchment")
      StyleAttributor (.-StyleAttributor Parchment)
      BackgroundStyle (StyleAttributor. "background"
                                        "background-color"
                                        #js {:scope
                                               (.. Parchment -Scope -BLOCK)})
      SizeStyle (StyleAttributor. "size"
                                  "font-size"
                                  #js {:scope (.. Parchment -Scope -INLINE),
                                       :whitelist #js [false "40px" "50px"
                                                       "70px" "90px" "100px"]})]
  (.register Quill "formats/background" BackgroundStyle true)
  (.register Quill "formats/size" SizeStyle true))

(def editor-options
  #js {:theme "snow",
       :formats #js ["font" "size" "bold" "italic" "underline" "strike" "color"
                     "background"],
       :modules #js {:toolbar #js [#js [#js {:font #js []}]
                                   #js [#js {:size #js ["40px" "50px" "70px"
                                                        "90px" "100px"]}]
                                   #js ["bold" "italic" "underline" "strike"]
                                   #js [#js {:color #js []}
                                        #js {:background #js []}]
                                   #js ["clean"]]}})

(defn load-delta!
  [^Quill editor delta]
  (if (seq delta)
    (.setContents editor (Delta. (clj->js delta)))
    (.setText editor "\n")))

(defn read-label
  "Renders the editor contents into label data. The DOM is needed both to
  parse Quill's HTML and to measure it."
  [^Quill editor]
  (let [html (.. editor -root -innerHTML)]
    {:content (->> (hickory.core/parse-fragment html)
                   (map hickory.core/as-hiccup)
                   tse.sanitize/sanitize-content),
     :quill-content (js->clj (.-ops (.getContents editor))),
     ;; extra pixel to prevent accidental word wrap
     :dimensions (mapv inc (tse.utils/measure-html html))}))

(defn content-editor
  [*editor]
  (let [*node (atom nil)
        ref-callback (fn [node]
                       (when (not= node @*node)
                         (reset! *editor (when node
                                           (Quill. node editor-options)))
                         (reset! *node node)))]
    (fn [_] [:div {:ref ref-callback}])))

(defn init-dialog
  [{:keys [sub emit]} *editor dialog *node]
  (let [visible? (sub [:label-editor/visible?])]
    (fn [node]
      (when (not= node @*node)
        (if node
          (do (reset! dialog (tse.dialog/make
                               {:visible? visible?,
                                :title (sub [:t :label-editor/title "Label"]),
                                :view [content-editor *editor],
                                :handlers
                                  {"ok" #(when-let [editor @*editor]
                                           (emit [:label-editor/save
                                                  (read-label editor)])),
                                   "cancel" #(emit [:label-editor/cancel])}}))
              ;; fill the editor whenever the dialog opens
              (add-watch visible?
                         *editor
                         (fn [_ _ _ visible?]
                           (when-let [editor (and visible? @*editor)]
                             (load-delta! editor @(sub [:label-editor/delta]))
                             (.focus ^Quill editor)))))
          (do (remove-watch visible? *editor)
              (.dispose @dialog)
              (reset! dialog nil)))
        (reset! *node node)))))

(defn view
  [ctx]
  (let [ref-callback (init-dialog ctx (atom nil) (atom nil) (atom nil))]
    (fn [_] [:div {:ref ref-callback}])))
