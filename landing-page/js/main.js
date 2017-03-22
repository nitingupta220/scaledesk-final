/**
 * Created by neerajsingh on 17/03/17.
 */

//$(window).scroll(function(event) {
//    var yOffset = window.pageYOffset;
//    var breakpoint = 550;
//    if (yOffset > breakpoint) {
//        $(".custom-nav").addClass('active');
//    } else {
//        $(".custom-nav").removeClass('active');
//    }
//});
//
//

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('custom-nav').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('custom-nav ');
        }
    }

    lastScrollTop = st;
}