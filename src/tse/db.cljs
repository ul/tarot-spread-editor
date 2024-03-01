(ns tse.db
  (:require [carbon.rx :as rx :include-macros true]))

(def app-db
  (rx/cell
   {:decks {}
    :suitcases {}
    :deck-base-url "http://decks.mantike.pro/"
    :lang :en
    :active-deck "RiderWaiteTarot"
    :active-suit 0
    :canvas {:scale 1.0}
    :grid {:step 50}
    :items []
    :background-dialog {:tab "color"
                        :color "#ffffff"}
    :background {:origin [0 0]}
    :loaded? false}))
