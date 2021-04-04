import {Portfolio} from './data'
window.Portfolio = Portfolio;
Portfolio.renderProjects();
Portfolio.animationHandler();
document.addEventListener('click', Portfolio.clickHandler);
window.addEventListener('scroll', Portfolio.scrollHandler);