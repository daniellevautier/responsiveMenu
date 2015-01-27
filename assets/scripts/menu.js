/*
Responsive Mobile Toggle Menu v2.2
Description: JS enhances CSS response time and menu caching but not required
Author: Danielle Vautier
*/

/*Variables*/

/*
If you've change the HTML classes, change these here only 
*/
var navClassSelector = '.mainMenu'; // Make sure to include the . 
var labelClassSelector = '.menuTitle'; // Make sure to include the . 
var toggleChildrenClass = 'toggleChildren'; // Don't include .

/*Functions*/

/*
Call this function on page if you want to reset the menu 
to 'closed' on page load with optional slideToggle animation
*/
var responsiveMenu = function(e) {
	$(navClassSelector + '> ul').css({ 'max-height' : '100%', 'display' : 'none'});
	$(labelClassSelector).click(function () {
		$(navClassSelector + '> ul').slideToggle(); //Can use toggle() if you prefer no animation
	});
}

/*
Call this function on page if you want to reset the menu 
to 'closed' after clicking a menu link e.g. use for on page 
anchor menu as per demo2.html
*/

var forceUncheck = function() {
	$(navClassSelector + ' ul a').click(function() {
		$("#toggleMenu").prop('checked', false);
	});
}

/* This function should be called if you want to toggle 
Children as per demo3.html */

var toggleChildren = function() {

	$(navClassSelector + '> ul > li').each( function() {
		if ($(this).children("ul").length > 0) {
			$(this).prepend('<a class="' + toggleChildrenClass + '" href="#"></a>');
		} else {
			//do nothing
		}
	})

	// Menu functions
	$(navClassSelector + '> ul ul').hide();
	$(navClassSelector + ' .' + toggleChildrenClass).click(function() {
		$(this).toggleClass("contract");
		$(this).siblings("ul").toggle();
		return false;
	})

}