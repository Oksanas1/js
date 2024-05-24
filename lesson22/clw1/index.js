const divElement = document.querySelector('.rect_div');
const pElement = document.querySelector('.rect_p');
const spanElement = document.querySelector('.rect_span');
const eventsListElment = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
const attachHanlerBtn = document.querySelector('.attach-handlers-btn');

const logTarget = (color, text, isClean = false) => {
  eventsListElment.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const greyDivElement = logTarget.bind(null, 'grey', 'div');
const greyPElement = logTarget.bind(null, 'grey', 'p');
const greySpanElement = logTarget.bind(null, 'grey', 'span');

const greenDivElement = logTarget.bind(null, 'green', 'div');
const greenPElement = logTarget.bind(null, 'green', 'p');
const greenSpanElement = logTarget.bind(null, 'green', 'span');

const clearTarget = () => {
  eventsListElment.innerHTML = '';
};

clearBtn.addEventListener('click', clearTarget);

const includesListener = (isLisen = true) => {
  if (isLisen) {
    divElement.addEventListener('click', greyDivElement, true);
    divElement.addEventListener('click', greenDivElement);

    pElement.addEventListener('click', greyPElement, true);
    pElement.addEventListener('click', greenPElement);

    spanElement.addEventListener('click', greySpanElement, true);
    spanElement.addEventListener('click', greenSpanElement);
  } else {
    divElement.removeEventListener('click', greyDivElement, true);
    divElement.removeEventListener('click', greenDivElement);

    pElement.removeEventListener('click', greyPElement, true);
    pElement.removeEventListener('click', greenPElement);

    spanElement.removeEventListener('click', greySpanElement, true);
    spanElement.removeEventListener('click', greenSpanElement);
  }
};

includesListener();
removeHandlersBtn.addEventListener('click', () => includesListener(false));
attachHanlerBtn.addEventListener('click', () => includesListener(true));
