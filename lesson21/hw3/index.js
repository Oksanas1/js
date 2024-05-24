// const clearList = () => {
//   const listElement = document.querySelector('.categories');
//   listElement.removeAttribute('.tool');
//   listElement.innerHTML = '';
// };

// const createButton = buttonText => {
//   const bodyElement = document.querySelector('body');
//   const newButtonElement = document.createElement('button');
//   newButtonElement.textContent = buttonText;
//   bodyElement.append(newButtonElement);
// };

// console.log(clearList());
// createButton('text');
// export const manageClasses = () => {
//   const firstElement = document.querySelector('.one');
//   firstElement.classList.add('selected');

//   const secondElement = document.querySelector('.two');
//   secondElement.classList.remove('selected');

//   const thirdElement = document.querySelector('.three');
//   thirdElement.classList.toggle('three_done');

//   const foursElement = document.querySelector('.four');
//   if (foursElement.classList.contains('some-class')) {
//     foursElement.classList.add('another-class');
//   }
// };
// manageClasses();
// const squaredNumbers = () => {
//   const itemsElemnt = Array.from(document.querySelectorAll('.number'));
//   itemsElemnt.map(item => {
//     if(item.dataset.number > 0) {
//       item.dataset.squaredNumber = item.dataset.number ** 2
//     }
//     item.dataset.squaredNumber = item.dataset.number ** 2 * -1;
//   });
// };

// squaredNumbers();
