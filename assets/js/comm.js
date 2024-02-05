//Header
$(document).ready(function(){
  
  // 카테고리 클릭 시 아래로 펼쳐짐
  $(".lnb-btn-wrap > a").click(function(){
    $(".lnb-menu-wrap").toggle();
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

  // 모바일 화면에서 카테고리 오픈
  $(".menu-icon-bar").click(function(){
    $(".lnb-mob-menu").animate({left: '0'}, 300);
    $("body").addClass("no-scroll")
  });
  // 모바일 화면에서 카테고리 클로즈
  $(".icon-close > a").click(function(){
    $(".lnb-mob-menu").animate({left: '-100%'}, 300);
    $("body").removeClass("no-scroll")
  });
});