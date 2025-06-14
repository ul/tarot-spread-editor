(ns tse.sub
  (:require [carbon.rx :as rx :include-macros true]))

(defn invalidate* [cache v sub]
  (when (= sub (get @cache v))
    (vswap! cache dissoc v)))

(defn invalidate-all* [cache key]
  (reduce (fn [cache [k :as v]]
            (if (= k key)
              (dissoc cache v)
              cache))
          cache
          (keys cache)))

(defn invalidate-all [cache key]
  (vswap! cache invalidate-all* key))

(defn register* [key->fn key f]
  (when (contains? @key->fn key)
    (js/console.warn "sub overwrite" key))
  (vswap! key->fn assoc key f))

(defn subscribe* [db subscribe key->fn cache invalidate [key & args :as v]]
  (if-let [sub (get-in @cache v)]
    sub
    (if-let [f (get @key->fn key)]
      (let [sub (rx/add-drop (f {:sub subscribe :db db :args args}) v invalidate)]
        (vswap! cache assoc v sub)
        sub)
      (js/console.warn "no sub" key))))

(defn make [db]
  (let [key->fn (volatile! {})
        cache (volatile! {})]
    (letfn [(invalidate [v sub] (invalidate* cache v sub))
            (register [key f]
              (invalidate-all cache key)
              (register* key->fn key f))
            (register-cursor [key path]
              (register key (fn [{:keys [db]}] (rx/cursor db path))))
            (subscribe [v]
              (subscribe* db subscribe key->fn cache invalidate v))]
      {:register-subscription register
       :register-cursor register-cursor
       :subscribe subscribe
       :sub subscribe})))
