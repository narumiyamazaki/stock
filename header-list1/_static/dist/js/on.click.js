/*ハンバーガーメニューのクリックイベント*/
$('.p-nav-btn').on('click', function () {
    $('.p-header--nav-body').toggleClass('open');
    $('.p-nav-btn > a').toggleClass('open');
});

/*サブメニューのクリックイベント*/
$('.p-nav--service').on('click', function () {
    $('.p-sub-menu--service').toggleClass('open');
});
