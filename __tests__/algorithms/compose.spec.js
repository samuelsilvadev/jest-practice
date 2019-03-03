const compose = require('../../modules/algorithms/compose');

describe('Compose Module', () => {
	it('should return a function', () => {
		expect(typeof compose).toBe('function');
	});

	it('should return a new function after execute it', () => {
		expect(typeof compose()).toBe('function');
	});

	it('should does function composition and execute correctly with strings', () => {
		const upper = (str) => str.toUpperCase();
		const underscorify = (str) => str.split('').join('_');
		const text = 'compose';

		const result = compose(upper, underscorify)(text);

		expect(result).toBe(upper(underscorify(text)));
	});

	it('should does function composition and execute correctly with numbers', () => {
		const square = (x) => x * x;
		const minus = (x) => (y) => x - y;
		const number = 4;

		const result = compose(square, minus(10))(number);

		expect(result).toBe(square(minus(10)(number)));
	});

	it('should does function composition and execute correctly with arrays', () => {
		const add = (value) => (arr) => [...arr, value];
		const square = (arr) => arr.map(value => value * value);
		const arr = [1, 2, 3];

		const result = compose(square, add(4))(arr);

		expect(result).toEqual(square(add(4)(arr)));
	});

	it('should throw a type error if initial value not to be passed', () => {
		const noop = (_) => _;
		const result = () => compose(noop)();
		const expectedResult = 'Argument can\'t be empty';

		expect(result).toThrowError(expectedResult);
	});
});
