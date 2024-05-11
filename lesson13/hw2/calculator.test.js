import {calc} from './calculator';

it('it is not a srting', () => {
    const result = calc(1);
    
    expect(result).toEqual(null);
});
  
it ('add number', () => {
    const result = calc('2 + 2');
    
    expect(result).toEqual('2 + 2 = 4');
});

it ('take away number', () => {
    const result = calc('2 - 2');
    
    expect(result).toEqual('2 - 2 = 0');
});

it ('multy number', () => {
    const result = calc('2 * 2');
    
    expect(result).toEqual('2 * 2 = 4');
});

it ('div number', () => {
    const result = calc('2 / 2');
    
    expect(result).toEqual('2 / 2 = 1');
});
