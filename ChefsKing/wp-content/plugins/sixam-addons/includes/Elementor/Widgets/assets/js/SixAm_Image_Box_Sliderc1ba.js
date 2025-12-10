; (function ($, elementor) {

    $(window).on("elementor/frontend/init", function () {

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/sixam-image-box-slider.default",
            function ($scope) {
                if ($(window).width() > 767) {

                    $('.image-box-slider-wrapper').find('.image-box-slider').not('.slick-initialized').slick({
                        dots: false,
                        arrows: false,
                        infinite: true,
                        speed: 400,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: "0",
                        infinite: true,
                        responsive: [
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,

                                },
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    centerPadding: '20px',
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                },
                            },
                        ],
                    });
                }

                $('.image-box-slider-two-wrapper').find('.image-box-slider').not('.slick-initialized').slick({
                    dots: false,
                    arrows: false,
                    infinite: true,
                    autoplay: true,
                    speed: 400,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "0",
                    focusOnSelect: true,
                    pauseOnHover: true,
                    infinite: true,
                    cssEase: 'linear',
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                centerPadding: '0px',
                            },
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                centerPadding: '0px',
                                arrows: true,
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                dots: false,
                            },
                        },
                    ],
                });

                $(".image-box-slider-wrapper .slick-nav-prev").click(function () {
                    $(".image-box-slider-wrapper .slick-slider").slick("slickPrev");
                });
                $(".image-box-slider-two-wrapper .slick-nav-prev").click(function () {
                    $(".image-box-slider-two-wrapper .slick-slider").slick("slickPrev");
                });

                $(".image-box-slider-wrapper .slick-nav-next").click(function (e) {
                    e.preventDefault();
                    $(".image-box-slider-wrapper .slick-slider").slick("slickNext");
                });
                $(".image-box-slider-two-wrapper .slick-nav-next").click(function (e) {
                    e.preventDefault();
                    $(".image-box-slider-two-wrapper .slick-slider").slick("slickNext");
                });
            }
        );
    });



})(jQuery, window.elementorFrontend);