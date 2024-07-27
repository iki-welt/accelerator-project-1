import { onTabClick } from './faq-switch-groups';

const tabsContainerEl = document.querySelector('.faq__themes-list');

const addTabsListeners = () => {
  tabsContainerEl.addEventListener('click', onTabClick);
};

export { addTabsListeners };
