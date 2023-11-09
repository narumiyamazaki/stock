const navBtn = document.querySelector(".p-nav__btn");
const navSp = document.querySelector(".p-header__nav__body--sp");
const humbergerLine = document.querySelector(".p-humberger__line");
let flg = false;

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

navBtn.addEventListener('click',() => {
    navBtn.classList.toggle('open');
    navSp.classList.toggle('open');
    humbergerLine.classList.toggle('open');
    if(flg){
        backgroundFix(false);
        navBtn.setAttribute("aria-expanded", "false");
        flg = false;
    }else{
        backgroundFix(true);
        navBtn.setAttribute("aria-expanded", "true");
        flg = true;
    }
},false);

//escキー押下でハンバーガーメニューを閉じられるように

window.addEventListener("keydown", () => { if (event.key === "Escape") {
    navBtn.classList.remove('open');
    navSp.classList.remove('open');
    humbergerLine.classList.remove('open');
  }
});


/*サブメニューのクリックイベント*/
$('.c-icon--has-sub-menu').on('click', function () {
    $(this).siblings('.p-sub-menu__items').toggleClass('open');
});
