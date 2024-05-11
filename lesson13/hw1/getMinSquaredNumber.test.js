import getMinSquaredNumber from './getMinSquaredNumber';

it('get Min Square Number', () => {
    const minSquaredumber = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

    expect(minSquaredumber).toEqual(4);
});

it('it is not a arr of Number', () => {
    const minSquaredumber = getMinSquaredNumber('hh');

    expect(minSquaredumber).toEqual(null);
});

it('it is empty arr', () => {
    const minSquaredumber = getMinSquaredNumber([]);

    expect(minSquaredumber).toEqual(null);
});
