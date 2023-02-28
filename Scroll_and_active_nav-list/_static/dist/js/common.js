const myTarget = document.querySelectorAll('.is-target'); // ...手順(2)の部分

//配列として変数に入れれないか？
const navTakenoko = document.querySelector('.p-nav__item__link--takenoko');

// IntersectionObserverのオプション設定　...手順(3)の部分
let myOptions = {
  root: null,
  rootMargin: '0px 0px',
  threshold: '0'
};
  
  // myObserverにIntersectionObserverのインスタンスを代入
  const myObserver = new IntersectionObserver(myIntersect, myOptions);
  // observe(対象); として対象を監視
  myObserver.observe(myTarget);

// 条件を満たした実行される関数
function myIntersect(entries, myObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navTakenoko.classList.add('is-active');
    } else {
      navTakenoko.classList.remove('is-active');
    }
  });
}