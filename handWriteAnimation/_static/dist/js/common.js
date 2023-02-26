//SVGアニメーションの描画
var stroke;
stroke = new Vivus('mask', {//アニメーションをするIDの指定
    start:'manual',//自動再生をせずスタートをマニュアルに
    type: 'scenario-sync',// アニメーションのタイプを設定
    duration: 50,//アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false,//パスが更新された場合に再レンダリングさせない
    animTimingFunction:Vivus.EASE,//動きの加速減速設定
  }
);

var stroke2;
stroke2 = new Vivus('mask2', {//アニメーションをするIDの指定
    start:'manual',//自動再生をせずスタートをマニュアルに
    type: 'scenario-sync',// アニメーションのタイプを設定
    duration: 50,//アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false,//パスが更新された場合に再レンダリングさせない
    animTimingFunction:Vivus.EASE,//動きの加速減速設定
  }
);

$(window).on('load',function(){
    $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェイドアウト
	$("#splash_logo").delay(1500).fadeOut('slow');//ロゴを1.5秒（1500ms）待機してからフェイドアウト
        stroke.play();//SVGアニメーションの実行
});

/*
//対象の指定
const myTarget = document.querySelector('.fade'); 

// IntersectionObserverのオプション設定
let myOptions = {
  root: null,
  rootMargin: '0px',
  threshold: '0',
};

// IntersectionObserverの作成
  const myObserver = new IntersectionObserver(myIntersect, myOptions);
  
// observe(対象); として対象を監視
myObserver.observe(myTarget);

// 条件を満たした実行される関数
function myIntersect(entries, myObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      myTarget.classList.remove('fade');
      myTarget.classList.add('is-animation');
    } else {
      myTarget.classList.remove('is-animation');
      myTarget.classList.add('fade');
    }
  });
}
*/

//対象の指定
const myTargetOnce = document.querySelector('.fade__once');

// IntersectionObserverのオプション設定
  let myOptionsOnce = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: '0'
  };
  
// IntersectionObserverの作成
const  myObserverOnce = new IntersectionObserver(myIntersectOnce, myOptionsOnce);
  
// observe(対象); として対象を監視
myObserverOnce.observe(myTargetOnce);

// 条件を満たした実行される関数
function myIntersectOnce(entries, myObserverOnce) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      myTargetOnce.classList.remove('fade__once');
      myTargetOnce.classList.add('is-animation__once');
      //stroke2.play();//SVGアニメーションの実行
      //監視をやめる
      myObserverOnce.unobserve(entry.target);
    }
  });
}


