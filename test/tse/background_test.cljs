(ns tse.background-test
  (:require [cljs.test :refer [deftest testing is]]
            [tse.background :as bg]))

(deftest grid-css-generates-pattern
  (let [css (bg/grid-css {:step 20})]
    (is (string? css))
    (is (re-find #"20px" css))
    (is (re-find #"repeating-linear-gradient" css))))

(deftest grid-css-different-step
  (let [css (bg/grid-css {:step 50})] (is (re-find #"50px" css))))
