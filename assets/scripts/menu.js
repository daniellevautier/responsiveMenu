/*
Responsive Mobile Menu v1.0
Author: Danielle Vautier
*/

function responsiveMenu() {	
	$('.menu ul').addClass("responsiveMenu"); //Add ul class for JS enabled 
	
	$('.menu').prepend("<div class='menu-title'><h1>Menu</h1></div>" ); //Add menu title
	
	$('.menu ul').hide(); //Hide menu on load
	
	$('.menu-title').click(function () {
		$('.menu ul').toggle(); 
	});
	
};

//If elsewhere on the  page is clicked hide menu
$(document).click(function(event) {
    if (!$(event.target).closest(".menu-title,.menu ul").length) {
          $(".menu ul").hide();
    }
});

$(function() {
	responsiveMenu();
});
