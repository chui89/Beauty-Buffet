$(document).ready(function() {
  $('.header_bars').on('click', function() {
    $('.nav').toggleClass('nav_active');
    $('.fa-window-close').toggleClass('fa-window-close-change');
    $('.popup').fadeToggle();
    $('.fa-bars').toggleClass('fa-bars-change');
  });

  $('.popup').on('click', function() {
    $('.nav').toggleClass('nav_active');
    $('.fa-window-close').toggleClass('fa-window-close-change');
    $('.popup').fadeToggle();
    $('.fa-bars').toggleClass('fa-bars-change');
  });

  $('.stocks-slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    dotsClass: 'stocks-slider-dots'
  });

  $('.news-slider, .pop-slider, .sale-slider').slick({
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  $(window).on('click', function(e) {
    target = e.target;
    console.log(target);
  });
});