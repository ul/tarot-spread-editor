.PHONY: hooks dev test test-cljs test-clj e2e data release update-snapshots publish

# Formats staged Clojure files with zprint on commit
hooks:
	git config core.hooksPath .githooks

# Development server with hot reload at http://localhost:8080
dev: data
	npx shadow-cljs watch app

test: test-cljs test-clj

test-cljs:
	npx shadow-cljs compile test && node target/test.js

test-clj:
	npx shadow-cljs clj-run tse.clj-test-runner/main

# Runs against a release build; starts its own static server on :8080
e2e: release
	CI=true npx playwright test

# resources/{decks,suitcases}.edn -> resources/public/*.min.json
data:
	npx shadow-cljs clj-run tse.deploy/prepare-edn

# carbon is a SNAPSHOT dependency: drop the cached copy so the latest
# published build is resolved
update-snapshots:
	rm -rf ~/.m2/repository/carbon/carbon/0.4.0-SNAPSHOT ~/.m2/repository/carbon/rx/0.4.0-SNAPSHOT

release: update-snapshots data
	rm -rf resources/public/js/compiled
	npx shadow-cljs release app

# Builds and deploys master to GitHub Pages (.github/workflows/deploy.yml)
publish:
	gh workflow run deploy.yml --ref master
