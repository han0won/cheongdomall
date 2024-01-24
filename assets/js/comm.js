//Header
$(document).ready(function(){
  $(".lnb-btn-wrap > a").click(function(){
    $(".lnb-menu-wrap").toggle();
  }); // 카테고리 클릭 시 아래로 펼쳐짐

  $(".lnb-btn-wrap > a").click(function(){
    $(".ctr-btn > i").toggleClass("fa-xmark");
    $(".lnb").toggleClass("lnb-click");
 })
});


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

  

// main: best slide
  var swiper = new Swiper(".best-slide", {
    loop: true,
    slidesPerView: 5,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
// best tabs
$('.tab-btn').click(function(){
  var $this = $(this);
  var index = $this.index();
  
  $this.addClass('active');
  $this.siblings('.tab-btn.active').removeClass('active');
  
  var $outer = $this.closest('.best-item');
  var $current = $outer.find(' > .best-tabs > .best-tab.active');
  var $post = $outer.find(' > .best-tabs > .best-tab').eq(index);
  
  $current.removeClass('active');
  $post.addClass('active');
  });

// !!!!never delete!!!!
});