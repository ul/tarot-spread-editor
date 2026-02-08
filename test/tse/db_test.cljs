(ns tse.db-test
  (:require [cljs.test :refer [deftest testing is]]
            [cljs.spec.alpha :as s]
            [tse.db :as db]))

(deftest valid-shared-state-accepts-valid-data
  (is (db/valid-shared-state?
        {:items [{:origin [10 20], :dimensions [100 50], :angle 0}],
         :canvas {:scale 1.0},
         :grid {:step 50},
         :lang :en,
         :active-deck "RiderWaiteTarot",
         :active-suit 0,
         :background {:origin [0 0]}})))

(deftest valid-shared-state-accepts-empty-map (is (db/valid-shared-state? {})))

(deftest valid-shared-state-accepts-partial-data
  (is (db/valid-shared-state? {:lang :ru, :canvas {:scale 0.5}})))

(deftest valid-shared-state-rejects-bad-items
  (is (not (db/valid-shared-state? {:items "not-a-vector"}))))

(deftest valid-shared-state-rejects-bad-canvas
  (is (not (db/valid-shared-state? {:canvas {:scale "big"}}))))

(deftest valid-shared-state-rejects-bad-item-shape
  (is (not (db/valid-shared-state?
             {:items [{:origin "wrong", :dimensions [100 50], :angle 0}]}))))
