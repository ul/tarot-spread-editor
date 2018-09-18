; boot -d cheshire repl -p 7888

(require '[cheshire.core :as json])

(def decks (-> "decks.json" slurp json/decode))

(defn check-back [src fmt]
  (.exists (clojure.java.io/file "public" "decks" src (str "back." fmt))))

(defn get-dims [src fmt]
  (let [root  (clojure.java.io/file "public" "decks" src)
        image (first (.listFiles
                       root
                       (reify java.io.FilenameFilter
                         (accept [_ _ filename]
                           (boolean (re-find (re-pattern (str "\\." fmt "$")) filename))))))]
    (-> (clojure.java.shell/sh "identify" "-format" "%w %h" (.getAbsolutePath image))
        (get :out)
        (clojure.string/split #"\s")
        (->> (map #(Integer/parseInt %))))))

(def edn-decks
  (vec
    (keep (fn [m]
            (try
              (let [[en ru] (clojure.string/split (get m "label") #"\s*/\s*")
                    src (get m "value")
                    fmt (get m "ext" "jpg")
                    [width height] (get-dims src fmt)]
                {:name    {:en en
                           :ru (or ru en)}
                 :src      src
                 :suitcase (get m "suitcase" "tarot")
                 :format   fmt
                 :back     (check-back src fmt)
                 :dimensions [width height]})
              (catch Exception e
                (println (get m "value"))
                nil)))
          decks)))

(with-open [w (clojure.java.io/writer "decks.edn")]
  (binding [*print-length* false
            *print-level* nil
            *out* w]
    (clojure.pprint/pprint edn-decks w)))
