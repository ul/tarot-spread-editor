(ns  ^:figwheel-always tse.core-test
  (:require [tse.core :as core]
            [cljs.test :as t :include-macros true :refer-macros [deftest testing is]]))

(deftest sanity-check
  (testing "nothing"
    (is (= 1 1))))

(enable-console-print!)
(t/run-tests)
