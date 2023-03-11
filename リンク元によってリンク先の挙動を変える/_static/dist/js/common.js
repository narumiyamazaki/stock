const linkToSource = document.querySelectorAll('.p-link');


linkToSource.forEach(function(linkToSource){
  linkToSource.addEventListener('click', function(e){
    //linkの何番目かでクエリに渡す値を変える
    if( this.dataset.linkNumber == 1 ){
      location.href="./to_link.html?name=" +  encodeURIComponent(1);
    } else if(this.dataset.linkNumber == 2) {
      location.href="./to_link.html?name=" +  encodeURIComponent(2);
    } else if(this.dataset.linkNumber == 3) {
      location.href="./to_link.html?name=" +  encodeURIComponent(3);
    } else if(this.dataset.linkNumber == 4) {
      location.href="./to_link.html?name=" +  encodeURIComponent(4);
    } else if(this.dataset.linkNumber == 5) {
      location.href="./to_link.html?name=" +  encodeURIComponent(5);
    }
  })
});

const linkTarget = document.querySelectorAll('.link-target');

//console.log(linkToSource);




//クリックされたときのターゲットを調べ、それにより条件分岐

var query = location.search;
var value = query.split('=');

  if(decodeURIComponent(value[1]) == 1){
    linkTarget[0].classList.add('is-active');
  } else if(decodeURIComponent(value[1]) == 2) {
    linkTarget[1].classList.add('is-active');
  } else if(decodeURIComponent(value[1]) == 3) {
    linkTarget[2].classList.add('is-active');
  } else if(decodeURIComponent(value[1]) == 4) {
    linkTarget[3].classList.add('is-active');
  } else if(decodeURIComponent(value[1]) == 5) {
    linkTarget[4].classList.add('is-active');
  }


console.log(decodeURIComponent(value[1]));
