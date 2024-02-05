/*変数宣言*/

//nav
const navBtnSp = document.querySelector("#js-navBtnSP");
const navBtnPc = document.querySelector("#js-navBtnPC");
const navSp = document.querySelector(".p-nav__wrapper--sp");
const navItemsSp = document.querySelector("#js-navitemsSP");
const navItemsPc = document.querySelector("#js-navitemsPC");
const navPc = document.querySelector(".p-nav__wrapper--pc");
let flg = false;

//loading
const firstMV = document.querySelector('.p-mv__first__wrapper');
const secondMV = document.querySelector('.p-mv__second');


/*変数宣言*/ 
  //Loading
  window.onload = () => {
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        firstMV.classList.add('is-loaded');
        secondMV.classList.add('is-loaded');
        document.body.style.overflow = 'hidden auto';
      }, 2000);
    
    //firstMVの要素を消す
    setTimeout(() => {
      firstMV.style.display = 'none';
    }, 6000);

    setTimeout(() => {
      secondMV.style.transition = '0s';
    }, 5000);
  }

  //spメニューを開いた時画面をスクロールさせない
  const backgroundFix = (bool) => {
    const scrollingElement = () => {
      const browser = window.navigator.userAgent.toLowerCase();
      if ("scrollingElement" in document) return document.scrollingElement;
      return document.documentElement;
    };
  
  let scrollY;
  
  if (bool) {
    scrollY = scrollingElement().scrollTop;
  } else {
    const bodyStyleTop = parseInt(document.body.style.top || "0");
    if (isNaN(bodyStyleTop)) {
      scrollY = 0;
    } else {
      scrollY = bodyStyleTop;
    }
  }
  
    const fixedStyles = {
      height: "100vh",
      position: "fixed",
      top: `${scrollY * -1}px`,
      left: "0",
      width: "100vw"
    };
  
    Object.keys(fixedStyles).forEach((key) => {
    if (bool) {
      document.body.style[key] = fixedStyles[key];
    } else {
      document.body.style[key] = "";
    }
  });
  
    if (!bool) {
      window.scrollTo(0, scrollY * -1);
    }
  };

  //SPメニューのクリックイベント
  navBtnSp.addEventListener('click',() => {
    navBtnSp.classList.toggle('is-open');
    navSp.classList.toggle('is-open');
    navItemsSp.classList.toggle('is-open');
    if(flg){
        backgroundFix(false);
        navBtnSp.setAttribute("aria-expanded", "false");
        flg = false;
    }else{
        backgroundFix(true);
        navBtnSp.setAttribute("aria-expanded", "true");
        flg = true;
    }
},false);

  //PCメニューのクリックイベント
  navBtnPc.addEventListener('click',() => {
    navBtnPc.classList.toggle('is-open');
    navPc.classList.toggle('is-open');
    navItemsPc.classList.toggle('is-open');
    if(flg){
        navBtnSp.setAttribute("aria-expanded", "false");
        flg = false;
    }else{
        navBtnSp.setAttribute("aria-expanded", "true");
        flg = true;
    }
},false);

//escキー押下でハンバーガーメニューを閉じられるように

window.addEventListener("keydown", () => { if (event.key === "Escape") {
    navPc.classList.remove('is-open');
    navSp.classList.remove('is-open');
  }
});