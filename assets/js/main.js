$(document).ready(function() {

  // main banner
  $('.slide-wrap').slick({
    dots: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    // autoplay: true,
    // autoplaySpeed: 3500,
    centerMode: true,
    variableWidth: true,
  });

  // new items
  $('.new-card-wrap').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
  });


//  best tabs, swiper
    // 탭 버튼과 탭 컨텐츠를 선택
    const tabButtons = document.querySelectorAll('.tab-btn')
    const tabs = document.querySelectorAll('.best-tab')
    // 모든 슬라이더에 대한 Swiper 인스턴스를 저장할 배열
    let swipers = []
    // Swiper 인스턴스를 초기화하는 함수
    function initSwiper(swiperElement) {
        return new Swiper(swiperElement, {
            // autoplay: true,
            loop: true,
            slidesPerView: 5,
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    }
    // 탭을 변경하는 함수
    function changeTab(index) {
        // 모든 탭과 버튼에서 'active' 클래스 제거
        tabButtons.forEach((button) => button.classList.remove('active'))
        tabs.forEach((tab) => tab.classList.remove('active'))
        // 선택된 탭과 버튼에 'active' 클래스 추가
        tabButtons[index].classList.add('active')
        tabs[index].classList.add('active')
        // 해당 탭에 Swiper 인스턴스가 없으면 초기화
        if (!swipers[index]) {
            const swiperElement = tabs[index].querySelector('.swiper')
            swipers[index] = initSwiper(swiperElement)
        }
    }
    // 탭 버튼에 클릭 이벤트 리스너 추가
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => changeTab(index))
    })
    // 초기 탭 설정
    changeTab(0) // 첫 번째 탭을 기본값으로 설정


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

  
  // farm story tabs
  $('.tab-btn').click(function(){
    var $this = $(this);
    var index = $this.index();
    
    $this.addClass('active');
    $this.siblings('.tab-btn.active').removeClass('active');
    
    var $outer = $this.closest('.farm');
    var $current = $outer.find(' > .farm-tabs > .farm-tab.active');
    var $post = $outer.find(' > .farm-tabs > .farm-tab').eq(index);
    
    $current.removeClass('active');
    $post.addClass('active');
    });


// !!!!never delete!!!!
});