export const getTitleElement = () => {
  const titleElem = document.querySelector('.title');
  console.log(titleElem);
};

export const getInputElement = () => {
  const inputElem = document.querySelector('input[type="text"]');
  console.log(inputElem);
};

getInputElement();
getTitleElement();
