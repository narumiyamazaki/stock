const myTarget = document.querySelectorAll('[data-nav-number]');

const myNavTarget = document.querySelectorAll('.is-nav-target');

// IntersectionObserverのオプション設定　...手順(3)の部分
let myOptions = {
  root: null,
  rootMargin: '0px 0px',
  threshold: '.6'
};
  
// myObserverにIntersectionObserverのインスタンスを代入
const myObserver = new IntersectionObserver(myIntersect, myOptions);

  // 複数の対象要素を監視
  for (let n = 0; n < myTarget.length; n++) {
    myObserver.observe(myTarget[n]);
  }

  //完成コード
  function myIntersect(entries, myObserver) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //下から戻ってきたときにたけのこに付与されているis-activeを削除する
        //if (entry.target.getAttribute('data-nav-number') == 0) {
          //myTarget[0].classList.remove('is-current');
        
          //Concept
        if (entry.target.getAttribute('data-nav-number') === 1) {
          myTarget[0].classList.add('is-current');
                   
          //下から戻るとき
          myTarget[1].classList.remove('is-current');
        
        } else if(entry.target.getAttribute('data-nav-number') === 2) {
          
          //price
          //上のis-activeを削除
          myTarget[0].classList.remove('is-current');
          
          myTarget[1].classList.add('is-current');
  
          //下から戻るとき
          myTarget[2].classList.remove('is-current');
          
        //3 Early Release Specials
        } else if(entry.target.getAttribute('data-nav-number') == 3) {
          //上のis-activeを削除する
          myNavTarget[1].classList.remove('is-current');
        
          myNavTarget[2].classList.add('is-current');
          
          //下から戻るとき
          myNavTarget[3].classList.remove('is-current');
          }  
        }          
      })   
    }