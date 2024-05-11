export default (numbers) => {
    if(!Array.isArray(numbers) || numbers.length === 0) return null;

    return Math.min(...numbers.map(value => Math.abs(value))) ** 2;
};