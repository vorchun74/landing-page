export const Portfolio = {
  themes: [
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
  ],
  themeHandler(event) {
    event.preventDefault();
    const html = document.querySelector('html');
    const video = document.querySelector('video');
    const photo = document.getElementById('photo');
    html.removeAttribute('class');
    html.classList.add(event.target.closest('a').dataset.theme);
    video.src = this.themes[event.target.closest('a').id].video;
    photo.src = this.themes[event.target.closest('a').id].photo;
  },
  projects: [
    {
      title: 'project1',
      category: 'application',
      year: '2018',
      techs: ['HTML', ' CSS', ' Vue'],
      description: `Description of project 1. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque eu enim eget luctus. Sed augue felis, facilisis et elementum vitae, aliquam sit amet ante. Sed iaculis eros sem, elementum consequat est consequat eu.  Donec sit amet aliquet dui, at varius est. Phasellus porttitor finibus neque vel vehicula. Duis in nulla egestas, dignissim elit at, imperdiet eros. Integer tristique posuere purus.`,
      animation: 'fadeLeft',
      photos: [
        'assets/images/projects/app.jpg',
        'assets/images/projects/website.png',
        'assets/images/projects/interaction.png',
      ],
      source: 'https://vk.com/petukhov_sa',
    },
    {
      title: 'project2',
      category: 'website',
      year: '2019',
      techs: ['HTML', ' SASS ', ' JavaScript'],
      description: `Description of project 2. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque eu enim eget luctus. Sed augue felis, facilisis et elementum vitae, aliquam sit amet ante. Sed iaculis eros sem, elementum consequat est consequat eu.  Donec sit amet aliquet dui, at varius est. Phasellus porttitor finibus neque vel vehicula. Duis in nulla egestas, dignissim elit at, imperdiet eros. Integer tristique posuere purus.`,
      animation: 'fadeBottom',
      photos: [
        'assets/images/projects/website.png',
        'assets/images/projects/app.jpg',
        'assets/images/projects/interaction.png',
      ],
      source: 'https://vk.com/petukhov_sa',
    },
    {
      title: 'project3',
      category: 'plugin',
      year: '2020',
      techs: ['HTML', ' CSS', ' JavaScript'],
      description: `Description of project 3. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque eu enim eget luctus. Sed augue felis, facilisis et elementum vitae, aliquam sit amet ante. Sed iaculis eros sem, elementum consequat est consequat eu.  Donec sit amet aliquet dui, at varius est. Phasellus porttitor finibus neque vel vehicula. Duis in nulla egestas, dignissim elit at, imperdiet eros. Integer tristique posuere purus.`,
      animation: 'fadeRight',
      photos: [
        'assets/images/projects/interaction.png',
        'assets/images/projects/app.jpg',
        'assets/images/projects/website.png',
      ],
      source: 'https://vk.com/petukhov_sa',
    },
  ],
  renderProjects() {
    const inner = document.querySelector('.projects__inner');
    this.projects.forEach((card, index) => {
      inner.insertAdjacentHTML(
        'beforeend',
        `
        <div class="projects__item" id='${index}' data-category=${card.category} data-animation=${card.animation}>
          <div class="projects__photo">
            <img src=${card.photos[0]} alt="projectphoto">
            <div class="projects__overlay">
              <a href="#" data-modal="modalProject">projectZoomIcon</a>
              <a href=${card.source} target='_blank'>projectSourceIcon</a>
            </div>
          </div>
          <div class="projects__text">
            <h3 class="projects__category">${card.category}</h3>
            <h2 class="projects__title">
              <a href="#" data-modal="modalProject">${card.title}</a>
            </h2>
            <h2 class="projects__year">${card.year}</h2>
          </div>
        </div>
      `
      );
    });
  },
  modal(event) {
    function _createModal(event, card = {}) {
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.setAttribute('data-close','closeBtn');
      switch (event.target.dataset.modal) {
        case 'modalResume':
          modal.insertAdjacentHTML(
            'afterbegin',
            `
            <div class="modal__dialog" id="${event.target.dataset.modal}" data-window="${event.target.dataset.modal}">
              <button class="modal__close modal__close--resume" type="button" data-close='closeBtn'>&times;</button>
              <div class="modal-resume">
                <object data="assets/images/modals/PetukhovResumeRu.pdf" type="application/pdf" width="100%" height="100%">
                  <h1 class="modal-work__title">Oops! Your browser doesn't support PDFs!</h1>
                  <div class="about__buttons">
                    <button class="btn" href="assets/images/modals/PetukhovResumeRu.pdf" target="_blank" disabled>See on hh.ru</button>
                    <button class="btn" href="assets/images/modals/PetukhovResumeRu.pdf" download>Download</button>
                  </div>
                </object>
              </div>
            </div>
          `
          );
          break;
        case 'modalProject':
          modal.insertAdjacentHTML(
            'afterbegin',
            `
            <div class="modal__dialog" id="${event.target.dataset.modal}" data-window="${event.target.dataset.modal}">
              <button class="modal__close" type="button" data-close='closeBtn'>&times;</button>
              <div class="modal-work">
                <div class="modal-work__preview">
                  <div class="modal-work__preview__slider">
                    <div class="modal-work__preview__item">
                      <img src=${card.photos[0]} alt="projectimage">
                    </div>
                    <div class="modal-work__preview__item">
                      <img src=${card.photos[1]} alt="projectimage">
                    </div>
                    <div class="modal-work__preview__item">
                      <img src=${card.photos[2]} alt="projectimage">
                    </div>
                  </div>
                  <div class="modal-work__buttons">
                    <button class="modal-work__btn modal-work__btn--prev" type="button">Previous</button>
                    <button class="modal-work__btn modal-work__btn--next" type="button">Next</button>
                  </div>
                </div>
                <div class="modal-work__content">
                  <div class="modal-work__header">
                    <h2 class="modal-work__title">${card.title}</h3>
                    <h3 class="modal-work__subtitle">${card.category}</h3>
                    <h3 class="modal-work__subtitle">${card.year}</h3>
                  </div>
                  <div class="modal-work__techs">
                    <h4>Developed with:</h4>
                    <h5>${[...card.techs]}</h5>
                  </div>
                  <div class="modal-work__text">
                    <p>${card.description}</p>
                    <p>Suspendisse placerat, quam vitae ullamcorper sollicitudin, dui ligula molestie massa, sit amet laoreet nibh ex vitae dui. Aenean laoreet pellentesque lacus, eget varius massa mattis quis. Nunc ultrices urna eu nunc lobortis pulvinar. Duis viverra, quam non imperdiet scelerisque, urna nunc consequat velit, in mollis erat nibh in libero.</p>
                    <p>Quisque aliquet a ipsum nec tincidunt. Nulla vitae rhoncus leo. Praesent dui sapien, bibendum quis tempus dictum, auctor ac dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec at mauris porta, ullamcorper sem quis, lobortis sem.</p>
                  </div>
                </div>
              </div>
            </div>
          `
          );
          break;
      }
      document.body.appendChild(modal);
      return modal;
    }
    const CLOSING_SPEED = 350;
    const $modal = _createModal(event, this.projects[event.target.closest('[id]').id]);
    let closing = false;
    const modal = {
      open() {
        !closing && $modal.classList.add('open');
      },
      close() {
        closing = true;
        $modal.classList.remove('open');
        $modal.classList.add('closing');
        setTimeout(() => {
          $modal.classList.remove('closing');
          closing = false;
          this.destroy();
        }, CLOSING_SPEED);
      },
      destroy() {
        $modal.remove();
      },
    };
    $modal.addEventListener('click', (event) => {
      if (event.target.dataset.close) {
        modal.close();
        document.body.classList.remove('no-scroll');
      }
    });
  
    return modal;
  },
  sortHandler(event) {
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
  },
  modalSlider() {
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
  },
  modalHandler(event) {
    event.preventDefault();
    const modal = Portfolio.modal(event, Portfolio.projects);
    if (event.target.dataset.modal === 'modalProject') {
      this.modalSlider();
    }
    setTimeout(() => {
      modal.open();
    }, 100);
    document.body.classList.add('no-scroll');
  },
  settingsHandler(event) {
    event.preventDefault();
    document.querySelector('.popup').classList.toggle('open');
  },
  settingsClose() {
    document.querySelector('.popup').classList.remove('open');
  },
  burgerHandler() {
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.header').classList.toggle('active');
  },
  navMenuHandler(event) {
    event.preventDefault();
    const targetOffset = document
      .getElementById(event.target.dataset.navigation)
      .getBoundingClientRect().top;
    const offsetPosition = targetOffset - 70;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  },
  clickHandler(event) {
    if (event.target.dataset.filter) {
      Portfolio.sortHandler(event);
    } else if (event.target.dataset.modal) {
      Portfolio.modalHandler(event);
    } else if (event.target.closest('.burger')) {
      Portfolio.burgerHandler();
    } else if (event.target.dataset.navigation) {
      Portfolio.navMenuHandler(event);
    } else if (event.target.dataset.settings === 'settingsBtn') {
      Portfolio.settingsHandler(event);
    } else if (!event.target.closest('.popup') && !event.target.dataset.settings) {
      Portfolio.settingsClose();
    } else if (event.target.closest('[data-theme]')) {
      Portfolio.themeHandler(event);
    }
  },
  animationHandler() {
    const animatedElements = document.querySelectorAll('[data-animation]');
    animatedElements.forEach((element) => {
      const elementHeight = element.offsetHeight,
            rect = element.getBoundingClientRect().top,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop,
            elementOffset = rect + scrollTop,
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
  },
  scrollHandler() {
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
    Portfolio.animationHandler();
  }
};