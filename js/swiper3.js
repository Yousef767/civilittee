
var swiper = new Swiper(".sw", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    530: {
      slidesPerView: 1.3,
    },
    650: {
      slidesPerView: 1.5,
    },
    885: {
      slidesPerView: 2.2,
    },
    1000: {
      slidesPerView: 2.5,
    },
    1100: {
      slidesPerView: 2.7,
    },
    1251: {
      slidesPerView: 3,
    },
  },
});
