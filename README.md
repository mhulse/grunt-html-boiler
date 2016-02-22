# Grunt HTML Boiler

<a href="http://gruntjs.com/" title="Built with Grunt"><img src="https://cdn.gruntjs.com/builtwith.png" alt="Built with Grunt" align="right"></a>

**A starting point for [Grunt.js](http://gruntjs.com/) HTML projects/repositories.**

## About

This repo is just an example of my preferred Grunt-powered asset/theme files workflow.

It’s my preference to separate asset/theme files from server-side code/templates. A few advantages to this type of setup is:

1. Updating theme becomes as simple as changing one variable ([see below](#update-production-theme)).
1. Build and commit theme files separately from server-side logic/templates.

This repo also serves as an example of how one can use Grunt (via [`grunt-env`](https://github.com/jsoverson/grunt-env/) and [`grunt-preprocess`](https://github.com/jsoverson/grunt-preprocess/) tasks) to build a “development” and “production” `index.html`, and other, file(s).

## Demos

* [Development build](http://mhulse.github.io/grunt-html-boiler/dev/) (non-minified/uglified, etc.)
* [Production build](http://mhulse.github.io/grunt-html-boiler/prod/)

## Development

Assuming you already have [Grunt.js](http://gruntjs.com/) installed …

**Note:** The Grunt [command line interface](https://github.com/gruntjs/grunt-cli) gets installed locally, so you can skip `$ npm install -g grunt-cli` if you use the `$ npm run` commands.

### Installation

Here’s a few ways to install this code:

1. Download as a [`zip`](../../archive/gh-pages.zip).
1. Clone it: `$ git clone https://github.com/mhulse/grunt-html-boiler.git`.
1. Fork it and clone: `$ git clone git@github.com:USERNAME/grunt-html-boiler.git`.

### Setup dependencies

Navigate to the local repo’s `build/` directory:

```bash
$ cd grunt-html-boiler/build/
```

Install Grunt tasks:

```bash
$ npm install
```

Optionally, install the latest [Bower](http://bower.io/) plugin versions:

```bash
$ grunt bower
# … or:
$ npm run bower
```

… this will install plugins (as defined in `build/bower.json`) into the `build/files/plugins/` directory; in order to keep things tidy, I’ve created these symlinks:

Plugin | Destination
:-- | :--
`build/plugins/fastclick/fastclick.js` | `build/scripts/fastclick.js`
`build/plugins/jquery/jquery.js` | `build/scripts/jquery.js`
`build/plugins/normalize-css/normalize.css` | `build/styles/partials/_normalize.scss`

### Development preview

Test the development build:

```bash
$ grunt
# … or:
$ grunt dev
# … or:
$ npm run dev
```

Visit the development build:

<http://localhost/grunt-html-boiler/dev/>

**Note:** The above URL will depend upon your local development environment; for previewing my projects I use [XAMPP](http://www.apachefriends.org/index.html).

Alternatively, you could setup [`grunt-contrib-connect`](https://github.com/gruntjs/grunt-contrib-connect) ([#37](../../issues/37)).

### Edit

At this point, you can modify any of the files, especially the ones found in the `build/files/` directory.

Modify `build/package.json` to meet the needs of your repo/project.

**Note:** The `production` key’s value is the URI where the final production files will live.

To make life easier while developing, run:

```bash
$ grunt watch
# … or:
$ npm run watch
```

… the `watch` command will run a development build any time these directories/file(s) change:

```text
build/Gruntfile.js
build/files/scripts/<%= pkg.ns %>.*.js
build/files/scripts/**/*
build/files/styles/**/*
build/files/templates/**/*
```

### Production build

Once you’re ready to do a production build, run:

```bash
$ grunt prod
# … or:
$ npm run prod
```

Push the production build to your GitHub repo.

Depending on your setup, you may need to pull the latest build to your production server.

Visit the production build locally:

<http://localhost/grunt-html-boiler/prod/>

**Note:** The production build’s asset files are absolutely linked to the production server; hence the need to push the latest files there before previewing the production’s HTML file and related assets.

### Update production theme

Finally, in a real world scenario, you would update the asset path (on your live templates) by updating the URL to the latest production build. For example, here’s a simple PHP function one could use in a WordPress `functions.php` file:

```php
/**
 * Theme build version.
 *
 * Called like so: <?=theme_build()?>
 */

function theme_build() {
	
	return '/prod/1.0.0/20140222/1'; // Edit this string to update theme across site.
	
}
```

… and on the template level:

```html
<link rel="stylesheet" href="http://static.foo.com<?=theme_build()?>/styles/grunt-html-boiler.min.css">
<script src="http://static.foo.com<?=theme_build()?>/js/grunt-html-boiler.min.js"></script>
```

## Notes

1. This project generates two groups of Grunt-built files: 1) Un-minified/uglified, and 2) minified/uglified. I prefer having my development- and production-generated files separately built.

1. This project puts the “build” code a level deep off the root. In my opinion, having the source files out of the root and in a sub-directory allows for the overall setup to be more organized and streamlined.

## Links

* [Have Grunt generate `index.html` for different setups](http://stackoverflow.com/a/14970339/922323)
* [grunt-js-boiler](https://github.com/mhulse/grunt-js-boiler)

### Real-world

Personal projects that have used `grunt-html-boiler` as a starting point:

* [2014 General Election](https://github.com/mhulse/election-2014-general)
* [Drone](https://github.com/registerguard/drone)
* [Zeppelin](https://github.com/registerguard/zeppelin)
* [Purely Packery](https://github.com/mhulse/purely-packery)
* [Infinitope!](https://github.com/mhulse/infinitope)
* [Popular](https://github.com/rgpages/popular)

## Build instructions?

… and other development notes, can be found [here](build/README.md).

## Contributing

Please read the [CONTRIBUTING.md](CONTRIBUTING.md).

## Feedback

[Bugs? Constructive feedback? Questions?](../../issues/new?title=Your%20code%20sucks!&body=Here%27s%20why%3A%20)

---

#### LEGAL

Copyright © 2016 [Micky Hulse](http://mky.io)

Licensed under the Apache License, Version 2.0 (the “License”); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an ”AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<img width="20" height="20" align="absmiddle" src="https://github.global.ssl.fastly.net/images/icons/emoji/octocat.png" alt=":octocat:" title=":octocat:" class="emoji">
