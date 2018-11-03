const some = require('./../../modules/array-prototype/some');

describe('# ARRAY PROTOTYPE Module - SOME', () => {
	it('should return a function', () => {
		expect(typeof some).toBe('function');
	});

	it('should return `false` if empty array is passed', () => {
		const callback = item => item > 10;
		expect(some([], callback)).toBe(false);
	});

	it('should return `false` if nothing is passed', () => {
		expect(some()).toBe(false);
	});

	it('should return `true` when `[1, 2, 3]` and `anyIsEven()` is passed', () => {
		const arr = [1, 2, 3];
		const anyIsEven = (number) => {
			return number % 2 === 0;
		};
		expect(some(arr, anyIsEven)).toBe(true);
	});

	it('should return `false` when `[4, 2, 6]` and `anyIsEven()` is passed', () => {
		const arr = [4, 2, 6];
		const anyIsEven = (number) => {
			return number % 2 === 0;
		};
		expect(some(arr, anyIsEven)).toBe(true);
	});
});
