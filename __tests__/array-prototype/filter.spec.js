const filter = require('./../../modules/array-prototype/filter');

describe('# ARRAY PROTOTYPE Module - FILTER', () => {
	it('should return a function', () => {
		expect(typeof filter).toBe('function');
	});

	it('should return [1, 2] when filter to bigger than zero', () => {
		const arr = [0, 1, 2];
		const filterBiggerThanZero = (item) => {
			return item > 0;
		};

		expect(filter(arr, filterBiggerThanZero)).toEqual([1, 2]);
	});

	it('should return [-5, -7] when filter to less than zero', () => {
		const arr = [-5, -7, 0, 1, 2];
		const filterBiggerThanZero = (item) => {
			return item < 0;
		};

		expect(filter(arr, filterBiggerThanZero)).toEqual([-5, -7]);
	});

	it('should return an empty array when nothing is passed', () => {
		expect(filter().length).toBe(0);
	});

	it('should create another array and not modify the original', () => {
		const arr = [1, 2, 3];
		const filterEvenNumbers = (number) => {
			return number % 2 === 0;
		};
		const filteredNumbers = filter(arr, filterEvenNumbers);

		expect(arr).not.toBe(filteredNumbers);
	});

	it('should return an empty array if callback is not passed', () => {
		expect(filter([1, 2]).length).toBe(0);
	});
});
