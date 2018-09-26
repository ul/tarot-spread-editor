publish:
	git checkout gh-pages
	git rebase master
	lein do clean, cljsbuild once min
	cp -a resources/public/* ./
	git add .
	git commit -m "up"
	git push -f
	git checkout master
