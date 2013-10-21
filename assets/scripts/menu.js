/*
Responsive Mobile Menu v1.0
Author: Danielle Vautier
*/

function responsiveMenu2() {	
	$('.mainMenu ul').addClass("responsiveMenu"); //Add ul class for JS enabled 
	
	$('.mainMenu').prepend("<div class='menu-title'><h1>Menu</h1></div>" ); //Add menu title
	
	$('.mainMenu ul').hide(); //Hide menu on load
	
	$('.menu-title').click(function () {
		$('.mainMenu ul').toggle(); 
	});
	
};

function responsiveMenu() {	
	$("#toggle").removeAttr('checked');
};
//If elsewhere on the  page is clicked hide menu

$(function() {
	$("#toggle").removeAttr('checked');
});
