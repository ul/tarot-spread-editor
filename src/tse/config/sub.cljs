(ns tse.config.sub
  (:require [carbon.rx :as rx :include-macros true]))

(def spec
  {:config/deck-base-url [:deck-base-url]
   :config/grid [:grid]
   :config/show-grid? [:grid :show?]
   :config/snap-grid? [:grid :snap?]})
