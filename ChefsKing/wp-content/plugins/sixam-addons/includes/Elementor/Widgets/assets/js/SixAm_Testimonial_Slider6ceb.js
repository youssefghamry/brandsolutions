; (function ($, elementor) {
    
    $(window).on("elementor/frontend/init", function () {

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/sixam-testimonial-slider.default",
            function ($scope) {
				
				$(document).ready(function () {									
					
					const slider_attr =
                    {
                        dots: true,
                        arrows: false,
                        infinite: true,
						speed: 1000,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: "220px",
                        pauseOnHover: true,
                        autoplay: true,
                        autoplaySpeed: 3000,
						focusOnSelect: true,
						cssEase: "linear",
                        responsive: [
                            {
                                breakpoint: 992,
                                settings: {
									centerMode: true,
									centerPadding: '160px', 
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                },
                            },
                            {
                                breakpoint: 580,
                                settings: {
									centerMode: true,
									centerPadding: '40px',                               
                                },
                            },
                        ],
                    }
					
					const slider = $scope.find('.slick_slider');

                    slider.not('.slick-initialized').slick(slider_attr);
					
				});
				
                if ($(window).innerWidth() >= 768) {
                    let currentIndex = 0
                    let nextIndex = 1
                    let maxIndex = 5

                    $('.testimonial-slide-item:eq(' + currentIndex + ')').addClass('active');
                    $('.testimonial-slide-item:eq(' + nextIndex + ')').addClass('secondary');

                    $('.slider-nav-btns .prev').on('click', function () {
                        $('.slider-nav-btns .next').removeClass('active');
                        $(this).addClass('active');

                        if (currentIndex < 1) {
                            currentIndex = maxIndex - 1
                            nextIndex = 0
                        } else {
                            nextIndex -= 1
                            currentIndex -= 1
                        }
                        $('.testimonial-slide-item').removeClass('active secondary');
                        $('.testimonial-slide-item:eq(' + currentIndex + ')').addClass('active');
                        $('.testimonial-slide-item:eq(' + nextIndex + ')').addClass('secondary');

                    })
                    $('.slider-nav-btns .next').on('click', function () {

                        $('.slider-nav-btns .prev').removeClass('active');
                        $(this).addClass('active');

                        if (currentIndex == maxIndex - 1) {
                            currentIndex = 0
                            nextIndex = 1
                        } else {
                            if (currentIndex == maxIndex - 2) {
                                nextIndex = 0
                            } else {
                                nextIndex += 1
                            }
                            currentIndex += 1
                        }
                        $('.testimonial-slide-item').removeClass('active secondary');
                        $('.testimonial-slide-item:eq(' + currentIndex + ')').addClass('active');
                        $('.testimonial-slide-item:eq(' + nextIndex + ')').addClass('secondary');

                    })

                } else {
                    $('.slider-area .slider').slick({
                        dots: false,
                        nextArrow: '.next',
                        prevArrow: '.prev'
                    })
                    $('.slider-nav-btns button').on('click', function () {
                        $('.slider-nav-btns button').removeClass('active')
                        $(this).addClass('active')
                    })
                }
            }
        );
    });

})(jQuery, window.elementorFrontend);