/*
Responsive Mobile Toggle Menu v1.2
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