```bash
# First:
$ cd repo/build/

# Next, install:
$ npm install
# ... or update Grunt dependencies:
$ npm update

# Update Bower packages:
$ grunt bower
# ... or:
$ npm run bower

# Watch (dev build only):
$ grunt watch
# ... or:
$ npm run watch

# Development build:
$ grunt
# ... or:
$ grunt dev
# ... or:
$ npm run dev
# ... or:
$ npm run grunt
# ... or:
$ npm run grunt dev

# Production build:
$ grunt prod
# ... or:
$ npm run prod
# ... or:
$ npm run grunt prod

# Access Grunt flags/options via npm:
$ npm run grunt -- --version
# ... or (verbose mode):
$ npm run grunt -- -v
# Comparatively, this will return the npm version:
$ npm run grunt -v
```

**Note:** If [Grunt](http://gruntjs.com/) isn’t installed globally, then roll with the `$ npm ...` commands.
