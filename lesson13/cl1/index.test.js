it('17 === 17', () => {
  expect(17).toEqual(17);
});

it('18 !== 17', () => {
  expect(18).not.toEqual(17);
});

const getEventNumbers = arr => arr.filter(value => (value % 2 === 0));

it('only event number', () => {
  const result = getEventNumbers([1, 2, 3, 4]);

  expect(result).toEqual([2, 4]);
});
