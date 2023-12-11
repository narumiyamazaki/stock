//basic
new Splide( '.splide' ).mount();


//画面端のスライドがはみ出して表示されるスライダー

// ①オプションを定数「options」に格納
const options2 = {
  cover: true,
  heightRatio: 0.5,
  perMove: 1,
  gap: 16,
  updateOnMove: true,
  padding: "5rem", //左右のスライドを5rem分表示させる
  type: "loop", //スライドをループさせる
  focus: "center", //アクティブなスライドを中央に表示する
  };
  
  // ②スライド要素とオプション内容を定数「splide」に格納
  const splide = new Splide(".splide2", options2);
  
  // ③定数化した内容をまとめて実行
  splide.mount();


  //サムネイルに連動してスライダーが動く
  //メインスライダー
  const mainSlider = new Splide("#main-slider",{
    cover: true,
    //heightRatio: 0.5,
    type: "loop",
    pagination: false,
    mediaQuery:"min",
    //レスポンシブが必要な場合はこちらを有効に
    /*
    breakpoints: {
    600: {
      heightRatio: 0.3,
     }
    }
    */
  });

  //サムネイル
  const thumbnails = new Splide("#thumbnail", {
    fixedWidth: 100,
    fixedHeight: 60,
    type: "loop",
    focus: "center",
    gap: 10,
    arrows: false,
    pagination: false,
    isNavigation: true,
    breakpoints: {
      600: {
        fixedWidth: 60,
        fixedHeight: 44,
      },
    },
  });

mainSlider.sync(thumbnails); //mount()よりも先に実行する
mainSlider.mount(); //メインスライダーをインスタンス化
thumbnails.mount(); //サムネイルスライダーをインスタンス化


//フェードインアニメーションで切り替わるスライダー

const options4 = {
  perMove: 1,
  gap: 16,
  cover: true,
  heightRatio: 0.5,
  updateOnMove: true,
  pagination: false,
  arrows: false,
  autoplay: true,
  //切り替わりの秒数
  interval: 2500,
  type: "fade",
  rewind: true,
};

const splide4 = new Splide(".splide4", options4);
splide4.mount();


//自動再生

const options5 = {
  mediaQuery: "min", 
  fixedWidth: "24rem",
  heightRatio: 0.3,
  gap: 16,
  type: "loop",
  arrows: false,
  drag: "free", 
  flickPower: 100,
  pagination: false,

  autoScroll: {
    speed: 0.5, 
    pauseOnHover: false,
    pauseOnFocus: true,
  },
  breakpoints: {
    1025: {
      gap: 24,
      fixedWidth: "36rem",
    },
  },
};

const splide5 = new Splide(".splide5", options5);

splide5.mount(window.splide.Extensions);


//レスポンシブによってスライダーかどうかを切り替える
//別途CSSは記述の必要あり

const options6 = {
  perMove: 1,
  gap: 16, 
  cover: true,
  heightRatio: 0.5,
  updateOnMove: true,
  padding: "5rem",
  type: "loop",
  focus: "center",
  trimSpace: false,
  mediaQuery: "min", 
  breakpoints: {
    600: {
      //600px以下の時はスライダーを破棄
      destroy: true,
    },
  },
};

const splide6 = new Splide(".splide6", options6);
splide6.mount();