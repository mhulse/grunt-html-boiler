# Contributing

By following the simple guidelines below it will make your pull request easier to merge.

## Table of contents

- [Reporting issues](#reporting-issues)
- [Pull requests](#pull-requests)
	- [Tips](#tips)
- [Versioning](#versioning)
	- [Process for bumping a repo’s version](#process-for-bumping-a-repos-version)
- [Coding standards](#coding-standards)
	- [Absolutely NO “Yoda” conditions!!!](#absolutely-no-yoda-conditions)
	- [Always add newline at the end of files](#always-add-newline-at-the-end-of-files)
	- [Indentation](#indentation)
	- [Comments](#comments)
	- [Mixing tabs and spaces](#mixing-tabs-and-spaces)
	- [HyperText Markup Language (`.html`)](#hypertext-markup-language-html)
	- [Cascading Style Sheets (`.css`)](#cascading-style-sheets-css)
	- [Javascript (`.js`)](#javascript-js)
	- [Python (`.py`)](#python-py)
	- [PHP: Hypertext Preprocessor (`.php`)](#php-hypertext-preprocessor-php)
- [License](#license)

## Reporting issues [↥](#table-of-contents)

Please read the following guidelines before opening an issue.

1. **Search for existing issues.** Make sure that the same issue hasn’t already been reported and/or resolved.
1. **Create an isolated and reproducible test case.** Be sure the problem exists in this repo’s code with a reduced test case that should be included in each bug report.
1. **Include a live example.** Make use of [jsBin](http://jsbin.com/) or [jsFiddle](http://jsfiddle.net/) to share your isolated test cases.
1. **Share as much information as possible.** Include operating system and version, browser and version, version of this code, etc. where appropriate. Also include steps to reproduce the bug.

## Pull requests [↥](#table-of-contents)

1. Fork it.
1. Create your feature branch (`$ git checkout -b my-new-feature`).
1. Commit your changes (`$ git commit -am 'Add some feature'`).
1. Push to the branch (`$ git push origin my-new-feature`).
1. Create new Pull Request.

### Tips

* [GitHub Flow in the Browser](https://github.com/blog/1557-github-flow-in-the-browser).
* Install [EditorConfig](http://editorconfig.org/) plugin for your code editor.
* If you have commit access to this repository and want to make big change (or you’re not sure about something), create a new branch and open a pull request.
* CSS changes must be done in the “preprocessed” files; never edit the compiled files.
* If modifying the “preprocessed” files, be sure to generate and commit a compiled version of the code.
* Try not to pollute your pull request with unintended changes--keep them simple and small.
* When applicable, try to share which browsers your code has been tested in before submitting a pull request.
* If using Sublime Text, install [DocBlockr](https://github.com/spadgos/sublime-jsdocs). Here’s my DocBlockr preferences:

 ```json
 {
 	"jsdocs_align_tags": "no",
 	"jsdocs_spacer_between_sections": "after_description",
 	"jsdocs_newline_after_block": true,
 	"jsdocs_return_description": false,
 	"jsdocs_param_description": false
 }
 ```

## Versioning [↥](#table-of-contents)

Unless otherwise noted, the code in this repo will be maintained under the [Semantic Versioning guidelines](http://semver.org) as much as possible. Releases will be numbered with the following format:

```text
<major>.<minor>.<patch>
```

… and constructed with the following guidelines:

* Breaking backward compatibility bumps the major (and resets the minor and patch).
* New additions, including new icons, without breaking backward compatibility bumps the minor (and resets the patch).
* Bug fixes and misc changes bumps the patch.

For more information on Semantic Versioning, please visit http://semver.org.

### Process for bumping a repo’s version

In general and when applicable, depending on the repositorie’s code and structure, follow these steps to bump a version ...

1. Update `version` key value in `package.json`.
1. Update `version` key value in `bower.json`.
1. Run a production build.
1. Update the [changelog](/README.md#changelog) and [release history](/README.md#release-history) in the [README.md](/README.md) (if copy/pasting, don’t forget to update the date and version numbers).
1. Push changes to GitHub.
1. Visit repo’s releases page and click “Draft a new release”.
1. Type the new version number in the “Tag version” field (e.g., `v1.2.1`).
1. Click “Publish release”.

## Coding standards [↥](#table-of-contents)

In general, and for anything not listed below, take care to maintain the existing coding style of the document(s) you’re editing.

### Absolutely NO “Yoda” conditions!!!

> Using `if (constant == variable)` instead of `if (variable == constant)`, like `if (4 == foo)`. Because it’s like saying “if blue is the sky” or “if tall is the man”. 

* [Coding Horror: New Programming Jargon](http://www.codinghorror.com/blog/2012/07/new-programming-jargon.html)

### Always add newline at the end of files

* [No newline at end of file](http://stackoverflow.com/a/5813359/922323)
* [Why should files end with a newline?](http://stackoverflow.com/questions/729692/why-should-files-end-with-a-newline)

### Indentation

Unless otherwise specified, please use [K&R style](http://en.wikipedia.org/wiki/Indent_style#K.26R_style) indentation.

### Comments

1. Limit comment line lengths to 72 characters.
1. Where applicable, use documentation style comments ([jsdoc](http://usejsdoc.org/), [phpdoc](http://www.phpdoc.org/), etc.).
1. [Tabs for primary indentation alignment and then spaces on top of that for detail alignment.](http://www.codinghorror.com/blog/2009/04/death-to-the-space-infidels.html)

### Mixing tabs and spaces

Use tabs for outdents and spaces for lining things up. An example:

```js
;(function($, window, document, undefined) {
	
	'use strict';
	
	// Tabs got us here …
	var $foo,
	    $baz = TRUE,
	    bar = 'Foo!'; // … and spaces lined things up!
	
	console.log(bar);
	
}(jQuery, window, document));
```

### HyperText Markup Language (`.html`)

1. Tabs for indentation.
1. Double quotes only.
1. Always quote attributes.
1. Always use proper indentation.
1. Use tags and elements appropriate for an HTML5 doctype.
1. Please omit the ` /` on self-closing tags.

### Cascading Style Sheets (`.css`)

Suggested (approximate) precedence of commonly used CSS properties:

```css
selector {
	font: value;
	font-*: value;
	color: value;
	text-*: value;
	letter-spacing: value;
	word-spacing: value;
	line-height: value;
	list-*: value;
	background: value;
	background-*: value;
	border: value;
	border-*: value;
	margin: value;
	margin-*: value;
	padding: value;
	padding-*: value;
	width: value;
	height: value;
	float: value;
	display: value;
	clear: value;
	position: value;
	left: value;
	right: value;
	top: value;
	bottom: value;
	overflow: value;
	z-index: value;
	-prefixed-and-css3: value;
}
```

1. Multiple-line approach (one property and value per line).
1. Always add a space after a property’s colon (.e.g, `display: block;`, not `display:block;`).
1. End all lines with a semi-colon.
1. For multiple, comma-separated selectors, place each selector on its own line
1. Attribute selectors, like `input[type="text"]` should always wrap the attribute’s value in double quotes, for consistency and safety (see this [blog post on unquoted attribute values](http://mathiasbynens.be/notes/unquoted-attribute-values) that can lead to XSS attacks).
1. For style definitions that contain a single `property: value;`, always put opening and closing curly braces on the same line (e.g., `.foo { property: value; }`).
1. Put IDs before class attributes and put both as close to the start of tag as possible, like: `<form id="foo" class="bar" action="http://foo.com" method="get">…</form> <!-- /#foo -->`.
1. Make sure all closing classes/IDs have an comment “identifier”, like: `<div class=".b1_ew"> … </div> <!-- /.b1_ew -->`; this make it easier to follow structure of generated HTML. Note that an `#id` trumps a `.class` when labeling the ending comment. If no `#id` and multiple `.class`es, use the first class as the comment label (assuming that it’s typically the most “important”).

### Javascript (`.js`)

1. Tab indentation.
1. Single-quotes.
1. Semicolon.
1. Strict mode.
1. Always declare your variables with a var statement.
1. [One var statement per scope, and that it be at the top.](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)
1. Space after keywords and between arguments and operators.
1. Don’t “[equality overkill](http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/)”.
1. Avoid [spaghetti code](http://en.wikipedia.org/wiki/Spaghetti_code) and try to have one exit point for methods.
1. Always use curly braces around `if`s.

**Note:** As a general rule of thumb, **do not link to any `http://raw.github.com/…` scripts hosted on GitHub!** These files are being served as `text/plain` and as such being blocked in Internet Explorer on Windows 7 for instance (because of the wrong MIME type). _Bottom line:_ **GitHub is not a CDN**.

### Python (`.py`)

Follow [PEP 8 – Style Guide for Python Code](http://www.python.org/dev/peps/pep-0008/).

### PHP: Hypertext Preprocessor (`.php`)

**NOT!**

Cushion nots like this:

```php
<?php if ( ! is_wp_error($rss)): ?>
```

… not this:

```php
<?php if(!is_wp_error($rss)): ?>
```

**Cushion ifs:**

See above.

**Cushion spaces:**

* Do not add cushion spaces, for example: `bloginfo( 'name' );`; this is prefered: `bloginfo('name');`.

**Comments:**

* For indent-level single line comments, use a `#` character.
	* If the comment refers to the line after, append a “:” (colon) to end of comment (unless comment calls for some other sort of punctuation).
* For single line comments at the end of code lines, use `//` characters.
	* Because this comment refers to the line its on, put a period at end.
* For descriptive comments, it’s preferable to use [DocBlock comment styles](http://en.wikipedia.org/wiki/PHPDoc).
	* From [PEP8](http://www.python.org/dev/peps/pep-0008/#maximum-line-length): **“For flowing long blocks of text (docstrings or comments), limiting the length to 72 characters is recommended.”** I’m not totally hardcore about this restriction, but I think it looks good and makes sense.
* For all comments, use proper capitalization and punctuation.
* Upper case AND, OR, AS, TRUE, FALSE, NULL, etc. Example: `foreach ($this->headers AS $key=>$value) { //… }`.
* Curly braces **may** be omitted for single line `if`s, `for`s, `foreach`s, etc. Example: `if ($foo) echo 'bar';`.

General example:

```php
<?php
	
	/**
	 * Description goes here.
	 *<---- If an empty line, no space here. Example:
	 *
	 * Note space on other side of astrix? That’s so it lines up with top/left-most `**`.
	 */
	//<----- No space here. Some IDEs will add space here if you hit return key after the `*/`.
	global $page, $paged;
	
	wp_title('|', TRUE, 'right');
	
	# Add the blog name:
	
	bloginfo('name');
	
	# Add the blog description for the home/front page:
	
	$site_description = get_bloginfo('description', 'display'); // Blah blah blah.
	
	if ($site_description && (is_home() || is_front_page())) echo ' | ' . $site_description;
	
	# Add a page number if necessary:
	
	if ($paged >= 2 || $page >= 2) echo ' | ' . sprintf(__('Page %s', 'octavo'), max($paged, $page));
	
	foreach ($authors AS $author) echo '<wp:author_id>' . $author->ID . '</wp:author_id>';
	
?>
```

## License [↥](#table-of-contents)

By contributing your code, you agree to license your contribution under the terms of the LICENSE found at the root of the repository.
