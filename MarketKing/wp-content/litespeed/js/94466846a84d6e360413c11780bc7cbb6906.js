(function($,elementor){$(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/sixam-mart-journey-animation.default",function($scope){$(window).scroll(function(){var scrollTop=$(window).scrollTop();var positionThreshold=100;if($(window).width()<1024){positionThreshold=180}
if(1366>$(window).width()>1025){positionThreshold=400}
if(1367<$(window).width()<3836){positionThreshold=600}
if(3837<$(window).width()){positionThreshold=800}
$('.kickstart-journey-wrapper .module-animation-wrapper').each(function(){var target=$(this);var positionTop=target.offset().top;if(positionTop-scrollTop<positionThreshold){target.addClass('animated')}})})})})})(jQuery,window.elementorFrontend)
;