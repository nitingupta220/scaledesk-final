
//Floating labels//

$("input[type ='text']").click(function(){
    var $this = $(this);
    $this.attr("placeholder", "");
    $this.parent().find(".float-label").addClass("label-top");

});

//Ends here//


//Navigation//

$(function(){
    $('.n-toggle').on('click', function(){
        $('.off-canvas').toggleClass('open');
    });

    if ($('.off-canvas').hasClass('open')){
        $(document).toggleClass('open');


    }


});


//$(document).click(function(){
//    if ($('off-canvas').hasClass('open')){
//        $('off-canvas').removeClass('open');
//
//
//    }
//});


//$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if (scroll >= 500){
            $("header").addClass('.fill');

        }else {
            $("header").removeClass('.fill');
        }

    });











//});
