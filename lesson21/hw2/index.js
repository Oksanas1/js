export const getItemsList = () => {
  const elementList = document.querySelectorAll('.technology');
  console.dir(elementList);

  return elementList;
};

export const getItemsArray = () => {
  const elementsArray = Array.from(document.querySelectorAll('.tool'));
  console.dir(elementsArray);

  return elementsArray;
}
