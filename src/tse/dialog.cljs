(ns tse.dialog
  (:require carbon.vdom)
  (:import goog.ui.Dialog
           goog.ui.Component))

(defn make [{:keys [view title visible? handlers]}]
  (let [dialog (goog.ui.Dialog.)
        buttons (.. dialog getButtonElement -children)
        content (doto (goog.ui.Component.) (.createDom))
        element (.getElement content)]
    (dotimes [i (.-length buttons)]
      (.. (aget buttons i) -classList (add "pure-button")))
    (carbon.vdom/mount view element)
    (add-watch visible? dialog #(.setVisible dialog %4))
    (add-watch title dialog #(.setTitle dialog %4))
    (doto dialog
      (.addOnDisposeCallback (fn []
                               (remove-watch title dialog)
                               (remove-watch visible? dialog)))
      (.setTitle @title)
      (.setVisible @visible?)
      (.addChild content true)
      (.listen goog.ui.Dialog.EventType.SELECT
               (fn [e]
                 (when-let [f (get handlers (.-key e))]
                   (f dialog)))))))
