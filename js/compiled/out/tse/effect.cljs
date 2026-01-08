(ns tse.effect
  (:require [carbon.rx :as rx :include-macros true]))

;; REVIEW generally you want rAF for UI animations/actions
;; and rIC for hydration and heavy data updates
;; perhaps implementing effects priority/notations?
(def schedule js/window.requestAnimationFrame)

(defn register* [key->fn key f]
  (vswap! key->fn assoc key f))

(defn perform* [db emit emit-sync sub key->fn queue]
  (let [q @queue]
    (vreset! queue [])
    (rx/dosync
     (doseq [[key & args] q]
       (if-let [f (get @key->fn key)]
         (rx/no-rx
          (f {:emit emit :emit-sync emit-sync :sub sub :db db :args args}))
         (js/console.warn "no effect" key))))))

(defn emit* [perform queue v]
  (when (empty? @queue)
    (schedule perform))
  (vswap! queue conj v))

(defn emit-sync* [db emit emit-sync sub key->fn [key & args]]
  (if-let [f (get @key->fn key)]
    (rx/no-rx
     (f {:emit emit :emit-sync emit-sync :sub sub :db db :args args}))
    (js/console.warn "no effect" key)))

(defn make [db sub]
  (let [key->fn (volatile! {})
        queue (volatile! [])]
    (letfn [(register [key f] (register* key->fn key f))
            (emit [v] (emit* perform queue v))
            (perform [] (perform* db emit emit-sync sub key->fn queue))
            (emit-sync [v] (emit-sync* db emit emit-sync sub key->fn v))]
      {:register-effect register
       :emit emit
       :emit-sync emit-sync})))
