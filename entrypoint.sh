#!/bin/sh
PROD_MODE=production
QA_MODE=qa
DEV_MODE=development
TEST_MODE=test
cd /code
if [[ $NODE_ENV == $PROD_MODE ]]; then
	npm ci
	node src/service.js
fi
if [[ $NODE_ENV == $QA_MODE ]]; then
	npm ci
	node src/service.js
fi
if [[ $NODE_ENV == $DEV_MODE ]]; then
	npm install
	npx sequelize-cli db:migrate
	npx sequelize-cli db:seed:all
	node src/service.js
fi
if [[ $NODE_ENV == $TEST_MODE ]]; then
	npm install
	npx nyc --reporter=lcov --reporter=text-summary ./node_modules/.bin/mocha ./src/*/test/ --recursive --exit
fi