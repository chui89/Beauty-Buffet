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
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    draggable: false
  });

  $('.products-card_similar__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-circle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-circle-right"></i></button>',
    responsive: [
      // {
      //   breakpoint: 1200,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1
      //   }
      // },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 399,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }

    ]
  });

});
