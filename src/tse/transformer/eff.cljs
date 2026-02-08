(ns tse.transformer.eff
  (:require [tse.math :as math]
            [tse.utils :refer [update-selected]]))

(defn move
  [{:keys [db sub], [[dx dy]] :args}]
  (let [scale @(sub [:canvas/scale])
        {:keys [snap? step]} @(sub [:config/grid])
        sdx (/ dx scale)
        sdy (/ dy scale)]
    (if snap?
      (let [{:keys [drag-origins drag-delta]} (:transformer @db)
            [tdx tdy] (math/v+ (or drag-delta [0 0]) [sdx sdy])]
        (swap! db assoc-in [:transformer :drag-delta] [tdx tdy])
        (swap! db update
          :items
          (fn [items]
            (mapv (fn [item origin]
                    (if (:selected? item)
                      (let [[ox oy] origin]
                        (assoc item
                          :origin [(max 0 (math/snap (+ ox tdx) step))
                                   (max 0 (math/snap (+ oy tdy) step))]))
                      item))
              items
              drag-origins))))
      (swap! db update
        :items
        update-selected
        update
        :origin
        (fn [[x y]] [(max 0 (+ x sdx)) (max 0 (+ y sdy))])))))

(defn resize
  [{:keys [db sub], [^js/DomRect rect ^js/DomRect deltaRect] :args}]
  (let [dv [(.-left deltaRect) (.-top deltaRect)]
        w (.-width rect)
        dw (.-width deltaRect)
        dd (/ w (- w dw))]
    (swap! db update
      :items
      update-selected
      update
      :dimensions
      #(math/v* % dd))))

(defn rotate
  [{:keys [sub db], [dv] :args}]
  (let [{[x y] :origin, [w h] :dimensions} @(sub [:transformer/entity])
        {:keys [angle origin]} (get-in @db [:transformer :rotator])
        c [(math/center x w) (math/center y h)]
        origin (or origin (math/get-rotator-origin x y w h))
        angle (or angle (apply Math/atan2 (math/v- origin c)))
        origin' (math/v+ origin (math/v% dv @(sub [:canvas/scale])))
        angle' (apply Math/atan2 (math/v- origin' c))
        da (- angle angle')]
    (swap! db update-in
      [:transformer :rotator]
      merge
      {:origin origin', :angle angle'})
    (swap! db update
      :items
      update-selected
      update
      :angle
      #(math/snap-angle (+ % da)))))

(defn end-rotation
  [{:keys [db]}]
  (swap! db update :transformer dissoc :rotator))

(defn start-selection
  [{:keys [db emit], [start client] :args}]
  (letfn [(onmove [e]
            (emit [:transformer/move-selection [(.-clientX e) (.-clientY e)]]))
          (onend [e]
            (.removeEventListener js/window "mousemove" onmove)
            (.removeEventListener js/window "mouseup" onend)
            (emit [:transformer/end-selection [(.-clientX e) (.-clientY e)]]))]
    (.addEventListener js/window "mousemove" onmove)
    (.addEventListener js/window "mouseup" onend)
    (swap! db assoc-in
      [:transformer :selector]
      {:start start, :offset (math/v- start client)})))

(defn move-selection
  [{:keys [db], [v] :args}]
  (swap! db assoc-in [:transformer :selector :end] v))

(defn end-selection
  [{:keys [db sub], [end] :args}]
  (let [items @(sub [:item/all])
        {:keys [start offset]} (get-in @db [:transformer :selector])
        end (math/v+ end offset)
        scale @(sub [:canvas/scale])
        selector-box (math/selector-box scale start end)]
    (swap! db update :transformer dissoc :selector)
    (swap! db update
      :items
      (fn [items]
        (mapv (fn [item]
                (assoc item
                  :selected? (math/overlap? (math/item-box item) selector-box)))
          items)))))

(defn shift-mode
  [{:keys [db], [shift-mode?] :args}]
  (swap! db assoc-in [:transformer :shift-mode?] shift-mode?))

(defn start-drag
  [{:keys [db]}]
  (swap! db update
    :transformer
    merge
    {:dragging? true,
     :drag-origins (mapv :origin (:items @db)),
     :drag-delta [0 0]}))

(defn end-drag
  [{:keys [db]}]
  (swap! db update
    :transformer
    merge
    {:dragging? false, :drag-origins nil, :drag-delta nil}))

(def spec
  {:transformer/move move,
   :transformer/resize resize,
   :transformer/rotate rotate,
   :transformer/end-rotation end-rotation,
   :transformer/start-selection start-selection,
   :transformer/move-selection move-selection,
   :transformer/end-selection end-selection,
   :transformer/shift-mode shift-mode,
   :transformer/start-drag start-drag,
   :transformer/end-drag end-drag})
