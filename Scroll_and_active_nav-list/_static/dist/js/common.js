const myTarget = document.querySelectorAll('.is-target'); // ...手順(2)の部分

//配列として変数に入れれないか？
const navTakenoko = document.querySelector('.p-nav__item__link--takenoko');
const navAsari = document.querySelector('.p-nav__item__link--asari');
const navNanohana = document.querySelector('.p-nav__item__link--nanohana');
const navSansai = document.querySelector('.p-nav__item__link--sansai');
const navSakuranbo = document.querySelector('.p-nav__item__link--sakuranbo');

// IntersectionObserverのオプション設定　...手順(3)の部分
let myOptions = {
  root: null,
  rootMargin: '0px 0px',
  threshold: '0'
};
  
  // myObserverにIntersectionObserverのインスタンスを代入
  const myObserver = new IntersectionObserver(myIntersect, myOptions);
  
  //for分を使って複数対象を監視する

    // 複数の対象要素を監視
    for (let n = 0; n < myTarget.length; n++) {
      myObserver.observe(myTarget[n]);
    }

/* 条件を満たした実行される関数
function myIntersect(entries, myObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navTakenoko.classList.add('is-active');
    } else {
      navTakenoko.classList.remove('is-active');
    }
  });
}
*/

function myIntersect(entries) {
    if(entries[0].isIntersecting) {
      navTakenoko.classList.toggle("is-active");
    }
}
  
  