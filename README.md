responsiveMenu
==============

A mobile first responsive CSS toggle menu with JQUERY enhancement

/*Menu Usage*/

  /*HTML*/

   <nav class="mainMenu"> <!-- nav is an HTML5 element, can just be a div if required-->
      <label for="toggle" class="menu-title">Menu</label>
      <input type="checkbox" id="toggle" />
      <ul class="menu">
          <li class="current"><a href="http://www.google.com">Home</a></li>
          <li><a href="#">Sofas</a></li>
          <li><a href="#">Chairs</a></li>
          <li><a href="#">Beds</a></li>
          <li><a href="#">Tables</a></li>
          <li><a href="#">Chairs &amp; Benches </a></li>
          <li><a href="#">Stuff</a></li>
          <li><a href="#">Important Info</a></li>
          <li><a href="#">Stock Clearance</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    
  /*CSS*/
  
  Link to menu.css in the <head> of your HTML document.

/*JQuery Enhancement*/
  
  menu.min.js/menu.js improves the checkbox response time and resets the mobile menu to closed on refresh. 


/*Browser Support*/

  Chrome 16.0+
  Safari 5.1+
  Firefox 4.0+
  Opera 12
  IE9 +
  iOS 4.0+
  Android 2.2+

Internet Explorer 8 and 7 do not support media queries but an IE specific stylesheet (ie.css) is included 
to provide a desktop fallback.
