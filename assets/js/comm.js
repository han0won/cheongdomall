$(document).ready(function() {
  // main: 메인 배너
  $('.m-slide-wrap').slick({
    dots: true,
    arrows: true,
    adaptiveHeight:true,
    
    centerMode: true,
    // centerPadding: '30px',
    slidesToShow: 1,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });

  // main: 신상품
  $('.new-card-wrap').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

});
