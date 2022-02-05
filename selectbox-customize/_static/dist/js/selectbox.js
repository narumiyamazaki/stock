/*select2基本的な使い方*/
$(document).ready(function(){
    $('.p-selectbox2').select2();
});

//オプションを使う場合
$(document).ready(function(){
    $('.p-selectbox3').select2({
    width: '100px',
    height: '30px',
    placeholder: 'セレクトボックスを開いてください。',
    allowClear: true,
    // Select2メッセージに使用する言語を指定します。
    language: 'ja',
    tags: true,
    multiple: true
        /*
        width:'150px',
        placeholder:'プレイスホルダー',
        allowClear: true,
        // Select2メッセージに使用する言語を指定します。
        language: 'ja',
        tags: true
        allowClear:true,
        tags:true,
        language:'ja'
        */
    });
})

/*オプションを使う場合*/


/**
 * セレクトボックスの中身.
 * @type {Object}
 */
 var sentakushi = {
    monkey : 'さる',
    rabbit : 'うさぎ',
    possum : 'ふくろねずみ',
    ponsuke : 'ぽんすけ'
};

/**
 * DOM要素が読み込まれてからSelect2でセレクトボックスを作るため$(document).ready()で実行する.
 */
$(document).ready(function() {
    // セレクトボックスの中身を設定する.
    let options = $.map(sentakushi, function(text, value) {
        let option = $('<option>', {value: value, text: text});
        return option;
    });
    $('.p-selectbox1').append(options);
    // Select2でセレクトボックスをつくる.
    $('.p-selectbox1').select2();
});

/*select2基本的な使い方*/
$(document).ready(function(){
    $('.p-selectbox4').select2();
});

$(document).ready(function(){
    $('.p-selectbox4-1').select2({
        minimumResultsForSearch: Infinity
    });
});

$(document).ready(function(){
    $('.p-selectbox4-2').select2({
        minimumResultsForSearch: Infinity,
        multiple: true,
        width:'100px',
        background:'red',
    });   
});

//clearField
$('.p-selectbox4-2').val("val").trigger('change');