(ns tse.effect
  (:require [carbon.rx :as rx :include-macros true]))

(def schedule js/window.requestAnimationFrame)

(defn register* [key->fn key f] (vswap! key->fn assoc key f))

(defn run!*
  [db emit emit-sync sub key->fn [key & args]]
  (if-let [f (get @key->fn key)]
    (rx/no-rx
      (f {:emit emit, :emit-sync emit-sync, :sub sub, :db db, :args args}))
    (throw (js/Error. (str "No effect registered for " key)))))

(defn perform*
  "Runs all queued effects in one transaction. A failing effect is logged and
  does not prevent the rest of the batch from running."
  [db emit emit-sync sub key->fn queue]
  (let [q @queue]
    (vreset! queue [])
    (rx/dosync (doseq [v q]
                 (try (run!* db emit emit-sync sub key->fn v)
                      (catch :default e
                        (js/console.error "Effect failed" (pr-str v) e)))))))

(defn emit*
  [perform queue v]
  (when (empty? @queue) (schedule perform))
  (vswap! queue conj v))

(defn make
  [db sub]
  (let [key->fn (volatile! {})
        queue (volatile! [])]
    (letfn [(register [key f] (register* key->fn key f))
            (emit [v] (emit* perform queue v))
            (perform [] (perform* db emit emit-sync sub key->fn queue))
            (emit-sync [v] (run!* db emit emit-sync sub key->fn v))]
      {:register-effect register, :emit emit, :emit-sync emit-sync})))
