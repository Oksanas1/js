import { getAdults, withdraw, reverseArray } from './index';

it('only older 18 years', () => {
  const filterAdults = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

  expect(filterAdults).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('not change entries obj', () => {
  const entriesObj = { Ann: 56, Andrey: 7 };
  getAdults({ Ann: 56, Andrey: 7 });

  expect(entriesObj).toEqual(entriesObj);
});

it('must return emty object', () => expect(getAdults({})).toEqual({}));

it('enough money', () => {
  const newBalance = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(newBalance).toEqual(37);
});

it('do not have maney', () => {
  const newBalance = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

  expect(newBalance).toEqual(-1);
});

it('enough money, change balance', () => {
  const balance = [1400, 87, -6];

  withdraw(['Ann', 'John', 'User'], balance, 'John', 50);

  expect(balance).toEqual([1400, 37, -6]);
});

it('reverse arr', () => expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]));

it('it is not arr', () => expect(reverseArray('1, 2, 3')).toEqual(null));

it('reverse empty arr', () => expect(reverseArray([])).toEqual([]));
