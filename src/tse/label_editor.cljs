(ns tse.label-editor
  (:require carbon.vdom
            cljsjs.quill
            tse.dialog))

(let [Parchment (.import js/Quill "parchment")
      ColorAttributor (-> (.import js/Quill "attributors/style/color")
                          .-constructor)

      BackgroundStyle (ColorAttributor. "background" "background-color" #js {:scope (.. Parchment -Scope -BLOCK)})]
  (.register js/Quill "formats/background" BackgroundStyle))

(def editor-options
  #js {:theme "snow"
       :formats #js ["font" "size" "bold" "italic" "underline" "strike" "color" "background"]
       :modules #js {:toolbar #js [#js [#js {:font #js []}]
                                   #js [#js {:size #js ["40px" "50px" "70px" "90px" "100px"]}]
                                   #js ["bold" "italic" "underline" "strike"]
                                   #js [#js {:color #js []} #js {:background #js []}]
                                   #js ["clean"]]}})

(defn init-editor [{:keys [sub emit]} *node]
  (fn [node]
    (when (not= node @*node)
      (if node
        (emit [:label-editor/set-editor (js/Quill. node editor-options)])
        (emit [:label-editor/dispose-editor]))
      (reset! *node node))))

(defn content-editor [ctx]
  (let [node (atom nil)]
    (fn [ctx]
      [:div
       {:ref (init-editor ctx node)}])))

(defn init-dialog [{:keys [sub emit] :as ctx} dialog *node]
  (fn [node]
    (when (not= node @*node)
      (if node
        (reset! dialog
                (tse.dialog/make {:visible? (sub [:label-editor/visible?])
                                  :title (sub [:t :label-editor/title "Label"])
                                  :view [content-editor ctx]
                                  :handlers {"ok" #(emit [:label-editor/save])
                                             "cancel" #(emit [:label-editor/cancel])}}))
        (do
          (.dispose @dialog)
          (reset! dialog nil)))
      (reset! *node node))))

(defn view [ctx]
  (let [dialog (atom nil)
        node   (atom nil)]
    (fn [ctx]
      [:div
       {:ref (init-dialog ctx dialog node)}])))
