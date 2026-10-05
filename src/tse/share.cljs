(ns tse.share
  "The shared part of the app state lives in the URL fragment as
  URI-encoded transit JSON. Every committed change of that state pushes a
  history entry, so browser Back/Forward work as undo/redo."
  (:require [cognitect.transit :as t]
            [tse.db :as db]
            [tse.sanitize :as sanitize]))

(def writer (t/writer :json))
(def reader (t/reader :json))

(defn shared-state
  "Selects what goes into a link. Selection is transient UI state, and
  uploaded images (data URLs) are local-only: they would make links huge."
  [state]
  (-> (select-keys state db/shared-keys)
      (update :items (fn [items] (mapv #(dissoc % :selected?) items)))
      (update :background
              (fn [bg]
                (if (some->> (get bg :src)
                             (re-find #"^https?://"))
                  bg
                  (dissoc bg :src))))))

(defn encode
  [state]
  (js/encodeURIComponent (t/write writer (shared-state state))))

(defn sanitize-items
  [items]
  (mapv (fn [item]
          (if (contains? item :content)
            (update item :content sanitize/sanitize-content)
            item))
    items))

(defn normalize-legacy
  "Links made by earlier versions store `:src nil` for colour-only
  backgrounds and the last context menu position in the background."
  [data]
  (if (map? (get data :background))
    (update data
            :background
            #(-> (select-keys % [:origin :src :color :dimensions])
                 (->> (remove (comp nil? val))
                      (into {}))))
    data))

(defn decode
  "Parses a location hash (with or without the leading #). Returns
  [:empty], [:ok shared-state] or [:invalid reason]."
  [hash]
  (let [s (if (= "#" (first hash)) (subs hash 1) hash)]
    (if (empty? s)
      [:empty]
      (try (let [data (t/read reader (js/decodeURIComponent s))]
             (if (map? data)
               (let [data (normalize-legacy (select-keys data db/shared-keys))]
                 (if (db/valid-shared-state? data)
                   [:ok
                    (cond-> data
                      (contains? data :items) (update :items sanitize-items))]
                   [:invalid "state does not match the schema"]))
               [:invalid "state is not a map"]))
           (catch :default e [:invalid e])))))

;; The fragment that corresponds to the current state, either because we wrote
;; it or because the state was loaded from it. Used to avoid pushing duplicate
;; history entries.
(defonce *current (atom nil))

(def debounce-ms 250)

(defn- push-fragment!
  [fragment]
  (let [loc js/window.location]
    (js/history.pushState nil
                          nil
                          (str (.-pathname loc) (.-search loc) "#" fragment))))

(defn sync-fragment!
  "Writes the current state to the URL if it differs from the fragment we
  already have."
  [state]
  (let [fragment (encode state)]
    (when (not= fragment @*current)
      (reset! *current fragment)
      (push-fragment! fragment))))

(defn start-sync!
  "Watches the db and writes the shared state to the URL, debounced, and never
  in the middle of a drag."
  [db]
  (let [timeout (volatile! nil)]
    (add-watch db
               ::sync
               (fn [_ _ _ state]
                 (when-let [t @timeout]
                   (js/clearTimeout t)
                   (vreset! timeout nil))
                 (when (and (get state :loaded?)
                            (not (get-in state [:transformer :dragging?])))
                   (vreset! timeout
                            (js/setTimeout #(sync-fragment! @db)
                                           debounce-ms)))))))
