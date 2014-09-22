Responsive Mobile Toggle Menu v1.2.1
==================================

A **mobile first**, **responsive**, CSS toggle menu with JQUERY enhancement.
N.b. *JS is used to enhance by hiding menu on resfresh but is not required which provides the user with a decent fallback :)*

Menu Usage
----------

###HTML
```
   <nav class="mainMenu"> <!-- nav is an HTML5 element, can just be a div if required-->
      <label for="toggle" class="menu-title">Menu</label>
      <input type="checkbox" id="toggle" />
    <ul class="menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    </nav>
```

###CSS
Link to menu.css in the ``<head>`` of your HTML document.

JQuery Enhancement
------------------
menu.min.js/menu.js 
**responsiveMenu() **
This adds animations and  and resets the mobile menu to closed on refresh. 
It is not required for the functionality purposes.
**forceUncheck() **
This function should be called if you wish the menu to be forced closed after clicking an item.
It is not required for the functionality purposes.

Browser Support
---------------
* Chrome 16.0+
* Safari 5.1+
* Firefox 4.0+
* Opera 12
* IE9 +
* iOS 4.0+
* Android 2.2+

Internet Explorer 8 and 7 do not support media queries but an IE specific stylesheet (ie.css) is included 
to provide a desktop fallback.

**Author:** [www.danielle.vautier.co.uk](http://www.daniellevautier.co.uk)

Version History 
---------------
* Version 1.2.1 - Added bug fix for older Android browser < 4.3
* Version 1.2 - Added function to force close the menu after clicking a menu link
* Version 1.1 - Removed transitions and added JQuery Animation and on reload bug
* Version 1.0 - CSS transitions