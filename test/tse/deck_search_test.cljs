(ns tse.deck-search-test
  (:require [cljs.test :refer [deftest testing is]]
            [tse.deck-search :as ds]))

;; deck-label

(deftest deck-label-english
  (is (= "Rider-Waite"
         (ds/deck-label {:name {:en "Rider-Waite", :ru "Райдер-Уэйт"}} :en))))

(deftest deck-label-russian
  (is (= "Райдер-Уэйт / Rider-Waite"
         (ds/deck-label {:name {:en "Rider-Waite", :ru "Райдер-Уэйт"}} :ru))))

(deftest deck-label-missing-lang-falls-through
  (is (= " / Rider-Waite" (ds/deck-label {:name {:en "Rider-Waite"}} :fr))))

;; deck->autocomplete-item

(deftest deck->autocomplete-item-en
  (let [result (ds/deck->autocomplete-item :en
                                           [:rw {:name {:en "Rider-Waite"}}])]
    (is (= :rw (:value result)))
    (is (= "Rider-Waite" (:label result)))))

(deftest deck->autocomplete-item-ru
  (let [result (ds/deck->autocomplete-item
                 :ru
                 [:rw {:name {:en "Rider-Waite", :ru "Райдер-Уэйт"}}])]
    (is (= :rw (:value result)))
    (is (= "Райдер-Уэйт / Rider-Waite" (:label result)))))
