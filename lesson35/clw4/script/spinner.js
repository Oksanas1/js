const spinnerElem = document.querySelector('.spinner');

export const showSpinner = () => {
  spinnerElem.classList.remove('spinner_hidden');
};

export const hidenSpinner = () => {
  spinnerElem.classList.add('spinner_hidden');
};
