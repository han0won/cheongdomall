$(document).ready(function(){
  $('.sub1-slide-inner').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    vertical: true,
    infinite: true, 
  });
});

$('.info-various-wrap').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});