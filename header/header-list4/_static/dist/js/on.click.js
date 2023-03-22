/*ハンバーガーメニューのクリックイベント*/
$('.p-nav__btn').on('click', function () {
    //$('.p-header__nav-body').toggleClass('is-open');
    $('.p-nav__btn > a').toggleClass('is-open');
    //薄い背景部分
    $('.p-background-color').toggleClass('is-show');
    $('.p-sidebar__body').toggleClass('is-show');
    $('.p-sidebar__btn').children('a').toggleClass('is-open');
});

/*サブメニューのクリックイベント*/
$('.c-item__link--nav').on('click', function () {
    $('.p-sub-menu__items').toggleClass('is-open');
});

/*サイドバーのサブメニュークリックイベント*/
$('.c-item__link--sidebar').on('click', function () {
    $('.p-sub-menu__items').toggleClass('is-open');
});

/*サイドバーを閉じるボタンのクリックイベント*/
$('.p-sidebar__btn').on('click', function () {
    $(this).children('a').toggleClass('is-open');
    $('.p-background-color').toggleClass('is-show');
    $('.p-sidebar__body').toggleClass('is-show');
    $('.p-nav__btn > a').toggleClass('is-open');
});