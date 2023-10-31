const navBtn = document.querySelector(".p-nav__btn");
const navSp = document.querySelector(".p-header__nav__body--sp");
const humbergerLine = document.querySelector(".p-humberger__line")

navBtn.addEventListener('click',() => {
    navBtn.classList.toggle('open');
    navSp.classList.toggle('open');
    humbergerLine.classList.toggle('open');
},false);

//escキー押下でハンバーガーメニューを閉じられるように

window.addEventListener("keydown", () => { if (event.key === "Escape") {
    navBtn.classList.remove('open');
    navSp.classList.remove('open');
  }
});

/*サブメニューのクリックイベント*/
$('.c-icon--has-sub-menu').on('click', function () {
    $(this).siblings('.p-sub-menu__items').toggleClass('open');
});
