/*
*@desc alert弹窗
*@author [maowenqiang]
*@data 2015-7-2
 */
/*var func = {
    alert2:function(text){
        var alertBox2 = $('.alertBox2');
        if(alertBox2.length > 0){
        	alertBox2.html('');
        	var temp = '';
            temp += '<div class="alertBox2_txt">'+text+'</div>';
            $('.alertBox2').append(temp);
            $('.alertBox2').fadeIn('slow',function(){
                $('.alertBox2').delay('1000').fadeOut()
            });
            return false
        }
        var temp = '';
        temp += '<div class="alertBox2"><div class="alertBox2_txt">'+text+'</div></div>';
        $('.containers').append(temp);
        $('.alertBox2').fadeIn('slow',function(){
            $('.alertBox2').delay('1000').fadeOut()
        });
    },
}*/
var func = {
    alert2:function(text){
        var alertBox2 = $('.alertBox2');
        if(alertBox2.length > 0){
            alertBox2.html('');
            var temp = '';
            temp += '<div class="alertBox2_txt">'+text+'</div>';
            $('.alertBox2').append(temp);
            $('.alertBox2').fadeIn('slow',function(){
                $('.alertBox2').delay('1000').fadeOut()
            });
            return false
        }
        var temp = '';
        temp += '<div class="alertBox2"><div class="alertBox2_txt">'+text+'</div></div>';
        $('body').append(temp);
        $('.alertBox2').fadeIn('slow',function(){
            $('.alertBox2').delay('1000').fadeOut()
        });
    },
}