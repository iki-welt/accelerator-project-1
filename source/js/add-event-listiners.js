import { onPriceTabClick } from './price-switch-groups';
import { onFAQTabClick } from './faq-switch-groups';

const tabsFAQContainerEl = document.querySelector('.faq__themes-list');
const tabsPriceContainerEl = document.querySelector('.price__period-list');

const addPriceListeners = () => {
  tabsPriceContainerEl.addEventListener('click', onPriceTabClick);
};

const addFAQListeners = () => {
  tabsFAQContainerEl.addEventListener('click', onFAQTabClick);
};

export {
  addFAQListeners,
  addPriceListeners
};
