# Architecture

The app is ClojureScript compiled with shadow-cljs. Rendering uses
`carbon.vdom` (hiccup on top of Inferno) and state uses `carbon.rx` (reactive
cells and derived expressions). The design follows re-frame: one state
atom, named effects that change it, and named subscriptions that read it.

```
 view (hiccup) ──emit [:effect/name & args]──▶ effect fn ──swap!──▶ app-db
      ▲                                                               │
      └──────────── @(sub [:sub/name & args]) ◀── subscription ◀──────┘
```

## Layout

| Path                                    | Contents                                                     |
| --------------------------------------- | ------------------------------------------------------------ |
| `src/tse/core.cljs`                     | Entry point: registers subscriptions and effects, mounts the app |
| `src/tse/db.cljs`                       | Initial state (`defaults`) and the spec for shared state     |
| `src/tse/sub.cljs`, `src/tse/effect.cljs` | The subscription and effect registries                     |
| `src/tse/<feature>.cljs`                | Views                                                        |
| `src/tse/<feature>/sub.cljs`            | That feature's subscriptions (`spec` map)                    |
| `src/tse/<feature>/eff.cljs`            | That feature's effects (`spec` map)                          |
| `src/tse/share.cljs`                    | Share link encoding/decoding and URL syncing                 |
| `src/tse/sanitize.cljs`                 | Allowlist filter for label markup                            |
| `src/tse/math.cljs`                     | Geometry: bounding boxes, snapping, scaling                  |
| `src/tse/*.clj`                         | JVM-side tools: data generation, suitcase parser, deck tool  |

Features: `card` and `deck`/`suit`/`suitcase` (the card gallery), `item`
(anything on the canvas), `transformer` (selection overlay: move, resize,
rotate, marquee selection), `label`/`label-editor` (text labels edited with
Quill), `background`/`background-dialog`, `canvas` (scale and viewport),
`config` (grid and board toggles).

## Subscriptions

A subscription spec maps a key to either a path vector (registered as a
cursor into the db) or a function `{:sub :db :args} → rx expression`.
Subscriptions are cached by their full query vector (`[:card/entity 3]`), so
every caller of the same query shares one expression. An expression leaves
the cache when its last watcher disconnects.

Because expressions are shared, code that `add-watch`es a subscription must
use a key that is unique to the watcher (for example the watcher's own atom),
not a constant keyword.

## Effects

An effect is `(fn [{:keys [db sub emit emit-sync args]}] ...)`. `emit` queues
an event; the queue is flushed once per animation frame inside a single
`rx/dosync`, so the views re-render once per batch. A failing or unknown
effect is logged and does not stop the rest of the batch. `emit-sync` runs an
effect immediately (used for pointer tracking).

Effects should take what they need from the DOM as arguments rather than
reading it themselves. For example, label positions are computed by the view
that opens the editor, and the editor view measures and parses the label
before emitting `:label-editor/save`. This keeps effects testable with the
plain map context in `test/tse/helpers.cljs`.

## Canvas items

`:items` is a vector; an item's id is its index. Every item has `:origin` (the
top-left corner before rotation), `:dimensions`, `:angle` (radians, around the
centre), `:z-index` and `:layer` (`:cards` or `:labels`). Cards also have
`:card {:deck :suit :index}`. Labels also have `:content` (hiccup rendered
from Quill's HTML), `:quill-content` (the Quill delta, used for editing) and
`:original-dimensions` (labels scale by CSS transform). `:selected?` marks the
selection.

## Share links

The shared part of the state (`tse.db/shared-keys`: deck, suit, scale, grid,
background, language, items) is written to the URL fragment as URI-encoded
[transit JSON](https://github.com/cognitect/transit-format), 250 ms after the
last change and never during a drag. Each write is a `history.pushState`, so
Back/Forward step through edits. `popstate` loads the fragment back, and an
empty fragment means the default (empty) spread.

What is left out of links: the selection, and backgrounds uploaded from a file
(data URLs would make links megabytes long; only `http(s)` image URLs are
shared).

A link is untrusted input. `tse.share/decode`:

1. keeps only `shared-keys`, so a link cannot set other state such as the
   image host;
2. validates the result against `:tse.db/shared-state`;
3. passes label `:content` through `tse.sanitize`, which keeps only the
   elements, classes and inline styles Quill produces (`p`, `span`, `strong`,
   `em`, `u`, `s`, `br`; `ql-*` classes; `color`, `background-color`,
   `font-size`).

Anything invalid is ignored with a console warning. Changing the format of
items or the shared keys breaks old links, so keep changes backward
compatible: add optional keys rather than renaming or repurposing existing
ones.

## Tests

- `test/**/*_test.cljs`: unit tests for effects, subscriptions and pure
  helpers, run on Node with jsdom (`make test-cljs`).
- `test/tse/suitcase_test.clj`: the card-list parser (`make test-clj`).
- `e2e/`: Playwright tests against a release build served by
  `e2e/server.mjs` (`make e2e`).
