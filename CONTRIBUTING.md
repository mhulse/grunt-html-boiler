# Contributing

By following the simple guidelines below it will make your pull request easier to merge.

## Reporting issues

Please read the following guidelines before opening an issue.

1. **Search for existing issues.** Make sure that the same issue hasn't already been reported and/or resolved.
1. **Create an isolated and reproducible test case.** Be sure the problem exists in this repo's code with a reduced test case that should be included in each bug report.
1. **Include a live example.** Make use of [jsBin](http://jsbin.com/) or [jsFiddle](http://jsfiddle.net/) to share your isolated test cases.
1. **Share as much information as possible.** Include operating system and version, browser and version, version of this code, etc. where appropriate. Also include steps to reproduce the bug.

## Pull requests

1. Fork it.
1. Create your feature branch (`$ git checkout -b my-new-feature`).
1. Commit your changes (`$ git commit -am 'Add some feature'`).
1. Push to the branch (`$ git push origin my-new-feature`).
1. Create new Pull Request.

**Tips:**

* [GitHub Flow in the Browser](https://github.com/blog/1557-github-flow-in-the-browser).
* Install [EditorConfig](http://editorconfig.org/) plugin for your code editor.
* If you have commit access to this repository and want to make big change (or you're not sure about something), create a new branch and open a pull request.
* CSS changes must be done in the "preprocessed" files; never edit the compiled files.
* If modifying the "preprocessed" files, be sure to generate and commit a compiled version of the code.
* Try not to pollute your pull request with unintended changes--keep them simple and small.
* When applicable, try to share which browsers your code has been tested in before submitting a pull request.

## Versioning

Unless otherwise noted, the code in this repo will be maintained under the [Semantic Versioning guidelines](http://semver.org) as much as possible. Releases will be numbered with the following format:

```text
<major>.<minor>.<patch>
```

... and constructed with the following guidelines:

* Breaking backward compatibility bumps the major (and resets the minor and patch).
* New additions, including new icons, without breaking backward compatibility bumps the minor (and resets the patch).
* Bug fixes and misc changes bumps the patch.

For more information on Semantic Versioning, please visit http://semver.org.

## Coding standards

In general, and for anything not listed below, take care to maintain the existing coding style of the document(s) your editing.

### Absolutely NO Yoda conditions!!!

> Using `if (constant == variable)` instead of `if (variable == constant)`, like `if (4 == foo)`. Because it's like saying "if blue is the sky" or "if tall is the man". 

* [Coding Horror: New Programming Jargon](http://www.codinghorror.com/blog/2012/07/new-programming-jargon.html)

### Always add newline at the end of files.

* [No newline at end of file](http://stackoverflow.com/a/5813359/922323)
* [Why should files end with a newline?](http://stackoverflow.com/questions/729692/why-should-files-end-with-a-newline)

### Indentation:

Unless otherwise specified, please use [K&R style](http://en.wikipedia.org/wiki/Indent_style#K.26R_style) indentation.

### Comments:

1. Limit comment line lengths to 72 characters.
1. Where applicable, use documentation style comments ([jsdoc](http://usejsdoc.org/), [phpdoc](http://www.phpdoc.org/), etc.).
1. [Tabs for primary indentation alignment and then spaces on top of that for detail alignment.](http://www.codinghorror.com/blog/2009/04/death-to-the-space-infidels.html)

### Mixing tabs & spaces:

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

### HyperText Markup Language (`.html`):

1. Tabs for indentation.
1. Double quotes only.
1. Always quote attributes.
1. Always use proper indentation.
1. Use tags and elements appropriate for an HTML5 doctype.
1. Please omit the ` /` on self-closing tags.

### Cascading Style Sheets (`.css`):

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
1. Always add a space after a property's colon (.e.g, `display: block;`, not `display:block;`).
1. End all lines with a semi-colon.
1. For multiple, comma-separated selectors, place each selector on its own line
1. Attribute selectors, like `input[type="text"]` should always wrap the attribute's value in double quotes, for consistency and safety (see this [blog post on unquoted attribute values](http://mathiasbynens.be/notes/unquoted-attribute-values) that can lead to XSS attacks).
1. For style definitions that contain a single `property: value;`, always put opening and closing curly braces on the same line (e.g., `.foo { property: value; }`).

### Javascript (`.js`):

1. Tab indentation.
1. Single-quotes.
1. Semicolon.
1. Strict mode.
1. Always declare your variables with a var statement.
1. [One var statement per scope, and that it be at the top.](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)
1. Space after keywords and between arguments and operators.
1. Don't "[equality overkill](http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/)".
1. Avoid [spaghetti code](http://en.wikipedia.org/wiki/Spaghetti_code) and try to have one exit point for methods.

### Python (`.py`):

Follow [PEP 8 -- Style Guide for Python Code](http://www.python.org/dev/peps/pep-0008/).

### PHP: Hypertext Preprocessor (`.php`):

**NOT!**

Cushion nots like this:

```php
<?php if ( ! is_wp_error($rss)): ?>
```

... not this:

```php
<?php if(!is_wp_error($rss)): ?>
```

**Cushion ifs:**

See above.

**Cushion spaces:**

* Do not add cushion spaces, for example: `bloginfo( 'name' );`; this is prefered: `bloginfo('name');`.

**Comments:**

* For indent-level single line comments, use a `#` character.
    * If the comment refers to the line after, append a ":" (colon) to end of comment (unless comment calls for some other sort of punctuation).
* For single line comments at the end of code lines, use `//` characters.
    * Because this comment refers to the line its on, put a period at end.
* For descriptive comments, it's preferable to use [DocBlock comment styles](http://en.wikipedia.org/wiki/PHPDoc).
    * From [PEP8](http://www.python.org/dev/peps/pep-0008/#maximum-line-length): **"For flowing long blocks of text (docstrings or comments), limiting the length to 72 characters is recommended."** I'm not totally hardcore about this restriction, but I think it looks good and makes sense.
* For all comments, use proper capitalization and punctuation.

Simple example:

```php
<?php
	
	/**
	 * Description goes here.
	 *<---- If an empty line, no space here. Example:
	 *
	 * Note space on other side of astrix? That's so it lines up with top/left-most `**`.
	 */
	//<----- No space here. Some IDEs will add space here if you hit return key after the `*/`.
	global $page, $paged;
	
	wp_title('|', true, 'right');
	
	# Add the blog name:
	
	bloginfo('name');
	
	# Add the blog description for the home/front page:
	
	$site_description = get_bloginfo('description', 'display'); // Blah blah blah.
	
	if ($site_description && (is_home() || is_front_page())) echo ' | ' . $site_description;
	
	# Add a page number if necessary:
	
	if ($paged >= 2 || $page >= 2) echo ' | ' . sprintf(__('Page %s', 'octavo'), max($paged, $page));
	
?>
```

## License

By contributing your code, you agree to license your contribution under the terms of the LICENSE found at the root of the repository.
