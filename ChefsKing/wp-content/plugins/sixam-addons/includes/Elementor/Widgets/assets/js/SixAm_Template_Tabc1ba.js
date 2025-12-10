; (function ($, elementor) {

    $(window).on("elementor/frontend/init", function () {

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/sixam-template-tab.default",
            function ($scope) {

                $('.nav-tabs a.tab-activate').click(function () {
                    $('.nav-tabs li').removeClass('activated'),
                        $(this).parent('li').addClass('activated');
                })

                const currentUrl = window.location.href;
                open_tab(currentUrl);

                $('.template_one_tab_wrapper .sec_edit_container').find('a').click(function (e) {
                    e.preventDefault();
                    var url = $(this).attr('href');
                    window.open(url, '_blank');
                });

                const container = $(".template-tab-wrapper .tab-menu");
                const list = $(".template-tab-wrapper ul.nav--tabs");
                var last_hori_pos = 0;

                $('.template-tab-wrapper .nav-tabs a').click(function (e) {
                    var href = $(this).attr('href');
                    window.history.pushState(href, '', currentUrl.split('#')[0] + href);

                    const listItem = $(this).parent();
                    const listItemPos = listItem.position();
                    var containerScrollPos = list.scrollLeft() + listItemPos.left;

                    if (last_hori_pos > containerScrollPos) {

                        last_hori_pos = containerScrollPos;
                        containerScrollPos = containerScrollPos - (2 * listItemPos.left);
                    }

                    list.animate({ scrollLeft: containerScrollPos }, 300);

                    if (last_hori_pos < containerScrollPos) {
                        last_hori_pos = containerScrollPos;
                    }

                })

                var targetId = '.template-tab-wrapper .nav-tabs li a.active .title';
                var targetOffset = $(targetId).offset().left;


                if (targetOffset > 200 || targetOffset < 24) {
                    $('.template-tab-wrapper ul.nav--tabs').animate({ scrollLeft: targetOffset }, 300);
                }

                $('.__submenu_child > ul > li > a').click(function (e) {
                    e.preventDefault();
                    var url = $(this).attr('href');
                    window.history.pushState(url, '', url);
                    open_tab(url);
                })

                function open_tab(href) {
                    const currentSection = 'child' + (href.split('#')[1]);
                    if (currentSection !== 'childundefined' && typeof currentSection !== 'undefined'  && currentSection !== '') {

                        const target_tab = 'tab_link_' + currentSection.split('child')[1];
                        const target_section = 'template_tab_item_' + currentSection.split('child')[1];

                        if ($('#features_section').length) {

                            $('#features_section').scrollTop();

                            $('html, body').animate({
                                scrollTop: $('#features_section').offset().top - 0
                            }, 'fast');

                        }

                        $('.template-tab-wrapper').find('#' + target_tab).addClass('active');
                        $('.template-tab-wrapper').find('#' + target_tab).parent().siblings().children('a').removeClass('active');
                        $('.template-tab-wrapper').find('#' + target_section).addClass('show active');
                        $('.template-tab-wrapper').find('#' + target_section).siblings().removeClass('show active');
                    }
                }

                const target = '.template-tab-wrapper';

                $(window).scroll(function () {
                    const elementOffset = $(target).offset();
                    const verticalPosition = elementOffset.top;
                    const scrollPosition = $('html').scrollTop() || $('body').scrollTop();
                    const my_pos = scrollPosition - verticalPosition;

                    if (($(window).width() < 768) && (my_pos > 0)) {

                        var divHeight = $(target).height() - 250;

                        $(target).addClass('top_hide');

                        if ((my_pos > 10) && (my_pos < divHeight)) {
                            $(target).addClass('top_fixed');
                        } else {
                            $(target).removeClass('top_fixed');
                        }
                    } else {
                        $(target).removeClass('top_hide top_fixed');
                    }
                })
            }
        );
    });

})(jQuery, window.elementorFrontend);