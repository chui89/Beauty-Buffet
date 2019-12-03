$(document).ready(function() {
  $('.header_bars').on('click', function() {
    $('.nav').toggleClass('nav_active');
    $('.fa-window-close').toggleClass('fa-window-close-change');
    $('.popup').fadeToggle();
    $('.fa-bars').toggleClass('fa-bars-change');
    $('body').toggleClass('fixed');
  });

  $('.popup').on('click', function() {
    $('.nav').toggleClass('nav_active');
    $('.fa-window-close').toggleClass('fa-window-close-change');
    $('.popup').fadeToggle();
    $('.fa-bars').toggleClass('fa-bars-change');
    $('body').toggleClass('fixed');
  });

  $('.stocks-slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    dotsClass: 'stocks-slider-dots'
  });
});
