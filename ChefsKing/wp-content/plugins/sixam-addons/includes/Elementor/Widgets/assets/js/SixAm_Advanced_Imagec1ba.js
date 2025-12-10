; (function ($, elementor) {

    $(window).on("elementor/frontend/init", function () {

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/sixam-advanced-image.default",
            function ($scope) {
                $(document).ready(function () {
                    $('.advanced-image-wrapper img').each(function () {
                        $(this).attr('src', $(this).data('src'));
                    });
                   
                    var slider = get_active_slider();

                    init_slick(slider);

                    var tabs_links = $('.template-tab-wrapper .nav-tabs li a');

                    tabs_links.click(function (event) {
                        slider.slick('unslick');
                        setTimeout(function () {
                            var slider = get_active_slider();
                            init_slick(slider);
                        }, 1000)
                    })

                    $('.advanced-image-box-card.clickable_sec').click(function (e) {
                        var slider = get_active_slider();
                        var slide_index = $(this).attr('id').split('-');
                        slider.slick('slickGoTo', slide_index);
                    })
                });

                function get_active_slider() {
                    var tabs = $('.template-tab-wrapper .tab-content');
                    var activeTab = $(tabs).find('.active');
                    var slider = activeTab.find('.advanced-multiple-modal-container');
                    return slider;
                }

                function init_slick(slider) {
                    $(slider).not('.slick-initialized').slick({
                        dots: false,
                        infinite: true,
                        speed: 200,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        centerMode: true,
                        centerPadding: "0px",
                        focusOnSelect: true,
                        cssEase: 'linear',
                    });

                    $(document).keyup(function (e) {
                        if (e.keyCode === 37) {
                            sl_prev();
                        } else if (e.keyCode === 39) {
                            sl_next();
                        }
                    })

                    $('.next-button').click(function () {
                        sl_next(slider);
                    });

                    $('.prev-button').click(function () {
                        sl_prev(slider);
                    });

                    function sl_prev() {
                        slider.slick('slickPrev');;
                    }

                    function sl_next() {
                        slider.slick('slickNext');;
                    }
                }
            }
        );
    });

})(jQuery, window.elementorFrontend);