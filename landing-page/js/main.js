/**
 * Created by neerajsingh on 17/03/17.
 */

$(window).scroll(function(event) {
    var yOffset = window.pageYOffset;
    var breakpoint = 550;
    if (yOffset > breakpoint) {
        $(".custom-nav").addClass('active');
    } else {
        $(".custom-nav").removeClass('active');
    }
});
