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
  autoplay: true,
  autoplaySpeed: 1500,
  infinite: true, 
  fade: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        fade: true
      }
    }
  ]
});