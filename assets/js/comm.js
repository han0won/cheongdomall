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


  function handleWindowSize() {
    if ($(window).width() <= 475) {
      $(".ctr-btn").click(function(){
        $(".lnb-menu-wrap").hide();
        $(".ctr-btn > i").removeClass("fa-xmark");
        $(".lnb").toggleClass("m-hidden");
      });
    }
  }; 

  handleWindowSize();

  $(window).resize(function() {
    handleWindowSize();
  });

});