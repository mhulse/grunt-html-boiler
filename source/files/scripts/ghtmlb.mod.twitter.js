/* jshint -W062, expr:true */

GHTMLB.register(function() {
	
	'use strict';
	
	!function(id) {
		
		if ($('.twitter-timeline').length && ( ! $('#' + id).length)) {
			
			$('<script>', {
				'id' : id,
				'src' : '//platform.twitter.com/widgets.js'
			})
				.appendTo('head');
			
		}
		
	}('twitter-wjs');
	
}); // GHTMLB
