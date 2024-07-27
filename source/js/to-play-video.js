const videoContainerEl = document.querySelector('.about__video-wrapper');
const playButtonEl = videoContainerEl.querySelector('.about__video-play');
const videoEl = videoContainerEl.querySelector('.about__video');

const onVideoPlayClick = (evt) => {
  const clickedEl = evt.target.closest('.about__video-play');
  if (clickedEl) {
    videoContainerEl.classList.add('about__video-wrapper--is-active');
    playButtonEl.classList.add('about__video-play--is-active');
    videoEl.classList.add('about__video--is-active');
  }
};

export {
  playButtonEl,
  onVideoPlayClick
};
