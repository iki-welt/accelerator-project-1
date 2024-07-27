const markActiveTab = (tab, { SETTINGS }) => {
  const activeClass = SETTINGS.activeTab;
  const clickedTab = tab.matches(activeClass);
  if (!clickedTab) {
    const activeTab = document.querySelector(`.${activeClass}`);
    activeTab.classList.remove(activeClass);
    tab.classList.add(activeClass);
  }
};

export { markActiveTab };
