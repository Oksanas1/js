import calc, { getSquaredArray, getOddNumbers } from './calculator';

it('Squared Array numbers', () => {
  const sguaredNumbers = getSquaredArray([1, 2, 3]);

  expect(sguaredNumbers).toEqual([1, 4, 9]);
});

it('only odd numbers', () => {
  const oddNumbers = getOddNumbers([1, 2, 3, 4]);

  expect(oddNumbers).toEqual([1, 3]);
});

it('calc', () => {
  const addNumber = calc(2, 2);

  expect(addNumber).toEqual(4);
});
