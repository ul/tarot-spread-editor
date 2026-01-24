(ns tse.suitcase
  (:require [instaparse.core :as insta]
            [cuerdas.core :as str]))

(def cards-parser
  (insta/parser
    "cards = {prefix <':'>} elem {<delim> elem}
     <elem> = range|number
     range = number <dots> number
     number = #'[-0-9a-z]+'
     prefix = #'[a-z]+'
     dots = #'\\.+'
     delim = #'[ ,]+'"))

(defn parse-int [s] (Integer/parseInt s))

(defn make-range
  [x y]
  (let [width (count x)
        x (parse-int x)
        y (parse-int y)]
    (for [i (range x (inc y))]
      (str/pad (str i) {:length width, :padding "0"}))))

(defn parse-cards*
  [s]
  (and s
       (let [[_ [tag value :as head] & cards] (cards-parser s)
             prefix (when (= tag :prefix) value)
             cards (if prefix cards (conj cards head))]
         (map (partial str prefix)
           (reduce (fn [v [tag x y]]
                     (case tag
                       :range (into v (make-range (x 1) (y 1)))
                       :number (conj v x)))
             []
             cards)))))

(def parse-cards (memoize parse-cards*))
