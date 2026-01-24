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
