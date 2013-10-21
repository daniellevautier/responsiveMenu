/*
Responsive Mobile Menu v1.0
Author: Danielle Vautier
*/

function responsiveMenu() {	
	$('.menu-title').click(function () {
		$('.menu').slideToggle("slow");
		$('.menu').css({"max-height":"800px"});
	});
};

$(function() {
	$(".menu").css({"display":"none","transition":"none","max-height":"inherit"});
	$("#toggle").remove();
	responsiveMenu();
});

