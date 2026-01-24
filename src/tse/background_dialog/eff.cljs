(ns tse.background-dialog.eff)

(defn open
  [{:keys [db]}]
  (swap! db update :background-dialog assoc :visible? true))

(defn select-tab
  [{:keys [db], [tab] :args}]
  (swap! db update :background-dialog assoc :tab tab))

(defn save
  [{:keys [db]}]
  (let [{:keys [src color]} (get @db :background-dialog)]
    (swap! db update :background assoc :src src :color color))
  (swap! db update :background-dialog assoc :visible? false :src nil))

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
  (swap! db update :background-dialog assoc :src url))

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
   :background-dialog/set-color set-color})
