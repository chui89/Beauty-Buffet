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

  $('.products-card_img__main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.products-card_img__primary',
    draggable: false
  });
  $('.products-card_img__primary').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.products-card_img__main',
    // dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    draggable: false
  });

  $('.products-similar_img').slick({
    slidesToShow: 4,
    arrows: false,
    dots: true
  });

});
