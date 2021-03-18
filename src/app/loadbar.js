const loadBar = document.querySelector('.loadbar');
window.onload = () => {
  loadBar.style.width = '100%';
  setTimeout(()=> {loadBar.style.height = '0';}, 400);
};
