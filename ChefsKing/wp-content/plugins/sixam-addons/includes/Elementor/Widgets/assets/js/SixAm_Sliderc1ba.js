; (function ($, elementor) {

    $(window).on("elementor/frontend/init", function () {

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/sixam-slider.default",
            function ($scope) {

                $('.slider-wrapper').find('.client-slider').not('.slick-initialized').slick({
                    dots: true,
                    arrows: true,
                    infinite: true,
                    speed: 400,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: true,
                    centerPadding: "0",
                    infinite: true,
                    responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,

                            },
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                centerPadding: '40px',
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                    ],
                });

                $('.slider-wrapper').find('.image-slider').not('.slick-initialized').slick({
                    dots: false,
                    infinite: true,
                    speed: 300,
                    centerMode: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 6,
                    slidesToScroll:1,
                    arrows:false,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 3
                            }
                        }
                    ]
    
                });

                $('.slider-wrapper').find('.__client-slider').not('.slick-initialized').slick({
                    dots: false,
                    infinite: true,
                    speed: 400,
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: "220px",
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                centerPadding: "180px",
                            },
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                centerPadding: "100px",
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                centerPadding: "0px",
                            },
                        },
                    ],
                });

                $('.slider-wrapper .testimonial-three').find('.slider_container').not('.slick-initialized').slick({
                    dots: false,
                    infinite: true,
                    speed: 1500,
                    // autoplay: true,
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: "0px",
                    focusOnSelect: true,
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                centerPadding: "0px",
                            },
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                centerPadding: "0px",
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                centerPadding: "0px",
                                adaptiveHeight: false,
                            },
                        },
                    ],
                });

                $(".slider-wrapper .slick-nav-prev").click(function () {
                    $(".slider-wrapper .slick-slider").slick("slickPrev");
                });

                $(".slider-wrapper .slick-nav-next").click(function (e) {
                    e.preventDefault();
                    $(".slider-wrapper .slick-slider").slick("slickNext");
                });

                var timeoutID;

                function calculateProgress() {

                    let targetTime = 10000;
                    let startTime = new Date().getTime();
                    let currentTime, elapsedTime, progress;

                    function updateProgress() {
                        currentTime = new Date().getTime();
                        elapsedTime = currentTime - startTime;
                        progress = (elapsedTime / targetTime) * 100;

                        if (progress >= 100) {
                            $(".slider-wrapper .slick-slider").slick("slickNext");
                            progress = 100;
                        }

                        $('.testimonial-three .slider-item .profile_img.progress ').css('background', 'conic-gradient(' + '#ffffff00' + ' ' + progress + '%, ' + '#b4afaf' + ' 0%)');


                        if (elapsedTime >= targetTime) {
                            startTime = currentTime;
                        }

                        startTimeout();
                    }

                    timeoutID = updateProgress();

                    function startTimeout() {
                        timeoutID = setTimeout(updateProgress, 10);
                    }

                    function pauseTimeout() {
                        clearTimeout(timeoutID);
                    }


                    $('.slider-wrapper .testimonial-three').on({
                        mouseenter: function () {
                            pauseTimeout();
                        },
                        mouseleave: function () {
                            startTimeout();
                        },
                        focusin: function () {
                            pauseTimeout();
                        },
                        focusout: function () {
                            startTimeout();
                        }
                    });
                }

                $('.testimonial-three.slider_container .slider_container').on('afterChange', calculateProgress());

            }
        );
    });



})(jQuery, window.elementorFrontend);