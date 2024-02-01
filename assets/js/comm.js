//Header
$(document).ready(function(){
  // 카테고리 클릭 시 아래로 펼쳐짐
  function toggleLnbMenu() {
    $(".lnb-menu-wrap").toggle();
  }
  if ($(window).width() > 475) {
    $(".lnb-btn-wrap > a").click(function(){
      $(".lnb-menu-wrap").toggle();
    }); 
  }
  $(window).resize(function () {
    if ($(window).width() > 475) {
        $(".lnb-btn-wrap > a").unbind('click', toggleLnbMenu);
        $(".lnb-btn-wrap > a").click(toggleLnbMenu);
    } else {
        $(".lnb-btn-wrap > a").unbind('click', toggleLnbMenu);
        $(".lnb-menu-wrap").hide();
    }
  });

  // 카테고리 클릭 시 아이콘 변경, 테두리 나타남 
  $(".lnb-btn-wrap > a").click(function(){
    $(".ctr-btn > i").toggleClass("fa-xmark");
    $(".lnb").toggleClass("lnb-click");
  }); 

  // 카테고리 depth1 마우스 오버 시 depth2 나타남
  $(".vegetable").mouseenter(function() {
    $(".li-vegetable").addClass("open");
  });
  $(".meat, .snack, .sauce").mouseenter(function() {
    $(".li-vegetable").removeClass("open");
  });
  $(".meat").mouseenter(function() {
    $(".li-meat").addClass("open");
  });
  $(".vegetable, .snack, .sauce").mouseenter(function() {
    $(".li-meat").removeClass("open");
  });
  $(".snack").mouseenter(function() {
    $(".li-snack").addClass("open");
  });
  $(".meat, .vegetable, .sauce").mouseenter(function() {
    $(".li-snack").removeClass("open");
  });
  $(".sauce").mouseenter(function() {
    $(".li-sauce").addClass("open");
  });
  $(".meat, .snack, .vegetable").mouseenter(function() {
    $(".li-sauce").removeClass("open");
  });

  
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