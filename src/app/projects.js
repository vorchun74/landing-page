export const projects = [
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
];

function renderProjects(cards = []) {
  const inner = document.querySelector('.projects__inner');
  cards.forEach((card, index) => {
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
}
renderProjects(projects);