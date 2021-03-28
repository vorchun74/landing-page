function clickHandler(event) {
  if (event.target.dataset.filter) {
    sortHandler(event);
  } else if (event.target.dataset.modal) {
    modalHandler(event);
  } else if (
    event.target.dataset.close ||
    event.target.classList.contains('show')
  ) {
    closeHandler(event);
  } else if (event.target.closest('.burger')) {
    burgerHandler(event);
  } else if (event.target.dataset.navigation) {
    scrollHandler(event);
  } else return;
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
  document.getElementById(event.target.dataset.modal).classList.add('show');
  document.querySelector('body').classList.add('no-scroll');
}
// Close button
function closeHandler(event) {
  event.preventDefault();
  event.target.closest('.show').classList.remove('show');
  document.querySelector('body').classList.remove('no-scroll');
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
    footer = document.querySelector('.footer');

  if (
    footer.getBoundingClientRect().top <= document.documentElement.clientHeight
  ) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
  animationHandler();
});

// Slider
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
