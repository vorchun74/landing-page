const loadBar = document.createElement('div');
loadBar.classList.add('loadbar');
document.body.prepend(loadBar);

const bar = document.querySelector('.loadbar');
bar.style.width = `${20 + Math.random() * 50}%`;
window.onload = () => {
  bar.style.width = '100%';
}
setTimeout(() => {
  bar.style.height = '0';
}, 1200);
setTimeout(() => {
  bar.remove();
}, 2500);