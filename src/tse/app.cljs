(ns tse.app
  (:require tse.canvas
            tse.header
            tse.board
            tse.toolbar
            tse.label-editor
            tse.background-dialog))

(def style
  {:flex 1
   :display "flex"
   :flex-direction "column"})

(defn share [{:keys [sub]}]
  @(sub [:share/update-fragment])
  nil)

(defn view [ctx]
  [:div
   {:style style}
   [share ctx] 
   [tse.header/view ctx]
   [tse.board/view ctx]
   [tse.toolbar/view ctx]
   [tse.label-editor/view ctx]
   [tse.background-dialog/view ctx]
   [tse.canvas/view ctx]])
