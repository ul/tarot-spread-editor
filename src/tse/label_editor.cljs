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
                                   #js [#js {:size #js []}]
                                   #js ["bold" "italic" "underline" "strike"]
                                   #js [#js {:color #js []} #js {:background #js []}]
                                   #js ["clean"]]}})

(defn init-editor [{:keys [sub emit]}]
  (fn [node]
    (when node
      (emit [:label-editor/set-editor (js/Quill. node editor-options)]))))

(defn content-editor [ctx]
  [:div
   {:ref (init-editor ctx)}])

(defn init-dialog [{:keys [sub emit] :as ctx} dialog]
  (fn [node]
    (if node
      (reset! dialog
              (tse.dialog/make {:visible? (sub [:label-editor/visible?])
                                :title (sub [:t :label-editor/title "Label"])
                                :view [content-editor ctx]
                                :handlers {"ok" #(emit [:label-editor/save])
                                           "cancel" #(emit [:label-editor/cancel])}}))
      (do
        (.dispose @dialog)
        (reset! dialog nil)))))

(defn view [ctx]
  [:div
   {:ref (init-dialog ctx (atom nil))}])
