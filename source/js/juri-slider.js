import { Swiper } from './swiper';
import { Navigation } from './modules';

const juriSlider = new Swiper('.juri__slider', {
  modules: [ Navigation ],
  direction: 'horizontal',
  loop: 'true',
  navigation: {
    nextEl: '.juri__slider-control--next',
    prevEl: '.juri__slider-control--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: 'true',
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      allowTouchMove: 'true',
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
      allowTouchMove: 'false',
    },
  },
});

export { juriSlider };
