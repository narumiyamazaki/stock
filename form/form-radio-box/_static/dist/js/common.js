//十字click時のイベント

document.querySelectorAll(".c-cross").forEach(function(element){
  element.addEventListener('click',function(){
      this.classList.toggle("is-active");
      //c-crossの親要素の次の要素
      const answerOpen = this.parentNode.nextElementSibling;
      answerOpen.classList.toggle("is-active");
  });
});