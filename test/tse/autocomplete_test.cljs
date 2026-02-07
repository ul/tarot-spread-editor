(ns tse.autocomplete-test
  (:require [cljs.test :refer [deftest testing is are]]
            [tse.autocomplete :as ac]))

;; match

(deftest match-case-insensitive (is (true? (ac/match "foo" {:label "FooBar"}))))

(deftest match-substring (is (true? (ac/match "bar" {:label "FooBar"}))))

(deftest match-no-match (is (false? (ac/match "xyz" {:label "FooBar"}))))

(deftest match-empty-query (is (true? (ac/match "" {:label "anything"}))))

;; good-query

(deftest good-query-single-char (is (true? (ac/good-query "a"))))

(deftest good-query-empty (is (false? (ac/good-query ""))))

(deftest good-query-long (is (true? (ac/good-query "abc"))))

;; clamp

(deftest clamp-increments-and-wraps
  (is (= 1 (ac/clamp 0 inc 3)))
  (is (= 0 (ac/clamp 2 inc 3))))

(deftest clamp-decrements-and-wraps
  (is (= 2 (ac/clamp 0 dec 3)))
  (is (= 0 (ac/clamp 1 dec 3))))

(deftest clamp-zero-count (is (= 0 (ac/clamp 5 inc 0))))

;; return?

(deftest return-true-on-return-key (is (true? (ac/return? nil [nil 13]))))

(deftest return-false-on-other-key (is (false? (ac/return? nil [nil 38]))))
