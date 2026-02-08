(ns tse.config.eff)

(defn toggle-grid-show
  [{:keys [db], [show?] :args}]
  (swap! db assoc-in [:grid :show?] show?))

(defn toggle-grid-snap
  [{:keys [db], [snap?] :args}]
  (swap! db assoc-in [:grid :snap?] snap?))

(defn toggle-board [{:keys [db]}] (swap! db update :board-visible? not))

(def spec
  {:config/toggle-grid-show toggle-grid-show,
   :config/toggle-grid-snap toggle-grid-snap,
   :config/toggle-board toggle-board})
