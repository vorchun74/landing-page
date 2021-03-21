function clickHandler(event) {
  if (event.target.dataset.filter) {
    sortHandler(event);
  } else if (event.target.dataset.modal === 'modalProject') {
    projectHandler(event);
  } else if (event.target.dataset.close) {
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

// Modal window
function projectHandler(event) {
  event.preventDefault();
  document.getElementById('modalProject').classList.add('show');
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
const navCoords = {
  intro: 0,
  about: 667,
  skills: 1302,
  works: 1852,
  contact: 2406,
};

function scrollHandler(event) {
  event.preventDefault();
  let offsetPosition;
  let targetOffset = navCoords[event.target.dataset.navigation];
  if (pageYOffset === 0) {
    offsetPosition = targetOffset;
  } else if (pageYOffset > 0 && pageYOffset < targetOffset) {
    offsetPosition = targetOffset - pageYOffset;
  } else if (pageYOffset > targetOffset) {
    offsetPosition = 0 - pageYOffset + targetOffset;
  }
  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

document.addEventListener('click', clickHandler);
window.addEventListener('scroll', () => {
  if (pageYOffset >= 2372) {
    document.querySelector('.header').classList.add('hide');
  } else {
    document.querySelector('.header').classList.remove('hide');
  }
});