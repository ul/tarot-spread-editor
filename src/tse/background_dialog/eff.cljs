(ns tse.background-dialog.eff
  (:require [clojure.string :as str]))

(defn open
  "Opens the dialog with the current background. :session changes on every
  open so that the view remounts its inputs with fresh values."
  [{:keys [db]}]
  (swap! db (fn [{:keys [background], :as state}]
              (update
                state
                :background-dialog
                (fn [dialog]
                  (assoc dialog
                    :visible? true
                    :src (get background :src)
                    :color (get background :color (get dialog :color "#ffffff"))
                    :session (inc (get dialog :session 0))))))))

(defn select-tab
  [{:keys [db], [tab] :args}]
  (swap! db update :background-dialog assoc :tab tab))

(defn save
  "Applies the dialog to the background. A new image starts at the top-left
  corner with its natural size."
  [{:keys [db]}]
  (swap! db (fn [state]
              (let [{:keys [src color]} (get state :background-dialog)
                    changed? (not= src (get-in state [:background :src]))]
                (-> state
                    (update :background
                            (fn [bg]
                              (cond-> (assoc bg :color color)
                                changed? (-> (dissoc :dimensions)
                                             (assoc :origin [0 0]))
                                (and changed? src) (assoc :src src)
                                (nil? src) (dissoc :src))))
                    (assoc-in [:background-dialog :visible?] false))))))

(defn cancel
  [{:keys [db]}]
  (swap! db update :background-dialog assoc :visible? false))

(defn choose-file
  [{:keys [emit], [files] :args}]
  (when (pos? (.-length files))
    (let [file (aget files 0)
          reader (js/FileReader.)]
      (set! (.-onload reader)
            (fn [e]
              (emit [:background-dialog/file-loaded (.. e -target -result)])))
      (.readAsDataURL reader file))))

(defn set-url
  [{:keys [db], [url] :args}]
  (swap! db update
    :background-dialog assoc
    :src (when-not (str/blank? url) (str/trim url))))

(defn remove-image
  "Clears the image and remounts the inputs so they don't show it anymore."
  [{:keys [db]}]
  (swap! db update
    :background-dialog
    #(-> %
         (assoc :src nil)
         (update :session (fnil inc 0)))))

(defn set-color
  [{:keys [db], [color] :args}]
  (swap! db update :background-dialog assoc :color color))

(def spec
  {:background-dialog/open open,
   :background-dialog/select-tab select-tab,
   :background-dialog/save save,
   :background-dialog/cancel cancel,
   :background-dialog/choose-file choose-file,
   :background-dialog/file-loaded set-url,
   :background-dialog/set-url set-url,
   :background-dialog/remove-image remove-image,
   :background-dialog/set-color set-color})
