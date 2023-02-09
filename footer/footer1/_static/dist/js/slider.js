 /*slider */
$('.slick01').slick({
  autoplay: true, //「オプション名: 値」の形式で書く
  centerMode: true,
  centerPadding: '20%',
  arrows: false,
  //オートプレイ
  infinite: true,
  autoplaySpeed: 0,
  speed: 9000,
  cssEase: "linear",
  responsive: [
      {
        breakpoint: 400, // 399px以下のサイズに適用
        settings: {
        slidesToShow: 1,
        },
      },
    ],
});