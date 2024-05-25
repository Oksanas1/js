const areneElement = document.querySelector('.arena');
const boardSeatElement = document.querySelector('.board__selected-seat');

const renderNumber = (from, to) => {
  const numbers = [];

  for (let i = from; i <= to; i += 1) {
    numbers.push(i);
  }

  return numbers;
};

const renderSeat = () => {
  const numbersSeat = renderNumber(1, 10);

  return numbersSeat
    .map(number => `<div class="sector__seat" data-seat-number="${number}"></div>`)
    .join('');
};

const renderLine = () => {
  const numbersLine = renderNumber(1, 10);

  return numbersLine
    .map(number => `<div class="sector__line" data-line-number="${number}">${renderSeat()}</div>`)
    .join('');
};

const renderSector = () => {
  const numbersSetors = renderNumber(1, 3);

  return numbersSetors
    .map(number => `<div class="sector" data-sector-number="${number}">${renderLine()}</div>`)
    .join('');
};

areneElement.innerHTML = renderSector();

const onSeatSelected = event => {
  const targetObj = event.target;

  if (!targetObj.classList.contains('sector__seat')) return;

  boardSeatElement.textContent = `S ${targetObj.closest('.sector').dataset.sectorNumber} - L ${targetObj.closest('.sector__line').dataset.lineNumber} - S ${targetObj.dataset.seatNumber}`;
};

areneElement.addEventListener('click', onSeatSelected);
