import { Swiper } from './vendor/swiper';
import { Navigation } from './vendor/modules';

const reviewSlider = new Swiper('.reviews__wrapper', {
  modules: [ Navigation ],
  direction: 'horizontal',
  slidesPerView: 1,
  navigation: {
    nextEl: '.reviews__slider-control--next',
    prevEl: '.reviews__slider-control--prev',
    disabledClass: 'reviews__slider-control--disabled',
  },
  breakpoints: {
    320: {
      allowTouchMove: 'true',
    },
    768: {
      spaceBetween: 89,
      allowTouchMove: 'true',
    },
    1366: {
      spaceBetween: 104,
      allowTouchMove: 'false',
    },
  },
});

export { reviewSlider };
