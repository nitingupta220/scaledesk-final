//====================Floating labels=====================//

$("input[type ='text']").click(function() {
    var $this = $(this);
    $this.attr("placeholder", "");
    $this.parent().find(".float-label").addClass("label-top");

});

//Ends here//



//====================Navigation========================//
jQuery(document).ready(function($) {
    function toggleNav(bool) {
        $('.cd-nav-container, .cd-overlay').toggleClass('is-visible', bool);
        $('main').toggleClass('scale-down', bool);
        $('body').toggleClass('navigation-visible', bool);
    }

    //open navigation clicking the menu icon
    $('.menu-right').on('click', function(event) {
        event.preventDefault();
        toggleNav(true);
    });

    //close the navigation
    $('.cd-close-nav, .cd-overlay').on('click', function(event) {
        $("ul").addClass('subcategory');
        $("#mainmenu").show(700);
        $("#back").hide(700);
        event.preventDefault();
        toggleNav(false);
    });

});

$(document).ready(function() {
    $("#toggle").on('click', function() {
        $("#mainmenu").hide(700);
        $("ul").removeClass('subcategory');
        $("#back").show(700);
    })
});
$(document).ready(function() {
    $("#back").on('click', function() {
        $("ul").addClass('subcategory');
        $("#mainmenu").show(700);
        $("#back").hide(700);

    })
});


// $(document).ready(function() {
//     $('.submenu').on('click', function() {
//         $(this).hide(500);
//         $('.subcategory').show(500);
//     })
// })



// $(function(){
//     $('.n-toggle').on('click', function(){
//         $('.off-canvas').toggleClass('open');

//     });

//     if ($('.off-canvas').hasClass('open')){
//         $(document).toggleClass('open');
//     }
//     if ($('.off-canvas').hasClass('open')) {
//         $('')
//     }


// });

$(function() {
    $('.form-toggle').on('click', function() {
        $('.info-form').toggleClass("shows", 1000, "bounce");
        $('.form-toggle').hide();

    });
    $('.close-form').on('click', function() {
        $('.info-form').toggleClass("shows", 1000, "bounce");
        $('.form-toggle').show();
    })
    if ($('.info-form').hasClass('shows')) {
        $(document).click(function() {
            $('.info-form').removeClass('shows');

        });
    }
});



//Header fill color on scroll

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("header").addClass('fill');

    } else {
        $("header").removeClass('fill');
    }

});



// This block of code checks if "main-title class" has
// more than 1 span and apply display flex (for vertical center on  #hero-section id).

$('.main-title').each(function() {

    if ($('> span', this).length <= 2) {
        $('#hero-section').css({ "display": "-webkit-flex", "justify-content": "center", "align-items": "center" });
    }

});





// $(document).ready(function() {
//     $('.megaMenu').click(function() {
//         $('.bigmenu').fadeToggle(1000);
//     })
// })

//This block of code controls the slider of WHO WE ARE section.

$(document).ready(function() {
    $('#myCarousel').carousel({

        interval: 2500
    });

    var clickEvent = false;
    $('#myCarousel').on('click', '.nav a', function() {
        clickEvent = true;
        $('.nav li').removeClass('active');
        $(this).parent().addClass('active');
    }).on('slid.bs.carousel', function(e) {
        if (!clickEvent) {
            var count = $('.nav').children().length - 1;
            var current = $('.nav li.active');
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if (count == id) {
                $('.nav li').first().addClass('active');
            }
        }
        clickEvent = false;
    });
});