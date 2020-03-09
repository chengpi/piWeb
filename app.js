$(document).ready(function(){

    var isClick = true;
    var width = $(window).width;

    $(".navbar-toggler").click(function(){
        if(isClick) {
            $(".container").animate({height:350});
            // $(".ml-auto").show();
            $(".ml-auto").css('display','flex')
            $(".navbar-toggler").css(
                {
                    "background":"url('./img/cross.svg')",
                    "background-repeat": "no-repeat",
                    "background-position": "center"
                });
            isClick = false;
        }else {
            $(".container").animate({height:40});
            // $(".ml-auto").hide();
            $(".ml-auto").css('display','none');
            $(".navbar-toggler").css(
                {
                    "background":"url('./img/threeBars.svg')",
                    "background-repeat": "no-repeat",
                    "background-position": "center"
                });
            isClick = true;
        }
    });
    $(window).resize(function(){
        width = $(window).width();
        if(width > 800){
            // $(".container").animate('height',40);
            $('.container').css('height',40);
            // $(".ml-auto").show();
            $(".ml-auto").css('display','flex')
        }else{
            if(!isClick){
                // $(".container").animate('height',350);
                $('.container').css('height',350);
                // $(".ml-auto").show();
                $(".ml-auto").css('display','flex');
            }else {
                // $(".ml-auto").hide();
                $(".ml-auto").css('display','none');
            }
        }
    });
    // window.onscroll=function(){
    //     var sl=-Math.max(document.body.scrollLeft,document.documentElement.scrollLeft);
    //     document.getElementsByClassName('.container').style.right=sl+'px';
    //
    // };

    $(function(){
        $(window).on('scroll',function(){
            var st = $(document).scrollTop();
            if( st>0 ){
                if( $('#main-container').length != 0  ){
                    var w = $(window).width(),mw = $('#main-container').width();
                    if( (w-mw)/2 > 70 )
                        $('#go-top').css({'left':(w-mw)/2+mw+20});
                    else{
                        $('#go-top').css({'left':'auto'});
                    }
                }
                $('#go-top').fadeIn(function(){
                    $(this).removeClass('dn');
                });
            }else{
                $('#go-top').fadeOut(function(){
                    $(this).addClass('dn');
                });
            }
        });
        $('#go-top .go').on('click',function(){
            $('html,body').animate({'scrollTop':0},500);
        });

        $('#go-top .uc-2vm').hover(function(){
            $('#go-top .uc-2vm-pop').removeClass('dn');
        },function(){
            $('#go-top .uc-2vm-pop').addClass('dn');
        });
    });
});
