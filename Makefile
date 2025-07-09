publish:
	git checkout gh-pages
	git reset --hard master
	lein do clean, cljsbuild once min
	lein run -m tse.deploy/prepare-edn
	cp -a resources/public/* ./
	git add .
	git commit -m "up"
	git push -f
	git checkout master
