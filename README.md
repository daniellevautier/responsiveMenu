Responsive Mobile Toggle Menu v2.2
==================================

A **mobile first**, **responsive**, CSS toggle menu with jQuery enhancements.
N.b. *jQuery is used to enhance demo1 and demo2 by hiding menu on refresh but is not required which provides the user with a decent fallback :)*

Menu Usage
----------

###HTML
```
   <nav class="mainMenu"> <!-- "nav" is an HTML5 element, you can use div if required or https://github.com/aFarkas/html5shiv to force support in ie7 and ie8 -->
      <label for="toggle" class="menu-title">Menu</label>
      <input type="checkbox" id="toggle" />
      <ul>
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
This adds animations and resets the mobile menu to closed on refresh. 
It is not required for the functionality purposes.
**forceUncheck() **
This function should be called if you wish the menu to be forced closed after clicking an item.
It is not required for the functionality purposes.
**toggleChildren() **
This function allows children to be toggled on mobile. 
It creates the functionality on mobile but is progressively enhanced to work without JS enabled.

Browser Support - TBC
---------------
* Chrome 16.0+
* Safari 5.1+
* Firefox 4.0+
* IE9 +
* iOS 6.0+
* Android 3+

Internet Explorer 8 and 7 do not support media queries but an IE specific stylesheet (ie.css) is included to provide a desktop fallback.

**Author:** [www.danielle.vautier.co.uk](http://www.daniellevautier.co.uk)
I take no responsibility for your broken code.

Version History 
---------------
* Version 2.2 Reworking the demo3 CSS/JQuery Single child menu
* Version 2.1 - Added SVG Support, fixed menu height bug now 100% and added variables to menu.js for easier management
* Version 2.0 - Restructured CSS and added support for child pages
* Version 1.2.1 - Added bug fix for older Android browser < 4.3
* Version 1.2 - Added function to force close the menu after clicking a menu link
* Version 1.1 - Removed transitions and added JQuery Animation and on reload bug
* Version 1.0 - CSS transitions