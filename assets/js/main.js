$(document).ready(function() {

  // main banner
  var swiper = new Swiper(".main-slide-wrap", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      476: {
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: -5,
      },
      1025: {
        slidesPerView: 1.4,
        centeredSlides: true,
      },
    },
  });

  // new items
  var swiper = new Swiper(".new-slide", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 15,
    breakpoints: {
      476: {
        slidesPerView: 2.6,
        spaceBetween: 20,
      },
      1025: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
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
            loop: true,
            slidesPerView: 1.5,
            centeredSlides: false,
            spaceBetween: 15,
            breakpoints: {
              476: {
                loop: false,
                initialSlide: 2,
                slidesPerView: 3,
                centeredSlides: true,
                spaceBetween: 0,
              },
              1025: {
                loop: false,
                initialSlide: 2,
                slidesPerView: 5,
                centeredSlides: true,
                spaceBetween: 0,
              },
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
    spaceBetween: 15,
    pagination: {
      el: ".reco-pagination",
      clickable: true,
    },
    breakpoints: {
      476: {
        spaceBetween: 20,
      },
      1025: {
        spaceBetween: 40,
      },
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