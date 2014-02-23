# Grunt HTML Boiler

<a href="http://gruntjs.com/" title="Built with Grunt"><img src="https://cdn.gruntjs.com/builtwith.png" alt="Built with Grunt" align="right"></a>

**Grunt HTML Boiler: A starting point for [Grunt.js](http://gruntjs.com/) HTML projects/repositories.**

---

## About

This repo is just an example of my prefered asset Grunt workflow.

This repo also serves as an example of how one can use Grunt to build a "development" and "production" `index.html`, and other, file(s).

## Demo

Click or scan:

DEVELOPMENT | PRODUCTION
:-: | :-:
[![qr code](http://chart.apis.google.com/chart?cht=qr&chl=http://mky.io/grunt-html-boiler/dev/&chs=240x240)](http://mky.io/grunt-html-boiler/dev/) | [![qr code](http://chart.apis.google.com/chart?cht=qr&chl=http://mky.io/grunt-html-boiler/prod/&chs=240x240)](http://mky.io/grunt-html-boiler/prod/)
`$ grunt` | `$ grunt prod`

## Installation

Here's a few ways to install this code:

1. Download as a [`zip`](https://github.com/mhulse/grunt-html-boiler/archive/gh-pages.zip).
1. Clone it: `$ git clone https://github.com/mhulse/grunt-html-boiler.git`.
1. Fork it and clone: `$ git clone git@github.com:USERNAME/grunt-html-boiler.git`.

## Usage

Modify `/source/package.json` to meet the needs of your repo/project.

**Note:** The `production` key's value is the URI where the final production files will live.

## Builds

Navigate to the local repo's `source/` folder:

```bash
$ cd grunt-html-boiler/source/
```

Install dependencies:

```bash
$ npm install
```

Install [Bower](http://bower.io/) plugins:

```bash
$ grunt bower
```

This will install a few files into the `/source/files/plugins` folder.

In order to keep things tidy, I've symlinked these plugins:

Plugin | Destination
:-: | :-:
`/source/plugins/fastclick/fastclick.js` | `/source/scripts/fastclick.js`
`/source/plugins/jquery/jquery.js` | `/source/scripts/jquery.js`
`/source/plugins/normalize-css/normalize.css` | `/source/styles/partials/_normalize.scss`

Test the development build:

```bash
$ grunt
# "grunt dev" would also work.
```

Visit the development build:

http://localhost/grunt-html-boiler/dev/

**Note:** The above URL will depend upon your local development environment; for previewing my projects, I personally use [XAMPP](http://www.apachefriends.org/index.html).

At this point, you can modify any of the files, especially the ones found in the `/source/files` folder.

To make life easier while developing, run:

```
$ grunt watch
```

... the watch command will run a development build any time these folders/file(s) change:

```text
/source/Gruntfile.js
/source/files/scripts/<%= pkg.ns %>.*.js
/source/files/scripts/**/*
/source/files/styles/**/*
/source/files/templates/**/*
```

Once you're ready to do a production build, run:

```bash
$ grunt prod
```

Push the productin build to your GitHub repo.

Depending on your setup, you may need to pull the latest build to your production server.

## Links

* [Have Grunt generate `index.html` for different setups](http://stackoverflow.com/a/14970339/922323)
* [grunt-js-boiler](https://github.com/mhulse/grunt-js-boiler)

## Contributing

Please read the [CONTRIBUTING.md](https://github.com/user/grunt-html-boiler/blob/branch/CONTRIBUTING.md).

## Feedback

[Bugs? Constructive feedback? Questions?](https://github.com/mhulse/grunt-html-boiler/issues/new?title=Your%20code%20sucks!&body=Here%27s%20why%3A%20)

---

#### LEGAL

Copyright &copy; 2014 [Micky Hulse](http://mky.io)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<img width="20" height="20" align="absmiddle" src="https://github.global.ssl.fastly.net/images/icons/emoji/octocat.png" alt=":octocat:" title=":octocat:" class="emoji">
