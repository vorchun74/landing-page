const $ = {};
window.$ = $;

$.modal = function (event) {
  function _createModal(event) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('data-close','closeBtn');
    switch (event.target.dataset.modal) {
      case 'modalResume':
        modal.insertAdjacentHTML(
          'afterbegin',
          `
          <div class="modal__dialog" id="${event.target.dataset.modal}" data-window="${event.target.dataset.modal}">
            <button class="modal__close modal__close--resume" type="button" data-close='closeBtn'>closeButton</button>
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
            <button class="modal__close" type="button" data-close='closeBtn'>closeButton</button>
            <div class="modal-work">
              <div class="modal-work__preview">
                <div class="modal-work__preview__slider">
                  <div class="modal-work__preview__item">
                    <img src="https://placehold.it/1750x1050/707070" alt="projectimage">
                  </div>
                  <div class="modal-work__preview__item">
                    <img src="https://placehold.it/350x450/fff" alt="projectimage">
                  </div>
                  <div class="modal-work__preview__item">
                    <img src="https://placehold.it/550x250/000" alt="projectimage">
                  </div>
                </div>
                <div class="modal-work__buttons">
                  <button class="modal-work__btn modal-work__btn--prev" type="button">Previous</button>
                  <button class="modal-work__btn modal-work__btn--next" type="button">Next</button>
                </div>
              </div>
              <div class="modal-work__content">
                <div class="modal-work__header">
                  <h2 class="modal-work__title">Project title</h3>
                  <h3 class="modal-work__subtitle">category</h3>
                  <h3 class="modal-work__subtitle">2018</h3>
                </div>
                <div class="modal-work__techs">
                  <h4>Developed with:</h4>
                  <h5>JavaScript</h5>
                </div>
                <div class="modal-work__text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque eu enim eget luctus. Sed augue felis, facilisis et elementum vitae, aliquam sit amet ante. Sed iaculis eros sem, elementum consequat est consequat eu.  Donec sit amet aliquet dui, at varius est. Phasellus porttitor finibus neque vel vehicula. Duis in nulla egestas, dignissim elit at, imperdiet eros. Integer tristique posuere purus.</p>
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
  
  const CLOSING_SPEED = 500;
  const $modal = _createModal(event);
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
};
