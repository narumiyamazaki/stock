//crossを押したときに、Aを表示させる
const target = document.querySelectorAll(".c-cross");
const sectionAnswer = document.querySelector(".p-fqa__answer");

//とりあえず親要素を取得する。
const parent = target.parentNode;
console.log(parent);

//parentの親要素を取得する

//const nextSibling = parent.nextElementSibling;

//console.log(nextSibling);

document.querySelectorAll(".c-cross").forEach(function(element){
  element.addEventListener('click',function(){
      this.classList.toggle("is-active");
      //nextSibling.classList.toggle("is-active");
  });
});

//親要素までさかのぼって、そこから兄弟要素に行く方法は？



/*
参考コード
document.querySelectorAll('.cards').forEach(function(cards){

  cards.addEventListener('click',function(){
      console.log(cards);

  });
});
*/

/*
target.addEventListener("click", () => {
    target.forEach((element) => {
      element.classList.toggle("is-active");
  });
})
*/