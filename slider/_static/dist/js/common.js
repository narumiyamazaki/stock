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