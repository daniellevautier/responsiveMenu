/*
Responsive Mobile Toggle Menu v1.2.1
Description: JS enhances CSS response time and menu caching but not required
Author: Danielle Vautier
*/

var responsiveMenu = function(e) {
	//Reset menu to closed on load
	//Set max-height to max height of menu
	$('.menu').css({ 'max-height' : '800px', 'display' : 'none'});

	//Animate menu
	$('.menuTitle').click(function () {
		$('.menu').slideToggle();
	});
}	

/* This function should be called if you wish the 
menu to be forced closed after clicking an item. */

var forceUncheck = function() {
	$(".menu a").click(function() {
		$("#toggleMenu").prop('checked', false);
	});
}

/* This function should be called if you want to toggle 
Children as per demo 3 */

var toggleChildren = function() {

	$(".menu > li").each( function() {
		if ($(this).children("ul").length > 0) {
			$(this).prepend("<a class='toggleChildren' href='#'></a>");
		} else {
			//do nothing
		}
	})

	// Menu functions
	$(".menu ul").hide();

	$(".menu .toggleChildren").click(function() {
		$(this).toggleClass("contract");
		$(this).siblings("ul").toggle();
		return false;
	})

}

