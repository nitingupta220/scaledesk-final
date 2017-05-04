
//====================Floating labels=====================//

$("input[type ='text']").click(function(){
    var $this = $(this);
    $this.attr("placeholder", "");
    $this.parent().find(".float-label").addClass("label-top");

});

//Ends here//



//====================Navigation========================//

$(function(){
    $('.n-toggle').on('click', function(){
        $('.off-canvas').toggleClass('open');
    });

    if ($('.off-canvas').hasClass('open')){
        $(document).toggleClass('open');


    }


});

$(function(){
    $('.form-toggle').on('click', function(){
        $('.info-form').toggleClass("shows" ,1000 ,"bounce");

    });

    if($('.info-form').hasClass('shows')){
        $(document).click(function(){
            $('.info-form').removeClass('shows');

        });
    }
});



//Header fill color on scroll

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if (scroll >= 500){
            $("header").addClass('fill');

        }else {
            $("header").removeClass('fill');
        }

    });



// This block of code checks if "main-title class" has
// more than 1 span and apply display flex (for vertical center on  #hero-section id).

        $('.main-title').each(function(){

            if ($('> span' ,this ).length <= 2 ){
                $('#hero-section').css({"display": "-webkit-flex" , "justify-content": "center" , "align-items": "center"});
            }

        });


















//});
