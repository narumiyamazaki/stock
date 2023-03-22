/*ハンバーガーメニューのクリックイベント*/
$('.p-nav__btn').on('click', function () {
    $(this).toggleClass('open');
    $('.p-header__nav__body--sp').toggleClass('open');
    $('.p-nav__btn > a').toggleClass('open');
});

/*サブメニューのクリックイベント*/
$('.c-icon--has-sub-menu').on('click', function () {
    $(this).siblings('.p-sub-menu__items').toggleClass('open');
});
