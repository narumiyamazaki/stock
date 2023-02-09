/*ハンバーガーメニューのクリックイベント*/
$('.nav-btn').on('click', function () {
    $('.p-header--nav-body').toggleClass('is-open');
    $('.nav-btn > a').toggleClass('is-open');
    //薄い背景部分
    //$('.p-background-color').toggleClass('is-show');
    $('.sidebar_wrapper').toggleClass('is-show');
    $('.sidebar_btn').children('a').toggleClass('is-open');
});


/*ハンバーガーメニューのクリックイベント*/
$('.sidebar_btn').on('click', function () {
    $('.p-header--nav-body').toggleClass('is-open');
    $('.nav-btn > a').toggleClass('is-open');
    //薄い背景部分
    //$('.p-background-color').toggleClass('is-show');
    $('.sidebar_wrapper').toggleClass('is-show');
    $('.sidebar_btn').children('a').toggleClass('is-open');
});

/*トップに戻る*/
$(function () {
    var pagetop = $('#js-pagetop');
    pagetop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });
    pagetop.click(function () {
      $('body, html').animate({
          scrollTop: 0
      }, 500);
      return false;
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
 