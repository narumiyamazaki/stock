// slick 2週目のカクつき対応
const $slider = $(".js-slider");

$slider.on("beforeChange", (event, slick, currentSlide, nextSlide) => {
	$slider.find(".slick-slide").each((index, el) => {
		const $this = $(el),
		slickindex = $this.attr("data-slick-index");
		if (nextSlide == slick.slideCount - 1 && currentSlide == 0) {
			if (slickindex == "-1") {
				$this.addClass("is-active-next");
			} else {
				$this.removeClass("is-active-next");
			}
		} else if (nextSlide == 0) {
			if (slickindex == slick.slideCount) {
				$this.addClass("is-active-next");
			} else {
				$this.removeClass("is-active-next");
			}
		} else {
			$this.removeClass("is-active-next");
		}
	});
});

/*slider */
$('.slick01').slick({
  autoplay: true, //「オプション名: 値」の形式で書く
  centerMode: true,
  centerPadding: '20%',
  arrows: false,
  //オートプレイ
  infinite: true,
  autoplaySpeed: 1,
  
  speed: 5000,
  cssEase: "linear",
  //slickが途中で止まるのを防ぐ
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  responsive: [
      {
        breakpoint: 400, // 399px以下のサイズに適用
        settings: {
        slidesToShow: 1,
        },
      },
    ],
});

