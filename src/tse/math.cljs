(ns tse.math)

(defn simple-box
  [[x1 y1] [x2 y2]]
  [(min x1 x2) (min y1 y2) (max x1 x2) (max y1 y2)])

(defn selector-box
  [scale [start-x start-y] [end-x end-y]]
  (let [w (/ (Math/abs (- start-x end-x)) scale)
        h (/ (Math/abs (- start-y end-y)) scale)
        x (if (< start-x end-x) start-x (- start-x w))
        y (if (< start-y end-y) start-y (- start-y h))]
    [x y (+ x w) (+ y h)]))

(defn item-box
  [{[x y] :origin, [w h] :dimensions, angle :angle}]
  (let [w2 (* 0.5 w)
        h2 (* 0.5 h)
        x0 (+ x w2)
        y0 (+ y h2)
        x1 (- w2)
        y1 (- h2)
        x2 x1
        y2 h2
        x3 w2
        y3 y1
        x4 x3
        y4 y2
        cos (Math/cos angle)
        sin (Math/sin angle)
        x1' (+ x0 (* x1 cos) (* y1 sin -1))
        y1' (+ y0 (* x1 sin) (* y1 cos))
        x2' (+ x0 (* x2 cos) (* y2 sin -1))
        y2' (+ y0 (* x2 sin) (* y2 cos))
        x3' (+ x0 (* x3 cos) (* y3 sin -1))
        y3' (+ y0 (* x3 sin) (* y3 cos))
        x4' (+ x0 (* x4 cos) (* y4 sin -1))
        y4' (+ y0 (* x4 sin) (* y4 cos))
        left (min x1' x2' x3' x4')
        top (min y1' y2' y3' y4')
        right (max x1' x2' x3' x4')
        bottom (max y1' y2' y3' y4')]
    [left top right bottom]))

(defn snap
  [x step]
  (-> x
      (/ step)
      (Math/round)
      (* step)))

(defn nearby?
  [x x* threshold]
  (-> x
      (- x*)
      Math/abs
      (<= threshold)))

(defn snap-nearby
  [x step threshold]
  (let [x* (snap x step)] (if (nearby? x x* threshold) x* x)))

(def rotation-snap "15°" (/ Math/PI 12))
(def rotation-snap-threshold (/ Math/PI 120))
(defn snap-angle [x] (snap-nearby x rotation-snap rotation-snap-threshold))

(def resize-snap 10)
(def resize-snap-threshold 1)
(defn snap-resize
  [[x y]]
  (let [y' (snap-nearby y resize-snap resize-snap-threshold)]
    [(/ (* y' x) y) y']))

(defn center [x w] (+ x (* 0.5 w)))

(defn get-rotator-origin [x y w h] [(- (center x w) 5) (- y 30)])

(defn merge-boxes
  [[left1 top1 right1 bottom1] [left2 top2 right2 bottom2]]
  [(min left1 left2) (min top1 top2) (max right1 right2) (max bottom1 bottom2)])

;; not a partial mapv for perf
(defn v+ [[x1 y1] [x2 y2]] [(+ x1 x2) (+ y1 y2)])
(defn v- [[x1 y1] [x2 y2]] [(- x1 x2) (- y1 y2)])
(defn v* [[x y] a] [(* a x) (* a y)])
(defn v% [[x y] a] [(/ x a) (/ y a)])
(defn v0 [[x y]] [(max 0 x) (max 0 y)])

(defn overlap?
  [[x1 y1 x2 y2] [x1' y1' x2' y2']]
  (and (<= x1 x2') (<= x1' x2) (<= y1 y2') (<= y1' y2)))
