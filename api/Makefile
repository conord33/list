install:
	npm install

start:
	node_modules/.bin/pm2 start app.js -i max
	
stop:
	node_modules/.bin/pm2 kill

restart: stop start

.PHONY: all test