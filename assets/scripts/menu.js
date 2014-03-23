/*
Responsive Mobile Toggle Menu v1.1
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