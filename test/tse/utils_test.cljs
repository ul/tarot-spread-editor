(ns tse.utils-test
  (:require [cljs.test :refer [deftest testing is]]
            [tse.utils :as utils]))

(deftest update-selected-applies-f-to-selected
  (let [items [{:selected? true, :x 1} {:selected? false, :x 2}
               {:selected? true, :x 3}]
        result (utils/update-selected items assoc :x 0)]
    (is (= 0 (:x (nth result 0))))
    (is (= 2 (:x (nth result 1))))
    (is (= 0 (:x (nth result 2))))))

(deftest update-selected-no-selection
  (let [items [{:selected? false, :x 1} {:selected? false, :x 2}]
        result (utils/update-selected items assoc :x 0)]
    (is (= 1 (:x (nth result 0))))
    (is (= 2 (:x (nth result 1))))))

(deftest update-selected-all-selected
  (let [items [{:selected? true, :x 1} {:selected? true, :x 2}]
        result (utils/update-selected items assoc :x 99)]
    (is (every? #(= 99 (:x %)) result))))

(deftest update-selected-with-extra-args
  (let [items [{:selected? true, :x 1}]
        result (utils/update-selected items update :x + 10)]
    (is (= 11 (:x (first result))))))

(deftest measure-html-with-ruler
  (let [ruler (.createElement js/document "div")]
    (set! (.-id ruler) "ruler")
    (.appendChild js/document.body ruler)
    (let [result (utils/measure-html "<span>test</span>")]
      (is (vector? result))
      (is (= 2 (count result))))
    (.removeChild js/document.body ruler)))

(deftest measure-html-without-ruler
  (is (nil? (utils/measure-html "<span>test</span>"))))
