; (function ($, elementor) {

    $(window).on("elementor/frontend/init", function () {

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/sixam-back-to-top.default",
            function ($scope) {

                $(document).ready(function () {

                    var window_height = $(window).height();
                    var document_height = $(document).height() - 50;
                   
                    let target = $('.back-to-top-wrapper');
                    var position_threshold = window_height;
                    const scrollPosition = $('html').scrollTop() || $('body').scrollTop();

                    if (scrollPosition > position_threshold) {
                        $(target).addClass('active');
                    } else {
                        $(target).removeClass('active');
                    }

                    $(window).scroll(function () {
                        const scrollPosition = $('html').scrollTop() || $('body').scrollTop();

                        if (scrollPosition > position_threshold) {
                            $(target).addClass('active');
                        } else {
                            $(target).removeClass('active');
                        }

                        var scroll = $(window).scrollTop();
                        var scroll_percent = (scroll / (document_height - window_height)) * 100;
                        var base_color = $('.back-to-top-wrapper .base_color').attr('id');
                        var progress_color = $('.back-to-top-wrapper .progress_color').attr('id');

                        $('.progress').css('background', 'conic-gradient(' + progress_color + ' ' + scroll_percent + '%, ' + base_color + ' 0%)');
                    });

                    $('.back-to-top-wrapper a.back-top').click(function (e) {
                        e.preventDefault();
                        $('html').animate({ scrollTop: 0 }, 200);
                    })
                })
            }
        );
    });
})(jQuery, window.elementorFrontend);