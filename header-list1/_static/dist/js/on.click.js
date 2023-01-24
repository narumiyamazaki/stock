/*ハンバーガーメニューのクリックイベント*/
$('.p-nav-btn').on('click', function () {
    $('.p-header__nav-body').toggleClass('open');
    $('.p-nav-btn > a').toggleClass('open');
});

/*サブメニューのクリックイベント*/
$('.p-nav__service').on('click', function () {
    $('.p-sub-menu__service').toggleClass('open');
});
