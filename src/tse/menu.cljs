(ns tse.menu
  (:import goog.ui.MenuItem
           goog.ui.PopupMenu
           goog.ui.Component.EventType))

(defn make-item [{:keys [content action]}]
  (let [mi (MenuItem. @content)]
    (add-watch content mi #(.setContent mi %4))
    (doto mi
      (.addOnDisposeCallback #(remove-watch content mi))
      (.listen goog.ui.Component.EventType.ACTION #(action mi)))))

(defn make-check-item [{:keys [checked?] :as props}]
  (let [mi (make-item props)]
    (add-watch checked? mi #(.setChecked mi %4))
    (doto mi
      (.addOnDisposeCallback #(remove-watch checked? mi))
      (.setCheckable true)
      (.setChecked @checked?))))

(defn make-popup [items node actions]
  (let [pm (goog.ui.PopupMenu.)]
    (doseq [item items]
      (.addItem pm item))
    (when-let [on-show (get actions :on-show)]
      (.listen pm goog.ui.Component.EventType.SHOW #(on-show pm)))
    (doto pm
      (.render)
      (.attach node js/undefined js/undefined true))))
