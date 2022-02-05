/*ハンバーガーメニューのクリックイベント*/
$('.p-nav-btn').on('click', function () {
        $('.p-header--nav-body').toggleClass('open');
        $('.p-nav-btn > a').toggleClass('open');
});

/*サブメニューのクリックイベント*/

$(function(){
	if (window.matchMedia('(max-width: 1024px)').matches) {
		/* ウィンドウサイズ1024px以下の処理を記述 */
        $('.p-nav--service').on('click',function(){
            $('.p-sub-menu--service').toggleClass('open');
        });
    }
});

/*
$(function(){
	if (window.matchMedia('(min-width: 1025px)').matches) {

        $('.p-nav--service').hover(function(){
            $('.p-sub-menu--service').toggleClass('open');
        });
    }
});
*/