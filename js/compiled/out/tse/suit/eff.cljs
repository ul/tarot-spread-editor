(ns tse.suit.eff)

(defn activate [{:keys [db] [id] :args}]
  (swap! db assoc :active-suit id))

(def spec
  {:suit/activate activate})
