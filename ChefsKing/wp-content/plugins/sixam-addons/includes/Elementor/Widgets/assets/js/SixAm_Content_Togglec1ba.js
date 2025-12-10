; (function ($, elementor) {

    $(window).on("elementor/frontend/init", function () {

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/sixam-content-toggle.default",
            function ($scope) {
                toggle_by_url();

                $('a').click(function () {
                    const clicked_href = $(this).attr('href');
                    const first_option_to_match_href = $scope.find('.ct_wrapper a.ct_toggle_item.first').attr('href');
                    const second_option_to_match_href = $scope.find('.ct_wrapper a.ct_toggle_item.second').attr('href');

                    if (clicked_href.match(first_option_to_match_href) || clicked_href.match(second_option_to_match_href)) {
                        setTimeout(() => {
                            toggle_by_url();
                        }, 500);
                    }
                })

                $scope.find('.ct_wrapper a.ct_toggle_item').click(function (e) {
                    var href = $(this).attr('href');
                    const page_name = window.location.pathname;
                    const page_url = page_name + href;

                    window.history.pushState(href, '', page_url);
                })

                function toggle_by_url() {
                    const currentUrl = window.location.href;
                    const currentSection = (currentUrl.split('#')[1]);

                    if (typeof currentSection !== 'undefined' && currentSection != null) {
                        const target_tab = $scope.find('a[href=#' + currentSection + ']');
                        const target_section = $scope.find('.ct_wrapper #ct_' + currentSection);

                        $('html, body').animate({
                            scrollTop: $('#content_toggle_section').offset().top -20
                        }, 100);

                        target_tab.addClass('active');
                        target_tab.parent().siblings().children('a').removeClass('active');
                        target_section.addClass('show active');
                        target_section.siblings().removeClass('show active');
                    }
                }
            }
        );
    });

})(jQuery, window.elementorFrontend);