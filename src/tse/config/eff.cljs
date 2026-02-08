(ns tse.config.eff)

(defn toggle-grid-show
  [{:keys [db], [show?] :args}]
  (swap! db assoc-in [:grid :show?] show?))

(defn toggle-board [{:keys [db]}] (swap! db update :board-visible? not))

(def spec
  {:config/toggle-grid-show toggle-grid-show,
   :config/toggle-board toggle-board})
