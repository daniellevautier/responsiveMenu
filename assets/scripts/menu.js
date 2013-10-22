/*
Responsive Mobile Toggle Menu v1.0
Description: JS enhances CSS response time and menu caching but not required
Author: Danielle Vautier
*/

function responsiveMenu() {	
	$('.menuTitle').click(function () {
		$('.menu').slideToggle("slow");
		$('.menu').css({"max-height":"800px"});
	});
};

$(function() {
	$(".menu").css({"display":"none","transition":"none","max-height":"inherit"});
	$("#toggleMenu").remove();
	responsiveMenu();
});