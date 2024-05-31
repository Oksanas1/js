'uses strict';

const sectionCounterElement = document.querySelector('section');
const countElement = document.querySelector('.count');

const counterChange = action => {
  let count = +countElement.textContent;

  count = action === '+' ? count + 1 : count - 1;

  localStorage.setItem('countValue', count);
  countElement.textContent = count;
};

const heandller = event =>
  event.target.classList.contains('btn') ? counterChange(event.target.dataset.action) : null;

const onStorageChange = event => {
  countElement.textContent = event.newValue;
};

sectionCounterElement.addEventListener('click', heandller);
window.addEventListener('storage', onStorageChange);
