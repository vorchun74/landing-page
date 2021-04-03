import {projects} from './projects'

function clickHandler(event) {
  if (event.target.dataset.filter) {
    sortHandler(event);
  } else if (event.target.dataset.modal) {
    modalHandler(event);
  } else if (event.target.closest('.burger')) {
    burgerHandler(event);
  } else if (event.target.dataset.navigation) {
    scrollHandler(event);
  } else if (event.target.dataset.settings === 'settingsBtn') {
    settingsHandler(event);
  } else if (!event.target.closest('.popup') && !event.target.dataset.settings) {
    settingsClose(event);
  } else if (event.target.closest('[data-theme]')) {
    themeHandler(event);
  } else return;
}


// Settings btn
function settingsHandler(event) {
  event.preventDefault();
  document.querySelector('.popup').classList.toggle('open');
}

// Settings close
function settingsClose(event) {
  event.preventDefault();
  document.querySelector('.popup').classList.remove('open');
}

const themes = [
  {
    photo: 'assets/images/about/photo-v.png',
    video: './assets/video/violet-bg.mp4'
  },
  {
    photo: 'assets/images/about/photo-r.png',
    video: './assets/video/red-bg.mp4'
  },
  {
    photo: 'assets/images/about/photo-g.jpg',
    video: './assets/video/green-bg.mp4'
  },
  {
    photo: 'assets/images/about/photo-b.png',
    video: './assets/video/blue-bg.mp4'
  }
]

// Theme switch
function themeHandler(event) {
  event.preventDefault();
  const html = document.querySelector('html');
  const video = document.querySelector('video');
  const photo = document.getElementById('photo');
  html.removeAttribute('class');
  html.classList.add(event.target.closest('a').dataset.theme);
  video.src = themes[event.target.closest('a').id].video;
  photo.src = themes[event.target.closest('a').id].photo;
}

// Sort
function sortHandler(event) {
  event.preventDefault();
  const projects = document.querySelectorAll('[data-category]');
  let category = event.target.dataset.filter;

  projects.forEach((project) => {
    if (category === project.dataset.category || category === 'all') {
      project.classList.remove('hide');
    } else {
      project.classList.add('hide');
    }
  });
}

// Modal windows
function modalHandler(event) {
  event.preventDefault();
  const modal = $.modal(event, projects);
  if (event.target.dataset.modal === 'modalProject') {
    modalSlider();
  }
  setTimeout(() => {
    modal.open();
  }, 100);
  document.body.classList.add('no-scroll');
}

// Burger button
function burgerHandler(event) {
  event.preventDefault();
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.header').classList.toggle('active');
}

// Scroll
function scrollHandler(event) {
  event.preventDefault();
  const targetOffset = document
    .getElementById(event.target.dataset.navigation)
    .getBoundingClientRect().top;
  const offsetPosition = targetOffset - 70;
  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

const animatedElements = document.querySelectorAll('[data-animation]');

const offset = (el) => {
  const rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop };
};

function animationHandler() {
  animatedElements.forEach((element) => {
    const elementHeight = element.offsetHeight,
      elementOffset = offset(element).top,
      elementStartPos = 4;
    let elementPoint = window.innerHeight - elementHeight / elementStartPos;
    if (elementHeight > window.innerHeight) {
      elementPoint = window.innerHeight - window.innerHeight / elementStartPos;
    }
    if (
      pageYOffset > elementOffset - elementPoint &&
      pageYOffset < elementOffset + elementHeight
    ) {
      element.classList.add(element.dataset.animation);
    }
  });
}

animationHandler();

document.addEventListener('click', clickHandler);
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header'),
    footer = document.querySelector('.footer'),
    settingsBtn = document.querySelector('.settings')

  if (
    footer.getBoundingClientRect().top <= document.documentElement.clientHeight
  ) {
    header.style.transform = 'translateY(-75px)';
    settingsBtn.style.transform = 'translateY(-75px)';
  } else {
    header.style.transform = 'translateY(0)';
    settingsBtn.style.transform = 'translateY(0)';
  }
  animationHandler();
});

// Slider
function modalSlider() {
  let position = 0;
  const track = document.querySelector('.modal-work__preview__slider'),
    items = document.querySelectorAll('.modal-work__preview__item'),
    itemWidth = document.querySelector('.modal-work__preview').clientWidth,
    itemsCount = items.length,
    btnPrev = document.querySelector('.modal-work__btn--prev'),
    btnNext = document.querySelector('.modal-work__btn--next');

  items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
  });

  btnNext.onclick = () => {
    position -= itemWidth;
    setPosition();
    checkBtns();
  };

  btnPrev.onclick = () => {
    position += itemWidth;
    setPosition();
    checkBtns();
  };

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };

  const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -itemsCount * itemWidth + itemWidth;
  };

  checkBtns();
}
