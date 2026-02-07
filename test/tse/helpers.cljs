(ns tse.helpers)

(defn make-ctx
  "Build a context map for effect handler testing.
   opts keys:
     :db    - initial db value (wrapped in atom)
     :subs  - map of subscription vector to value (each wrapped in atom)
     :args  - args vector passed through directly"
  [{:keys [db subs args]}]
  (let [db (atom (or db {}))
        events (atom [])]
    {:db db,
     :sub (fn [v] (atom (get subs v))),
     :emit (fn [e] (swap! events conj e)),
     :args args,
     :*events events}))
