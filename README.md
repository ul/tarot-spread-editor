# Tarot Spread Editor

A browser app for laying out tarot spreads: pick a deck, place cards on a
canvas, move, rotate and resize them, add formatted text labels and a
background, then share the spread as a link. The whole spread lives in the URL
fragment, so links are self-contained and browser Back/Forward act as
undo/redo.

Live at <https://tarot-editor.mantike.pro>. English and Russian UI.

## Development

You need Node.js 24 and a JDK (21+). With Nix, `nix-shell` (or direnv, see
`.envrc`) provides both.

```bash
npm ci
make hooks        # once: zprint pre-commit hook
make dev          # http://localhost:8080 with hot reload
```

`make dev` regenerates the deck data first (see below), then runs
`shadow-cljs watch app`.

| Command        | What it does                                                    |
| -------------- | --------------------------------------------------------------- |
| `make test`    | ClojureScript unit tests (Node + jsdom) and Clojure unit tests  |
| `make e2e`     | Release build, then Playwright tests against it                |
| `make data`    | `resources/*.edn` → `resources/public/*.min.json`               |
| `make release` | Optimised build into `resources/public/js/compiled`             |
| `make publish` | Triggers the Deploy workflow (tests, build, push to `gh-pages`) |

Running `make e2e` for the first time needs `npx playwright install chromium`.
The e2e tests load card images from `decks.mantike.pro`, so they need network
access.

### The carbon snapshot

The UI is built on [carbon](https://clojars.org/carbon/carbon) (a reactive
cell library and a hiccup renderer on top of Inferno), which is used as a
`0.4.0-SNAPSHOT`. CI never caches it, so every CI run and every deploy uses
the latest published snapshot. Locally, Maven only re-checks snapshots
occasionally; `make update-snapshots` drops the cached copy (`make release`
does this automatically).

## Deck data

Card images are not in this repository; they are served from
`https://decks.mantike.pro/<deck src>/<card>.<format>`.

- `resources/decks.edn` lists decks: names, image folder (`:src`), image
  format, card size, whether a card back (`back.<format>`) exists, and which
  *suitcase* the deck uses.
- `resources/suitcases.edn` describes suitcases: how a deck is split into
  suits and the file names of the cards in each suit. Card lists use a small
  syntax parsed by `tse.suitcase`: `"m:00..21"` means `m00` … `m21`,
  `"01,03,05"` lists names. A numeric suitcase in `decks.edn` (e.g.
  `:suitcase 36`) generates a single suit of numbered cards (see
  `tse.deploy`).
- `make data` (`tse.deploy/prepare-edn`) expands both into transit JSON that
  the app fetches at startup.

To add a deck, upload its images, then generate its `decks.edn` entry from a
local copy of the folder:

```bash
npx shadow-cljs clj-run tse.deck-tool/describe path/to/MyDeck "My Deck" "Моя колода" tarot
```

## Deployment

The site is served by GitHub Pages from the `gh-pages` branch.
`make publish` (or *Run workflow* on the Deploy workflow in GitHub) runs the
tests, builds a release with fresh data, and replaces the contents of
`gh-pages` with `resources/public`.

## Further reading

[docs/architecture.md](docs/architecture.md) describes how the code is
organised, the state model, and the share link format.

## License

Copyright © Ruslan Prakapchuk. Distributed under the [Eclipse Public License 2.0](LICENSE).

Card images are not covered by this license; see the [disclaimer](resources/public/disclaimer.html).
