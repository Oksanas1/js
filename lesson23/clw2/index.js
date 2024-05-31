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
  return renderNumber(1, 10)
    .map(number => `<div class="sector__seat" data-seat-number="${number}"></div>`)
    .join('');
};

const renderLine = () => {
  const seats = renderSeat();

  return renderNumber(1, 10)
    .map(number => `<div class="sector__line" data-line-number="${number}">${seats}</div>`)
    .join('');
};

const renderSector = () => {
  const line = renderLine();

  return renderNumber(1, 3)
    .map(number => `<div class="sector" data-sector-number="${number}">${line}</div>`)
    .join('');
};

areneElement.innerHTML = renderSector();

const onSeatSelected = event => {
  const targetObj = event.target;

  if (!targetObj.classList.contains('sector__seat')) return;

  boardSeatElement.textContent = `S ${targetObj.closest('.sector').dataset.sectorNumber} - L ${targetObj.closest('.sector__line').dataset.lineNumber} - S ${targetObj.dataset.seatNumber}`;
};

areneElement.addEventListener('click', onSeatSelected);
