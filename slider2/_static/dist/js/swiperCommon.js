const initSwiper = () => {
    const swiper = new Swiper('.swiper1', {
        spaceBetween: 16,
        loop: true,                         //ループ
        loopAdditionalSlides:1,             //複製するスライド枚数 0だとループが滑らかにならないので1以上がおすすめ
        speed: 8000,
        autoplay: {                         //自動再生
            delay: 0,  
        },
        
        pagination: {                       //ページネーション（ドット）
            el: '.swiper-pagination',       //ページネーションがあるとループ時いちいち止まる
            type: 'custom',
        },
        

        navigation: {                       //ナビゲーション（矢印）
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        
        watchSlidesProgress: true,
        disableOnInteraction: true,
        slidesPerView: 1,
        /*
        breakpoints: {
            600: {
            slidesPerView: 2,
            },
            1025: {
            slidesPerView: 4,
            spaceBetween: 32,
            }
        },
        */
        watchSlidesProgress: true,
        on: { // イベントを登録する
            slideChange: (swiper) => {
            console.log('Slide index changed to: ' + (swiper.realIndex + 1));
            },
        },
    })
};

//自動でループさせるとき、これがないと自動再生が止まった状態の時がある。
window.addEventListener('load', function(){
    initSwiper(); // ページ読み込み後に初期化
});

//JSで要素を追加できないか？

//デフォルトで付与されているスラッシュの除去


//ページネーションカスタマイズの要素を取得
const paginationParent = document.querySelector('.swiper-pagination');

//親要素のdivタグ作成
let newPaginationInner = document.createElement('div');

//親要素のdivタグにクラスを追加
newPaginationInner.setAttribute("class","swiper-pagination__inner");

//ページネーションカスタマイズの子要素に追加
paginationParent.insertBefore(newPaginationInner, null);

//ページネーションカスタマイズの子要素に


//現在表示しているスライドの数字を表示
//currentの画像の要素を取得
const newPaginationCurrent = document.getElementsByClassName('swiper-slide-duplicate-active');
//newPaginationCurrent.dataset.swiperSlideIndex;

console.log(newPaginationCurrent[0]);

//let newPaginationCurrent = document.createTextNode(swiper1.realIndex + 1);

//

//スライドの番号を取得して、それを表示させるみたいな事？

//console.log(swiper);

