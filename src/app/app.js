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
function scrollHandler(event) {
  event.preventDefault();
  const targetOffset = document.getElementById(event.target.dataset.navigation).getBoundingClientRect().top;
  const offsetPosition = targetOffset - 70;
  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

document.addEventListener('click', clickHandler);
window.addEventListener('scroll', () => {
  const footer = document.querySelector('.footer');
  if (footer.getBoundingClientRect().top <= document.documentElement.clientHeight) {
    document.querySelector('.header').classList.add('hide');
  } else {
    document.querySelector('.header').classList.remove('hide');
  }
});