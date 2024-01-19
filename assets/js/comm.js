$(document).ready(function() {
  // main: 메인 배너
  $('.slide-wrap').slick({
    dots: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    // autoplay: true,
    // autoplaySpeed: 3500,
    centerMode: true,
    variableWidth: true,
  });

  // main: 신상품
  $('.new-card-wrap').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  

// swiper test
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 5,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

});