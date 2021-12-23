const catalogBtn = document.querySelector('#catalog');
const catalog = document.querySelector('.catalog');

catalogBtn.addEventListener('click', () => {
  catalog.classList.toggle('catalog--active');
});
