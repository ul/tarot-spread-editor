(ns tse.db
  (:require [carbon.rx :as rx :include-macros true]
            [cljs.spec.alpha :as s]))

(s/def ::origin (s/tuple number? number?))
(s/def ::dimensions (s/tuple number? number?))
(s/def ::angle number?)
(s/def ::z-index number?)
(s/def ::selected? boolean?)
(s/def ::layer #{:cards :labels})
(s/def ::item
  (s/keys :req-un [::origin ::dimensions ::angle]
          :opt-un [::z-index ::selected? ::layer]))
(s/def ::items (s/coll-of ::item :kind vector?))
(s/def ::scale number?)
(s/def ::canvas (s/keys :req-un [::scale]))
(s/def ::step number?)
(s/def ::grid (s/keys :req-un [::step]))
(s/def ::lang keyword?)
(s/def ::active-deck string?)
(s/def ::active-suit number?)
(s/def ::background (s/keys :req-un [::origin]))

(s/def ::shared-state
  (s/keys :opt-un [::items ::canvas ::grid ::lang ::active-deck ::active-suit
                   ::background]))

(defn valid-shared-state? [data] (s/valid? ::shared-state data))

(def app-db
  (rx/cell {:decks {},
            :suitcases {},
            :deck-base-url "https://decks.mantike.pro/",
            :lang :en,
            :active-deck "RiderWaiteTarot",
            :active-suit 0,
            :canvas {:scale 1.0},
            :grid {:step 50},
            :items [],
            :pointers 0,
            :background-dialog {:tab "color", :color "#ffffff"},
            :background {:origin [0 0]},
            :board-visible? true,
            :loaded? false}))
