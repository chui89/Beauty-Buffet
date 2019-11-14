$(document).ready(function() {
  $('.header_bars').on('click', function() {
    $('.nav').toggleClass('nav_active');
    $('.fa-window-close').toggleClass('fa-window-close-change');
    $('.popup').toggle();
    $('.fa-bars').toggleClass('fa-bars-change');
  });

  $('.popup').on('click', function() {
    $('.nav').toggleClass('nav_active');
    $('.fa-window-close').toggleClass('fa-window-close-change');
    $('.popup').toggle();
    $('.fa-bars').toggleClass('fa-bars-change');
  });

  $('.slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    dotsClass: 'slider-dots'
  });
});