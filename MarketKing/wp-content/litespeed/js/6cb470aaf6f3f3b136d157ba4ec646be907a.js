(function($,elementor){$(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/sixam-testimonial-slider.default",function($scope){if($(window).innerWidth()>=768){let currentIndex=0
let nextIndex=1
let maxIndex=4
$('.testimonial-slide-item:eq('+currentIndex+')').addClass('active');$('.testimonial-slide-item:eq('+nextIndex+')').addClass('secondary');$('.slider-nav-btns .prev').on('click',function(){$('.slider-nav-btns .next').removeClass('active');$(this).addClass('active');if(currentIndex<1){currentIndex=maxIndex-1
nextIndex=0}else{nextIndex-=1
currentIndex-=1}
$('.testimonial-slide-item').removeClass('active secondary');$('.testimonial-slide-item:eq('+currentIndex+')').addClass('active');$('.testimonial-slide-item:eq('+nextIndex+')').addClass('secondary')})
$('.slider-nav-btns .next').on('click',function(){$('.slider-nav-btns .prev').removeClass('active');$(this).addClass('active');if(currentIndex==maxIndex-1){currentIndex=0
nextIndex=1}else{if(currentIndex==maxIndex-2){nextIndex=0}else{nextIndex+=1}
currentIndex+=1}
$('.testimonial-slide-item').removeClass('active secondary');$('.testimonial-slide-item:eq('+currentIndex+')').addClass('active');$('.testimonial-slide-item:eq('+nextIndex+')').addClass('secondary')})}else{$('.slider-area .slider').slick({dots:!1,nextArrow:'.next',prevArrow:'.prev'})
$('.slider-nav-btns button').on('click',function(){$('.slider-nav-btns button').removeClass('active')
$(this).addClass('active')})}})})})(jQuery,window.elementorFrontend)
;