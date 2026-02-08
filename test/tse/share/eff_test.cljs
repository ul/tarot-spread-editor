(ns tse.share.eff-test
  (:require [cljs.test :refer [deftest testing is]]
            [cognitect.transit :as t]
            [carbon.rx :as rx :include-macros true]
            [tse.share.eff :as eff]
            [tse.share.sub :refer [*navigating?]]))

(deftest load-from-fragment-valid-hash
  (let [w (t/writer :json)
        data {:active-deck "Test", :items []}
        hash (js/encodeURIComponent (t/write w data))
        db (rx/cell {:loaded? false})
        ctx {:db db}]
    (set! js/window.location.hash (str "#" hash))
    (eff/load-from-fragment ctx)
    (is (= "Test" (:active-deck @db)))
    (is (true? (:loaded? @db)))))

(deftest load-from-fragment-empty-hash
  (let [db (rx/cell {:loaded? false, :items []})
        ctx {:db db}]
    (set! js/window.location.hash "")
    (eff/load-from-fragment ctx)
    (is (true? (:loaded? @db)))
    (is (= [] (:items @db)))))

(deftest load-from-fragment-malformed-hash
  (let [db (rx/cell {:loaded? false, :items [{:x 1}]})
        ctx {:db db}]
    (set! js/window.location.hash "#not-valid-transit-data!!!")
    (eff/load-from-fragment ctx)
    ;; should not crash, should still set loaded
    (is (true? (:loaded? @db)))
    ;; existing state should be preserved
    (is (= [{:x 1}] (:items @db)))))
