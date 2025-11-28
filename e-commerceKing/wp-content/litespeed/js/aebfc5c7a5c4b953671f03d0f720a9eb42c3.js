(function($,elementor){$(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/sixam-work-process-animation.default",function($scope){var target_id='trigger_animate';var positionThreshold=80;if(3837<$(window).width()){positionThreshold=1000}
if(1367<$(window).width()&&$(window).width()<3836){positionThreshold=680}
if(1366>$(window).width()&&$(window).width()>1025){positionThreshold=360}
if(768<$(window).width()&&$(window).width()<1024){positionThreshold=120}
$(window).scroll(function(){const elementOffset=$('#'+target_id).offset();const verticalPosition=elementOffset.top;const scrollPosition=$('html').scrollTop()||$('body').scrollTop();const my_pos=verticalPosition-scrollPosition;if(my_pos<positionThreshold){$('.work-process-animation-wrapper').addClass('animated')}else{}})})})})(jQuery,window.elementorFrontend)
;