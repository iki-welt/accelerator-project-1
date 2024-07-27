import { playButtonEl, onVideoPlayClick } from './to-play-video';
import { onPriceTabClick } from './price-switch-groups';
import { onFAQTabClick } from './faq-switch-groups';

const tabsFAQContainerEl = document.querySelector('.faq__themes-list');
const tabsPriceContainerEl = document.querySelector('.price__period-list');

const addAboutVideoListener = () => {
  playButtonEl.addEventListener('click', onVideoPlayClick);
};

const addPriceListeners = () => {
  tabsPriceContainerEl.addEventListener('click', onPriceTabClick);
};

const addFAQListeners = () => {
  tabsFAQContainerEl.addEventListener('click', onFAQTabClick);
};

export {
  addAboutVideoListener,
  addFAQListeners,
  addPriceListeners
};
