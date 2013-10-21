/*
Responsive Mobile Menu v1.0
Author: Danielle Vautier
*/

function responsiveMenu() {	
	$('.toggle').click(function () {
		$('.menu').slideToggle("slow");
		$('.menu').css({"max-height":"800px"});
	});
	
};

$(function() {
	$(".menu").css({"display":"none","transition":"none","max-height":"inherit"});
	$("#toggle").hide();
	responsiveMenu();
});

