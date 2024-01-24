$(document).ready(function() {
  // main: main banner
  $('.slide-wrap').slick({
    dots: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    // autoplay: true,
    // autoplaySpeed: 3500,
    centerMode: true,
    variableWidth: true,
  });

  // main: new items
  $('.new-card-wrap').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

// main: best slide * * * 수정할 부분 * * *
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

  // recommend
  var swiper = new Swiper(".reco-slide", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


// !!!!never delete!!!!
});