var swiper5 = new Swiper(".sw5", {
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
});

var swiper6 = new Swiper(".sw6", {
  effect: "coverflow",
  initialSlide: 2,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 4,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    300: {
      slidesPerView: 1.1,
      effect: "none",
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 30,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows: false,
      },
    },
    370: {
      slidesPerView: 1.4,
      effect: "none",
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 30,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows: false,
      },
    },
    450: {
      slidesPerView: 1.5,
      effect: "none",
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 30,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows: false,
      },
    },
    700: {
      slidesPerView: 3,
      effect: "coverflow",
      centeredSlides: true,
      initialSlide: 2,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: false,
      },
    },
    1100: {
      slidesPerView: 3.5,
    },
    1251: {
      slidesPerView: 4,
    },
  },
});

var swiper7 = new Swiper(".swip", {
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    370: {
      slidesPerView: 1.3,
    },
    450: {
      slidesPerView: 1.5,
    },
    600: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 2.5,
    },
    900: {
      slidesPerView: 3,
    },
  },
});
