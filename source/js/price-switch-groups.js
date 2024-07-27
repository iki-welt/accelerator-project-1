import { markActiveTab } from './utils.js';

const PriceGroups = {
  MONTH: {
    coach: 5000,
    daily: 1700,
    fullday: 2700
  },

  HALFYEAR: {
    coach: 30000,
    daily: 10200,
    fullday: 16200
  },

  YEAR: {
    coach: 60000,
    daily: 20400,
    fullday: 32400
  },

  SETTINGS: {
    targetTab: '.price__period-tab',
    activeTab: 'price__period-tab--is-active'
  }
};

const Memberships = document.querySelectorAll('.product-card');

const renderProductCards = (priceData) => {
  Memberships.forEach((card) => {
    const cardContent = card.querySelector('.product-card__price-cost');
    const cardValue = card.querySelector('.product-card__price-value');
    const cardType = card.id;

    cardContent.dataset.value = priceData[cardType];
    cardValue.textContent = priceData[cardType];
  });
};

const onPriceTabClick = (evt) => {
  const clickedEl = evt.target.matches('.price__period-tab');
  if (clickedEl) {
    evt.preventDefault();
    const currentEl = evt.target;
    markActiveTab(currentEl, PriceGroups);
    const tabId = currentEl.id;
    const priceData = PriceGroups[tabId.toUpperCase()];
    if (priceData) {
      renderProductCards(priceData);
    }
  }
};

export { onPriceTabClick };
