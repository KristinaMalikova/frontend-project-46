install:
	npm ci

gendiff:
	node bin/gendiff.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm run test -- --watch

test-coverage:
	npm test -- --coverage --coverageProvider=v8
