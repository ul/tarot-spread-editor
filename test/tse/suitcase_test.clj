(ns tse.suitcase-test
  (:require [clojure.test :refer [deftest testing is are]]
            [tse.suitcase :as suitcase]))

;; make-range

(deftest make-range-simple (is (= ["1" "2" "3"] (suitcase/make-range "1" "3"))))

(deftest make-range-zero-padded
  (is (= ["01" "02" "03"] (suitcase/make-range "01" "03"))))

(deftest make-range-single (is (= ["5"] (suitcase/make-range "5" "5"))))

;; parse-cards*

(deftest parse-cards-single-number (is (= ["01"] (suitcase/parse-cards* "01"))))

(deftest parse-cards-range
  (is (= ["01" "02" "03"] (suitcase/parse-cards* "01..03"))))

(deftest parse-cards-prefix
  (is (= ["m01" "m02"] (suitcase/parse-cards* "m:01..02"))))

(deftest parse-cards-comma-separated
  (is (= ["01" "03" "05"] (suitcase/parse-cards* "01,03,05"))))

(deftest parse-cards-nil-input (is (nil? (suitcase/parse-cards* nil))))
