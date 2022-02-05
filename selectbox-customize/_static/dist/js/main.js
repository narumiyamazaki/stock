//ボタンクリックで出現
$('.p-button--product-name').on('click',function(){
    $('.p-selectbox4--wrapper').toggleClass('is-show');
});

//高さを取得し、一定の高さになったらスクロールバーを出す。
var height1 = $('.p-box--height1').height();
var height2 = $('.select2-selection.select2-selection--multiple').height();

//高さを取得できているかのテスト
$('.select2').on('click',function(){
    alert(height2);
});

$('.p-box--height1').on('click',function(){
    alert(height1);    
});


//条件式
if(height2 > 30){
    $('.p-selectbox4-2 + .select2').toggleClass('is-scroll');
}