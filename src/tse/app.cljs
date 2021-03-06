(ns tse.app
  (:require tse.canvas
            tse.header
            tse.board
            tse.toolbar
            tse.label-editor
            tse.background-dialog
            tse.share))

(def style
  {:flex 1
   :display "flex"
   :flex-direction "column"})

(defn view [ctx]
  [:div
   {:style style}
   [tse.header/view ctx]
   [tse.board/view ctx]
   [tse.toolbar/view ctx]
   [tse.label-editor/view ctx]
   [tse.background-dialog/view ctx]
   [tse.canvas/view ctx]
   [tse.share/view ctx]])
