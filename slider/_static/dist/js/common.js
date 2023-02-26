/*slider */
$('.slick01').slick({
  autoplay: true, //「オプション名: 値」の形式で書く
  centerMode: true,
  centerPadding: '20%',
  arrows: false,
  //オートプレイ
  infinite: true,
  autoplaySpeed: 1,
  
  speed: 5000,
  cssEase: "linear",
  //slickが途中で止まるのを防ぐ
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  responsive: [
      {
        breakpoint: 400, // 399px以下のサイズに適用
        settings: {
        slidesToShow: 1,
        },
      },
    ],
});

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

//対象の指定
const myTargetOnce = document.querySelector('.fade__once');

// IntersectionObserverのオプション設定
  let myOptionsOnce = {
    root: null,
    rootMargin: '0px 0px 200px 0px',
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
      
      //監視をやめる
      myObserverOnce.unobserve(entry.target);
    }
  });
}



