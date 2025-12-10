; (function ($) {

	var queryString = window.location.search;
	if (
		sixAmAddons.multiPageParams &&
		typeof sixAmAddons.multiPageParams != 'undefined'
	){
		var whatsappParams = JSON.parse(sixAmAddons.multiPageParams);
		if(whatsappParams && Array.isArray(whatsappParams)){		
			whatsappParams.forEach(function (whatsappParam, index) {
				if (whatsappParam.param == queryString.replace("?", "")) {
					localStorage.setItem("sf_whatsapp_param", whatsappParam.param);
				}
			});
		}
	}

	
    $(document).ready(function () {      
		
// 		if(localStorage.getItem("saIndUser") == "true"){
// 			hideBookMeetingSection();
// 		}else{
// 			checkIfUserIsFromIndia();
// 		}

		
		// 		Start Calendly Popup
		loadCalendlyPopupCard();

		function loadCalendlyPopupCard() {
			const popupCard = $("footer .elementor-element.calendly-popup-card");
			handlePopupExpansion(popupCard);
			handleHidePopup(popupCard);
		}

		function handlePopupExpansion(popupCard) {
			popupCard.find(".small-img").click(function (event) {
				event.preventDefault();
				popupCard.addClass("expanded");
			});
		}

		function handleHidePopup(popupCard) {
			popupCard.find(".close").click(function (event) {
				event.preventDefault();

				if (popupCard.hasClass("expanded")) {
					popupCard.removeClass("expanded");
				} else {
					popupCard.fadeOut({ duration: "slow" });
				}
			});
		}
		// 		End Calendly Popup

		function checkIfUserIsFromIndia(){
			axios.get("https://ipinfo.io/json").then(function (response) {
				const data = response.data;
				if (data.country === "IN") {
					hideBookMeetingSection();
					localStorage.setItem("saIndUser", true);
				} 
			});
		}

		function hideBookMeetingSection(){
			$(".book_meeting_section").html('');
			$(".book_meeting_section").hide();
		}	
		
		// Doc popup
		var docModalDisabled = localStorage.getItem("saDocPopupDisabled");
		var popupShown = false;
		var disablePopupChecked = false;

		if (!docModalDisabled) {
			$(window).on("scroll", function () {
				let scrollPosition = $(window).scrollTop();
				
				if (scrollPosition >= 220 && !popupShown) {
					openDocPopup();
				}
			});
		}

		$("#sa_betterdocs_single_popup .checkbox > #not_again").on(
			"change",
			function () {
				if ($(this).is(":checked")) {
					disablePopupChecked = true;
				} else {
					disablePopupChecked = false;
				}
			}
		);

		$("#sa_betterdocs_single_popup #close_popup").on("click", function () {
			closeDocPopup();
		});

		$("#sa_betterdocs_single_popup #disable_popup").on("click", function () {
			
			if (disablePopupChecked) {
				localStorage.setItem("saDocPopupDisabled", true);
			}
			
			closeDocPopup();
		});

		function openDocPopup() {
			if ($("#sa_betterdocs_single_popup").is(":hidden")) {
				$("#sa_betterdocs_single_popup").fadeIn().animate({ right: "24" }, 500);
				popupShown = true;
			}
		}

		function closeDocPopup() {
			$("#sa_betterdocs_single_popup").fadeOut();
		}
		// End Doc popup
		
		$('#customer_app_demo .sixam-icon-box-btn > a, #customer_app_demo a.elementor-button').click(function(event){
			event.preventDefault();
			$("#customer_app_form").fadeIn();
		})

		$('#restaurant_app_demo .sixam-icon-box-btn > a, #restaurant_app_demo a.elementor-button').click(function(event){
			event.preventDefault();
			$("#restaurant_app_form").fadeIn();
		})

		$('#deliveryman_app_demo .sixam-icon-box-btn > a, #deliveryman_app_demo a.elementor-button').click(function(event){
			event.preventDefault();
			$("#deliveryman_app_form").fadeIn();
		})

		$('.close_form').click(function(event){
			event.preventDefault();
			$(".demo_form").fadeOut();
		})

		$('.close_form').focusout(function(){
			$(".demo_form").fadeOut();
		})
		
		if($('body').hasClass('search') ){
			return;
		}	
		
		$('.close_popup').click(function(event){
			event.preventDefault();
			$(".popup_box").fadeOut();
		})
		
		$(".close_pricing_popup").click(function (event) {
			event.preventDefault();
			$(".pricing_popup_modal").fadeOut();
		});
		
		$('#installation_packages .contact_now').click(function(event){
			event.preventDefault();
			$("#contact_now").fadeIn();
		})
        
        var current_url = window.location.href;
        var query_param = current_url.split('?')[1];
                
        // Wrapper Link
        $('div[sa-element-wrapper-link]').click(function () {
            var encoded_link = $(this).attr('sa-element-wrapper-link');
            var link_attr = JSON.parse(encoded_link);
            var link_url = link_attr.url;
            var link_target = link_attr.is_external == 'on' ? '_blank' : '_self';
            window.open(link_url, link_target);
        });
		
		$('.close_bundle_popup').click(function (event) {
            event.preventDefault();
            $('.bundle_popup_modal').fadeOut();
        })

        let hasShown = false;
        const maxShowCount = 2;
        const hideDurationDays = 0.9;

        function canShowSection() {
            const showData = JSON.parse(localStorage.getItem('saShowBnr')) || { showCount: 0, lastShown: null };
            const now = new Date();
            const lastShownDate = new Date(showData.lastShown);
            let dateDiff = (now - lastShownDate) / (1000 * 60 * 60 * 24);

            if (hasShown) {
                return false;
            }

            if (showData.showCount < maxShowCount) {
                return true;
            } else if (dateDiff >= hideDurationDays) {
                localStorage.setItem('saShowBnr', JSON.stringify({ showCount: 0, lastShown: null }));
                return true;
            }
            return false;
        }

        function showSection(elementClass) {
            if (!canShowSection() || !$(elementClass).length) {
				return;
			}

            $(elementClass).show();
            const showData = JSON.parse(localStorage.getItem('saShowBnr')) || { showCount: 0, lastShown: null };
            showData.showCount += 1;
            showData.lastShown = new Date();
            localStorage.setItem('saShowBnr', JSON.stringify(showData));
            hasShown = true;
        }

        if ($(window).width() < 1025) {

            $(window).on('scroll', function () {
                let scrollPosition = $(window).scrollTop();
                let windowHeight = $(window).height();
                let documentHeight = $(document).height();
                let scrollPercentage = (scrollPosition + windowHeight) / documentHeight * 100;

                if (scrollPercentage >= 50) {
					if (
						$(".bundle_popup_modal").length &&
						$(".bundle_popup_modal").is(":hidden")
					)
						showSection(".bundle_popup_modal");
				}
            });
        } else {
            $(document).mouseleave(function (event) {
                if (event.clientY <= 0) {
                    if ($(".bundle_popup_modal").length)
						showSection(".bundle_popup_modal");
					if ($(".pricing_popup_modal").length)
						showSection(".pricing_popup_modal");
                }
            });
        }
		
		// Cyber Popup Banner Functionality
		var isClosedAlready = false;
		const modalElement = $("body").find(".cyber_bundle_popup_modal");

		initiateCyberPopupBanner();
		initCloseCyberBanner();

		function initiateCyberPopupBanner() {
			if (modalElement.length === 0) return;

			$(document).mouseleave(function (event) {
				if (event.clientY <= 0) {
					showCyberBanner();
				}
			});

			$(document).on("visibilitychange", function () {
				if (document.visibilityState === "hidden") {
					showCyberBanner();
				}
			});

			let lastTouchY = 0;
			$(document).on("touchstart", function (e) {
				lastTouchY = e.touches[0].clientY;
			});

			$(document).on("touchmove", function (e) {
				const currentTouchY = e.touches[0].clientY;

				if (currentTouchY - lastTouchY > 0) {
					showCyberBanner();
				}
			});

			$(window).on("scroll", function () {
				let scrollPosition = $(window).scrollTop();
				let windowHeight = $(window).height();
				let documentHeight = $(document).height();
				let scrollPercentage =
					((scrollPosition + windowHeight) / documentHeight) * 100;

				if (scrollPercentage >= 50 && modalElement.is(":hidden")) {
					showCyberBanner();
				}
			});
		}

		function showCyberBanner() {
			if (isClosedAlready) return;
			modalElement.fadeIn();
		}

		function initCloseCyberBanner() {
			$(".close_cyber_popup").click(function (event) {
				console.log("clicked!!!");
				event.preventDefault();
				modalElement.fadeOut();
				isClosedAlready = true;
			});

			jQuery(document).on("keydown", function (e) {
				if (e.key === "Escape") {
					modalElement.fadeOut();
					isClosedAlready = true;
				}
			});
		}
		
		$("span#current_year").text(new Date().getFullYear());

        // lead generation form
        const cf7 = $(".wpcf7 form");
        const modal = $(".lgf-pop-up-container");
        const popup_btn = $(".lgf-subs-button");
        const popup_btn_container = $(".lgf-subs-btn-container");
        const popup_overlay = $(".lgf-popup-overlay");
        const close_btn = modal.find(".lgf-pop-up-close");
       
		cf7.each(function(){
			var terms = $(this).find("input[type='checkbox']");
        	var formSubmit = $(this).find("input[type='submit']");
			formSubmit.prop("disabled", true);
			
			terms.on("change", function termExec() {
				if ($(this).is(":checked")) {
					formSubmit.prop("disabled", false);
				} else {
					formSubmit.prop("disabled", true);
				}
			});
		})
		
        close_btn.on("click", function(event){
			event.preventDefault();
			closeModal();
		});
		
        popup_btn.on("click", function(event){
			event.preventDefault();
			openModal();
		});
        showToastrOnFormSubmit();

        function showToastrOnFormSubmit() {
            $(document).on("wpcf7submit", function (event) {
                var status = event.detail.status;
                var message = event.detail.apiResponse.message;

                if (status === "mail_sent") {
                    toastr.success(message);
                    closeModal();
                } else if (status === "validation_failed") {
                    toastr.warning(message);
                } else {
                    toastr.error(message);
                }
            });
        }

        $(document).on("keydown", function execCloseModal(e) {
            if (e.key == "Escape" || e.keyCode === 27) {
                closeModal();
            }
        });

        function closeModal() {
            modal.fadeOut();
            popup_btn_container.fadeIn();
            popup_overlay.removeClass("active");
        }

        function openModal() {
			loadRecaptcha();
            popup_btn_container.fadeOut();
            modal.fadeIn();
            popup_overlay.addClass("active");
        }
		
		// Manually Load reCapthca
		let recaptchaLoaded = false;

		function loadRecaptcha() {
			if (recaptchaLoaded) return;
			const siteKey = "6LfB9mwrAAAAAHEZ4ATSshbfIVh4nltr0-ZG8aGC";

			if (typeof grecaptcha === "undefined") {
				const script = document.createElement("script");
				script.src =
					"https://www.google.com/recaptcha/api.js?render=" + siteKey;
				script.async = true;
				script.defer = true;
				script.onload = function () {
					grecaptcha.ready(function () {
						grecaptcha
							.execute(siteKey, { action: "homepage" })
							.then(function (token) {
								var recaptchaFieldEl = $(
									".wpcf7 form fieldset > input[name=_wpcf7_recaptcha_response]"
								);
								
								if(recaptchaFieldEl.length){
									recaptchaFieldEl.val(token);
								}
							});
					});
				};
				document.body.appendChild(script);
				recaptchaLoaded = true;
			}
		}
		// End loading reCaptcha
    });
    
})(jQuery);



