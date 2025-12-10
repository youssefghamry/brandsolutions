; (function ($, elementor) {

    $(window).on("elementor/frontend/init", function () {

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/sixam-frame-slider.default",
            function ($scope) {
                
                $('.frame_slider_wrapper').find('.slider_items').not('.slick-initialized').slick({
                    dots: false,
                    infinite: true,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    speed: 400,
                    slidesToShow: 1,
                    draggable: false,
                    arrows: false,
                    centerMode: false,
                    pauseOnFocus:true,
                    cssEase: 'linear'
                });
            }
        );
    });
})(jQuery, window.elementorFrontend);