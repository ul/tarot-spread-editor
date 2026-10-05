(ns tse.db
  (:require [carbon.rx :as rx :include-macros true]
            [cljs.spec.alpha :as s]))

(s/def ::point (s/tuple number? number?))
(s/def ::origin ::point)
(s/def ::dimensions ::point)
(s/def ::original-dimensions ::point)
(s/def ::angle number?)
(s/def ::z-index number?)
(s/def ::layer #{:cards :labels})
(s/def ::deck string?)
(s/def ::suit int?)
(s/def ::index int?)
(s/def ::card (s/keys :req-un [::deck ::suit ::index]))
;; label markup is additionally passed through tse.sanitize on load
(s/def ::content sequential?)
(s/def ::quill-content (s/coll-of map? :kind vector?))
(s/def ::item
  (s/keys :req-un [::origin ::dimensions ::angle]
          :opt-un [::z-index ::layer ::card ::content ::quill-content
                   ::original-dimensions]))
(s/def ::items (s/coll-of ::item :kind vector?))
(s/def ::scale number?)
(s/def ::canvas (s/keys :req-un [::scale]))
(s/def ::step number?)
(s/def ::show? boolean?)
(s/def ::grid (s/keys :req-un [::step] :opt-un [::show?]))
(s/def ::lang #{:en :ru})
(s/def ::active-deck string?)
(s/def ::active-suit int?)
(s/def ::src (s/and string? #(re-find #"^https?://" %)))
(s/def ::color (s/and string? #(re-find #"^#[0-9a-fA-F]{6}$" %)))
(s/def ::background
  (s/keys :req-un [::origin] :opt-un [::src ::color ::dimensions]))

(s/def ::shared-state
  (s/keys :opt-un [::items ::canvas ::grid ::lang ::active-deck ::active-suit
                   ::background]))

(defn valid-shared-state? [data] (s/valid? ::shared-state data))

(def shared-keys
  "Keys of the app state that are stored in the URL fragment."
  [:active-deck :active-suit :canvas :grid :background :lang :items])

(def defaults
  {:decks {},
   :suitcases {},
   :deck-base-url "https://decks.mantike.pro/",
   :lang :en,
   :active-deck "RiderWaiteTarot",
   :active-suit 0,
   :canvas {:scale 1.0},
   :grid {:step 50},
   :items [],
   :pointers 0,
   :viewport {:width 1024},
   :background-dialog {:tab "color", :color "#ffffff"},
   :background {:origin [0 0]},
   :board-visible? true,
   :loaded? false})

(def shared-defaults (select-keys defaults shared-keys))

(def app-db (rx/cell defaults))
