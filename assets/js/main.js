$(document).ready(function() {

  // main banner
  $('.slide-wrap').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3500,
    centerMode: true,
    variableWidth: true,
  });

  // new items
  var swiper = new Swiper(".new-slide", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    scrollbar: {
      el: ".new-scrollbar",
    },
  });

//  best tabs, slider
    const tabButtons = document.querySelectorAll('.tab-btn')
    const tabs = document.querySelectorAll('.best-tab')
    let swipers = []
    function initSwiper(swiperElement) {
        return new Swiper(swiperElement, {
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            initialSlide: 2,
            slidesPerView: 5,
            centeredSlides: true,
            scrollbar: {
              el: ".best-scrollbar",
            },
        })
    }
    function changeTab(index) {
        tabButtons.forEach((button) => button.classList.remove('active'))
        tabs.forEach((tab) => tab.classList.remove('active'))
        tabButtons[index].classList.add('active')
        tabs[index].classList.add('active')
        if (!swipers[index]) {
            const swiperElement = tabs[index].querySelector('.swiper')
            swipers[index] = initSwiper(swiperElement)
        }
    }
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => changeTab(index))
    })
    changeTab(0)

  // recommend
  var swiper = new Swiper(".reco-slide", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    pagination: {
      el: ".reco-pagination",
      clickable: true,
    },
  });

  // farm story tabs
  $(document).ready(function() {
    $('.tab-btn:first-child').addClass('active');
    $('.farm-tab:first-child').addClass('active');
});
  $('.tab-btn').click(function(){
    var $this = $(this);
    var index = $this.index();
    $this.addClass('active');
    $this.siblings('.tab-btn.active').removeClass('active');
    var $outer = $this.closest('.farm');
    var $current = $outer.find('.farm-tabs .farm-tab.active');
    var $post = $outer.find('.farm-tabs .farm-tab').eq(index);
    $current.removeClass('active');
    $post.addClass('active');
    });


// !!!!never delete!!!!
});