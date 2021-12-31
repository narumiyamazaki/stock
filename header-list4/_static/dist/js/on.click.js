/*ハンバーガーメニューのクリックイベント*/
$('.p-nav-btn').on('click', function () {
    $('.p-header--nav-body').toggleClass('is-open');
    $('.p-nav-btn > a').toggleClass('is-open');
    //薄い背景部分
    $('.p-background-color').toggleClass('is-show');
    $('.p-sidebar-body').toggleClass('is-show');
    $('.p-sidebar-btn').children('a').toggleClass('is-open');
});

/*サブメニューのクリックイベント*/
$('.p-nav--menu').on('click', function () {
    $('.p-nav--menu--items').toggleClass('is-open');
});

/*サイドバーを閉じるボタンのクリックイベント*/
$('.p-sidebar-btn').on('click', function () {
    $(this).children('a').toggleClass('is-open');
    $('.p-background-color').toggleClass('is-show');
    $('.p-sidebar-body').toggleClass('is-show');
    $('.p-nav-btn > a').toggleClass('is-open');
});