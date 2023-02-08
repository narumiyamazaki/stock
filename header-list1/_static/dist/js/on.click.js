/*ハンバーガーメニューのクリックイベント*/
$('.p-nav__btn').on('click', function () {
    $('.p-header__nav__body').toggleClass('open');
    $('.p-nav__btn > a').toggleClass('open');
});

/*サブメニューのクリックイベント*/
$('.p-nav__item__has-sub-item').on('click', function () {
    $(this).find('.p-sub-menu__items').toggleClass('open');
});
