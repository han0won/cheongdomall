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
  var swiper = new Swiper(".best-slide", {
    loop: true,
    slidesPerView: 5,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// best item tabs
const tabs = ('#best-tabs')

tabs.find('.sec-best').removeClass('active')
tabs.find('.sec-best:first-child').addClass('active')

tabs.find('.sec-tit').on('click', function() {
  tabs.find('.sec-best').removeClass('active')
  (this).parent().addClass('active')
})




// !!!!never delete!!!!
});