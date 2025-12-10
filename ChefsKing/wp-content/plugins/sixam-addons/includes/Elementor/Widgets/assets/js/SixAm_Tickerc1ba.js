(function ($, elementor) {
	$(window).on("elementor/frontend/init", function () {
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/sixam-ticker.default",
			function ($scope) {
				$(document).ready(function () {

					var speedAttr = $scope.find(".swiper-container").attr("data-speed");
					if(speedAttr != undefined){
						var tickerSpeed = parseInt(speedAttr);
					}

					var tickerSlider = new Swiper(".swiper-container", {
						autoplay: {
							delay: 0,
							pauseOnMouseEnter: false,
							disableOnInteraction: false,
						},
						allowTouchMove: false,
						loop: true,
						speed: tickerSpeed,
						slidesPerView: "auto",
						slidesPerGroup: 1,
						direction: "horizontal",
						spaceBetween: 10,
					});

					$scope.find(".ltr-btn").click(function () {
						if (tickerSlider.params.autoplay.reverseDirection) {
							return;
						}
						tickerSlider.params.autoplay.reverseDirection = true;
						tickerSlider.slideToLoop(0);
						tickerSlider.update();
					});

					$scope.find(".rtl-btn").click(function () {
						if (!tickerSlider.params.autoplay.reverseDirection) {
							return;
						}
						tickerSlider.params.autoplay.reverseDirection = false;
						tickerSlider.slideToLoop(0);
						tickerSlider.update();
					});
				});
			}
		);
	});
})(jQuery, window.elementorFrontend);
