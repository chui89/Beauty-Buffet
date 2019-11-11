$(document).ready(function() {
  $('.header_bars').on('click', function() {
    $('.nav').toggleClass('nav-menu_active');
    $('.fa-window-close').toggleClass('fa-window-close-change');
    $('.fa-bars').toggleClass('fa-bars-change');
  });
});