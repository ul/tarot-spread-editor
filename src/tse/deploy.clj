(ns tse.deploy
  (:require [clojure.edn :as edn]
            [tse.suitcase :as suitcase]
            [cognitect.transit :as t]
            [taoensso.encore :as e]
            [clojure.java.io :as io]
            [clojure.set :as set]))

(defn prepare-edn
  []
  (let [decks (edn/read-string (slurp "resources/decks.edn"))
        suitcases (edn/read-string (slurp "resources/suitcases.edn"))
        numbered-suitcases
          (set (keep #(let [n (get % :suitcase)] (when (number? n) n)) decks))
        suitcases (reduce (fn [m n]
                            (assoc m
                              n (let [cards (cond (> n 200) (str "00..."
                                                                 (-> n
                                                                     (quot 10)
                                                                     (dec)))
                                                  (>= n 100) (str "001..." n)
                                                  :else (str "01..." n))]
                                  [{:name {:en cards, :ru cards},
                                    :cards cards}])))
                    suitcases
                    numbered-suitcases)]
    (println "total suitcases:" (count (set (map :suitcase decks))))
    (when-let [missing (seq (set/difference (set (map :suitcase decks))
                                            (set (keys suitcases))))]
      (println "missing suitcases:" missing))
    (with-open [dw (io/output-stream "resources/public/decks.min.json")
                sw (io/output-stream "resources/public/suitcases.min.json")]
      (t/write (t/writer dw :json)
               (reduce #(assoc %1 (get %2 :src) %2) {} decks))
      (t/write (t/writer sw :json)
               (e/map-vals
                 (fn [suitcase]
                   {:suits
                      (mapv #(update % :cards (comp vec suitcase/parse-cards))
                        suitcase)})
                 suitcases)))))
