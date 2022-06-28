/** @format */

$('.header-btn').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('on');
  $('.header-nav').toggleClass('active');
  $('.header-nav').toggleClass('block');
  $('body').toggleClass('locked');
  $('.header-desc ul').toggleClass('blockUL');
});
