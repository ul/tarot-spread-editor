test-cljs:
	npx shadow-cljs compile test && node target/test.js

test-clj:
	lein test

test: test-cljs test-clj

publish:
	git checkout gh-pages
	git reset --hard master
	rm -rf resources/public/js/compiled
	npm install
	npx shadow-cljs release app 
	lein run -m tse.deploy/prepare-edn
	cp -a resources/public/* ./
	git add .
	git commit -m "up"
	git push -f
	git checkout master
