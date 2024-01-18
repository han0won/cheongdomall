$(document).ready(function() {
  // main: 메인 배너
  $('.main-slide').slick({
    dots: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3500,
  });

  // main: 신상품
  $('.new-card-wrap').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

});
