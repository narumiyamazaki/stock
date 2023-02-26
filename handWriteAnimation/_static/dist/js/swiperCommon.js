const initSwiper = () => {
    const swiper = new Swiper('.sample-slider', {
        spaceBetween: 16,
        loop: true,                         //ループ
        loopAdditionalSlides:1,             //複製するスライド枚数 0だとループが滑らかにならないので1以上がおすすめ
        speed: 8000,
        autoplay: {                         //自動再生
            delay: 0,  
        },
        /*
        pagination: {                       //ページネーション（ドット）
            el: '.swiper-pagination',       //ページネーションがあるとループ時いちいち止まる
        },
        
        navigation: {                       //ナビゲーション（矢印）
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        */
        watchSlidesProgress: true,
        disableOnInteraction: true,
        breakpoints: {
            600: {
            slidesPerView: 2,
            },
            1025: {
            slidesPerView: 4,
            spaceBetween: 32,
            }
        },
        watchSlidesProgress: true,
        on: { // イベントを登録する
            slideChange: (swiper) => {
            console.log('Slide index changed to: ' + (swiper.realIndex + 1));
            },
        },
    })
};
const mySwiper2 = new Swiper('.swiper2',{
    spaceBetween: 16,
        loop: true,                         //ループ
        loopAdditionalSlides:1,             //複製するスライド枚数 0だとループが滑らかにならないので1以上がおすすめ
        pagination: {                       //ページネーション（ドット）
            el: '.swiper-pagination',       //ページネーションがあるとループ時いちいち止まる
        },
        
        navigation: {                       //ナビゲーション（矢印）
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        watchSlidesProgress: true,
        disableOnInteraction: true,
        breakpoints: {
            600: {
            slidesPerView: 2,
            },
            1025: {
            slidesPerView: 4,
            spaceBetween: 32,
            }
        },
}

)

window.addEventListener('load', function(){
    initSwiper(); // ページ読み込み後に初期化
});