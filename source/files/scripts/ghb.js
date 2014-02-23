/**
 * Singleton with "register" functionality.
 *
 * @see http://codereview.stackexchange.com/questions/15166/best-way-to-organize-javascript-for-website
 */

(function(exports) {
	
	'use strict';
	
	var initialized,
	    registry = []; // Collection of module.
	
	// Adds module to collection:
	exports.register = function(moduleDeclaration) {
		
		registry.push(moduleDeclaration); // Add module to registry.
		
		if (initialized) {
			
			// If lib already initialized, register and execute module immediately:
			moduleDeclaration.call(this);
			
		}
		
	};
	
	// Executes every module:
	exports.init = function() {
		
		initialized = true; // Flippin' switches!
		
		// Loop through each module and execute:
		for (var i = 0, l = registry.length; i < l; i++) {
			
			registry[i].call(this); // Call and execute module.
			
		}
		
	};
	
}(window.GHB = window.GHB || {})); // Use existing namespace or make a new object of that namespace.
