.PHONY: test coverage codeclimate build check-if-built

test:
	./node_modules/.bin/mocha test/**/*

coverage:
	istanbul cover ./node_modules/.bin/_mocha -- -R spec test/**/*

codeclimate:
	istanbul cover ./node_modules/.bin/_mocha --report lcovonly -- -R spec && ./node_modules/.bin/codeclimate < ./coverage/lcov.info

build:
	mkdir -p dist/
	./node_modules/.bin/browserify -r ./lib/stink_bomb.js:stink-bomb -x moment > dist/bundle.js
	cat build/umd-head.js dist/bundle.js build/umd-tail.js > dist/stink_bomb.js
	rm dist/bundle.js

check-if-built:
	make build
	test `git diff --name-only dist/stink_bomb.js | wc -l` -eq 0
