new Splide( '.splide' ).mount();

//中央と両端に

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