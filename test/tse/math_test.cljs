(ns tse.math-test
  (:require [cljs.test :refer [deftest testing is are]]
            [tse.math :as math]))

;; simple-box

(deftest simple-box-orders-coords
  (is (= [1 2 3 4] (math/simple-box [1 2] [3 4]))))

(deftest simple-box-swaps-when-reversed
  (is (= [1 2 3 4] (math/simple-box [3 4] [1 2]))))

(deftest simple-box-mixed-order
  (is (= [1 2 3 4] (math/simple-box [3 2] [1 4]))))

;; selector-box

(deftest selector-box-scale-1
  (is (= [10 20 30 40] (math/selector-box 1 [10 20] [30 40]))))

(deftest selector-box-reversed-direction
  (let [[x1 y1 x2 y2] (math/selector-box 1 [30 40] [10 20])]
    (is (< x1 x2))
    (is (< y1 y2))))

(deftest selector-box-with-scale
  (let [[x1 y1 x2 y2] (math/selector-box 2 [10 10] [30 30])]
    (is (= 10.0 (- x2 x1)))
    (is (= 10.0 (- y2 y1)))))

;; item-box

(deftest item-box-no-rotation
  (let [item {:origin [10 20], :dimensions [100 50], :angle 0}
        [l t r b] (math/item-box item)]
    (is (< (Math/abs (- l 10)) 0.001))
    (is (< (Math/abs (- t 20)) 0.001))
    (is (< (Math/abs (- r 110)) 0.001))
    (is (< (Math/abs (- b 70)) 0.001))))

(deftest item-box-90deg-rotation
  (let [item {:origin [0 0], :dimensions [100 50], :angle (/ Math/PI 2)}
        [l t r b] (math/item-box item)
        w (- r l)
        h (- b t)]
    ;; 90 deg rotation swaps width/height of bounding box
    (is (< (Math/abs (- w 50)) 0.01))
    (is (< (Math/abs (- h 100)) 0.01))))

(deftest item-box-pi-rotation-same-bounds
  (let [item {:origin [10 20], :dimensions [100 50], :angle Math/PI}
        [l t r b] (math/item-box item)]
    ;; pi rotation: bounding box should be approximately the same
    (is (< (Math/abs (- (- r l) 100)) 0.01))
    (is (< (Math/abs (- (- b t) 50)) 0.01))))

;; snap

(deftest snap-rounds-to-nearest-step
  (is (= 10 (math/snap 12 10)))
  (is (= 20 (math/snap 18 10)))
  (is (= 0 (math/snap 4 10))))

(deftest snap-exact-value (is (= 30 (math/snap 30 10))))

;; nearby?

(deftest nearby-within-threshold (is (true? (math/nearby? 10 12 3))))

(deftest nearby-at-threshold (is (true? (math/nearby? 10 13 3))))

(deftest nearby-outside-threshold (is (false? (math/nearby? 10 14 3))))

;; snap-nearby

(deftest snap-nearby-snaps-when-close (is (= 10 (math/snap-nearby 11 10 2))))

(deftest snap-nearby-no-snap-when-far (is (= 14 (math/snap-nearby 14 10 2))))

;; snap-angle

(deftest snap-angle-zero (is (zero? (math/snap-angle 0))))

(deftest snap-angle-near-15deg
  (let [fifteen-deg (/ Math/PI 12)]
    (is (< (Math/abs (- (math/snap-angle (+ fifteen-deg 0.01)) fifteen-deg))
           0.001))))

(deftest snap-angle-far-from-grid
  (let [x 0.5]
    ;; 0.5 rad is ~28.6 deg, between 15 and 30, far enough from both
    ;; should not snap if outside threshold
    (let [result (math/snap-angle x)
          snapped (math/snap x math/rotation-snap)]
      (if (math/nearby? x snapped math/rotation-snap-threshold)
        (is (= snapped result))
        (is (= x result))))))

;; snap-resize

(deftest snap-resize-proportional
  (let [[x' y'] (math/snap-resize [100 50])]
    (is (= 50.0 y'))
    (is (= 100.0 x'))))

(deftest snap-resize-snaps-y
  (let [[x' y'] (math/snap-resize [100 51])]
    (is (= 50.0 y'))
    ;; x should be scaled proportionally
    (is (< (Math/abs (- x' (/ (* 50 100) 51))) 0.01))))

;; center

(deftest center-computes-midpoint (is (= 60.0 (math/center 10 100))))

;; get-rotator-origin

(deftest get-rotator-origin-position
  (is (= [38.0 -32] (math/get-rotator-origin 10 20 100 50))))

;; merge-boxes

(deftest merge-boxes-union
  (is (= [1 2 30 40] (math/merge-boxes [1 5 20 40] [5 2 30 35]))))

(deftest merge-boxes-contained
  (is (= [0 0 100 100] (math/merge-boxes [0 0 100 100] [10 10 50 50]))))

;; v+, v-, v*, v%, v0

(deftest v-plus (is (= [4 6] (math/v+ [1 2] [3 4]))))

(deftest v-minus (is (= [-2 -2] (math/v- [1 2] [3 4]))))

(deftest v-multiply (is (= [6 9] (math/v* [2 3] 3))))

(deftest v-divide (is (= [5.0 3.0] (math/v% [10 6] 2))))

(deftest v0-clamps-negatives (is (= [0 0] (math/v0 [-5 -3]))))

(deftest v0-keeps-positives (is (= [5 3] (math/v0 [5 3]))))

;; overlap?

(deftest overlap-true-overlapping-boxes
  (is (true? (math/overlap? [0 0 10 10] [5 5 15 15]))))

(deftest overlap-false-separated-boxes
  (is (false? (math/overlap? [0 0 10 10] [20 20 30 30]))))

(deftest overlap-edge-touching
  (is (true? (math/overlap? [0 0 10 10] [10 10 20 20]))))

(deftest overlap-contained (is (true? (math/overlap? [0 0 20 20] [5 5 15 15]))))
