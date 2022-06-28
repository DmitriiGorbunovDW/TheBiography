$(document).ready(function() {
    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('.header-nav').addClass('whiteBG');
            $('.header-nav').removeClass('container');
        } else {
            $('.header-nav').removeClass('whiteBG');
            $('.header-nav').addClass('container');
        }
    })
});