; (function ($, elementor) {

    $(window).on("elementor/frontend/init", function () {

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/sixam-tab.default",
            function ($scope) {

                $('.nav-tabs a.tab-activate').click(function () {
                    $('.nav-tabs li').removeClass('activated'),
                        $(this).parent('li').addClass('activated');
                })

                const currentUrl = window.location.href;
                const currentSection = 'child' + (currentUrl.split('#')[1]);
                console.log(currentSection);

                if (currentSection !== 'childundefined'  && currentSection !== '') {

                    const target_tab = 'tab_link_' + currentSection.split('child')[1];
                    const target_section = 'temp_item_' + currentSection.split('child')[1];

                    $('#features_section').scrollTop();
                    $('html, body').animate({
                        scrollTop: $('#features_section').offset().top - 20
                    }, 'fast');
					
                    $('.tab-wrapper').find('#' + target_tab).addClass('active');
                    $('.tab-wrapper').find('#' + target_tab).parent().siblings().children('a').removeClass('active');
                    $('.tab-wrapper').find('#' + target_section).addClass('show active');
                    $('.tab-wrapper').find('#' + target_section).siblings().removeClass('show active');
                }

                $('.template_one_tab_wrapper .sec_edit_container').find('a').click(function (e) {
                    e.preventDefault();
                    var url = $(this).attr('href');
                    window.open(url, '_blank');
                });

                $(document).ready(function () {
                    $('.order_confirmation_model:nth-child(5)').addClass('ma_icon_active');
                    $('.sm_order_confirmation_model  .dynamic_tab_wrapper ul > li:first-of-type a.tab_link_item').addClass('active');
                  
                    $('.sf_order_confirmation_model  .dynamic_tab_wrapper ul > li:first-of-type a.tab_link_item').addClass('active');
                    $('.sf_order_confirmation_model .order_confirmation_model').removeClass('ma_icon_active');
                    $('.sf_order_confirmation_model .order_confirmation_model.restaurant').addClass('ma_icon_active');

                    if (1024 > $(window).width()) {
                        $('.dynamic_tab_wrapper ul > li:first-of-type a.tab_link_item').addClass('active');
                    }

                    $('.dynamic_tab_wrapper a.tab_link_item').click(function (e) {
                        e.preventDefault();

                        let parent_el = $(this).closest('.elementor-element').attr('data-id');

                        $('.elementor-element[data-id="' + parent_el +'"] .dynamic_tab_wrapper a.tab_link_item').removeClass('active');
                        var targetClassValue = this.getAttribute('href').split('#')[1];
                        $(this).addClass('active');

                        $('.' + targetClassValue).siblings('.elementor-widget-image-box').removeClass('ma_icon_active');
                        $('.' + targetClassValue).siblings('.order_confirmation_model').removeClass('ma_icon_active animate');
                        $('.' + targetClassValue).siblings('.elementor-widget-image-box').addClass('ma_icon_blur');
                        $('.' + targetClassValue).addClass('ma_icon_active animate');
                        $('.' + targetClassValue).removeClass('ma_icon_blur');

                        var targetId = '.elementor-element[data-id="' + parent_el +'"] .dynamic_tab_wrapper a.tab_link_item.active';
                        var targetOffset = $(targetId).offset().left;

                        if (targetOffset > 220 || targetOffset < 0) {
                            $('.elementor-element[data-id="' + parent_el +'"] .dynamic_tab_wrapper .tabs-items>ul').animate({ scrollLeft: targetOffset }, 300);
                        }
                    });
                });
            }
        );
    });

})(jQuery, window.elementorFrontend);