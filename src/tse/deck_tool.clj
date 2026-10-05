(ns tse.deck-tool
  "Prints a resources/decks.edn entry for a directory of card images:

    npx shadow-cljs clj-run tse.deck-tool/describe <dir> <en name> [ru name] [suitcase]

  The directory name becomes :src, i.e. the images are expected at
  <deck-base-url>/<src>/<card>.<format> once uploaded."
  (:require [clojure.java.io :as io]
            [clojure.pprint :as pprint]
            [clojure.string :as str])
  (:import javax.imageio.ImageIO))

(def formats #{"jpg" "jpeg" "png" "webp"})

(defn extension
  [^java.io.File f]
  (str/lower-case (last (str/split (.getName f) #"\."))))

(defn describe-deck
  [dir en ru suitcase]
  (let [root (io/file dir)
        ;; card faces only: the back may have different proportions
        images (->> (.listFiles root)
                    (filter #(contains? formats (extension %)))
                    (remove #(str/starts-with? (.getName ^java.io.File %)
                                               "back."))
                    (sort-by #(.getName ^java.io.File %)))
        _ (when (empty? images) (throw (ex-info "No images found" {:dir dir})))
        image (first images)
        format (extension image)
        buffered (ImageIO/read ^java.io.File image)]
    {:name {:en en, :ru (or ru en)},
     :src (.getName root),
     :suitcase suitcase,
     :format format,
     :back (.exists (io/file root (str "back." format))),
     :width (.getWidth buffered),
     :height (.getHeight buffered)}))

(defn describe
  [dir en & [ru suitcase]]
  (pprint/pprint (describe-deck dir en ru (or suitcase "tarot"))))
