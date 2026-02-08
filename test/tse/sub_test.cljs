(ns tse.sub-test
  (:require [cljs.test :refer [deftest testing is]]
            [carbon.rx :as rx :include-macros true]
            [tse.sub :as sub]))

(deftest subscribe-returns-value-for-registered-sub
  (let [db (rx/cell {:x 42})
        {:keys [register-subscription subscribe]} (sub/make db)]
    (register-subscription :test/x (fn [{:keys [db]}] (rx/rx (:x @db))))
    (is (= 42 @(subscribe [:test/x])))))

(deftest subscribe-throws-on-missing-sub
  (let [db (rx/cell {})
        {:keys [subscribe]} (sub/make db)]
    (is (thrown? js/Error (subscribe [:nonexistent/sub])))))

(deftest register-cursor-provides-cursor
  (let [db (rx/cell {:nested {:val 7}})
        {:keys [register-cursor subscribe]} (sub/make db)]
    (register-cursor :test/val [:nested :val])
    (is (= 7 @(subscribe [:test/val])))))
