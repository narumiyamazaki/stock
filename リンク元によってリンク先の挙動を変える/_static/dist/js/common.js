const linkToSource = document.querySelectorAll('.p-link').forEach{
  
}


const linkTarget = document.querySelectorAll('.p-link-item__text');

console.log(linkToSource);

//クリックされたときのターゲットを調べ、それにより条件分岐

linkToSource.addEventListener('click',function(event){
  console.log('hoge');
});

/*
//addEventListenerのコールバック関数
function serchLink(){
  if( this === linkToSource[0]){
    linkTarget.classList.add('is-active');
  }
}
*/