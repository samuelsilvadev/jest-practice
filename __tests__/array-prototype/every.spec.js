const every = require('./../../modules/array-prototype/every');

describe('# ARRAY PROTOTYPE Module - EVERY', () => {
	it('should return a function', () => {
		expect(typeof every).toBe('function');
	});

	it('should return `true` when test if all items are bigger than zero', () => {
		const arr = [1, 2, 3];
		const filterBiggerThanZero = (item) => {
			return item > 0;
		};

		expect(every(arr, filterBiggerThanZero)).toBe(true);
	});

	it('should return `false` when test if all items are bigger than zero', () => {
		const arr = [0, 2, 3];
		const filterBiggerThanZero = (item) => {
			return item > 0;
		};

		expect(every(arr, filterBiggerThanZero)).toBe(false);
	});

	it('should return `true` if no argument is passed', () => {
		expect(every()).toBe(true);
	});

	it('should return `true` if only array is passed', () => {
		expect(every([])).toBe(true);
	});
});
