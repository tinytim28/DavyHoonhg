(new WOW).init(),/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera)||skrollr.init({forceHeight:!1,smoothScrolling:!0}),jQuery(document).ready(function(a){a(function(){"use strict";a(".main-header-fixed .main-header").hcSticky({})}),a(function(){"use strict";a(".sticky-nav").hcSticky({top:50})}),a(function(){"use strict";a(".header-nav > li").hover(function(){a(this).addClass("sfHover")},function(){a(this).removeClass("sfHover")})}),a(function(){"use strict";a("#responsive-menu").click(function(){a(".main-header ul.main-nav").toggle()})})});