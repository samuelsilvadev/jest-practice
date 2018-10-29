const map = require('./../../modules/array-prototype/map');

describe('# ARRAY PROTOTYPE Module - MAP', () => {
	it('should return a function', () => {
		expect(typeof map).toBe('function');
	});

	it('when pass map([1, 2], (i) => i)) should return a new array [1, 2]', () => {
		const arr = [1, 2];
		const newArr = map(arr, (i) => i);

		expect(arr).toEqual([1, 2]);
		expect(newArr).toEqual([1, 2]);
		expect(arr).not.toBe(newArr);
		expect(newArr.length).toBe(2);
	});

	it('when pass map([2, 4], (i) => i + 1)) should return an array [3, 5]', () => {
		const arr = [2, 4];
		const newArr = map(arr, (i) => i + 1);

		expect(arr).toEqual([2, 4]);
		expect(newArr).toEqual([3, 5]);
		expect(arr).not.toBe(newArr);
		expect(newArr.length).toBe(2);
	});

	it('when pass map([2, 4, 6], (i, index) => index)) should return an array [0, 1, 2]', () => {
		const arr = [2, 4, 6];
		const newArr = map(arr, (i, index) => index);

		expect(arr).toEqual([2, 4, 6]);
		expect(newArr).toEqual([0, 1, 2]);
		expect(arr).not.toBe(newArr);
		expect(newArr.length).toBe(3);
	});

	it('when pass map([2], (i, index, arr) => arr)) should return an array [[2]]', () => {
		const arr = [2];
		const newArr = map(arr, (i, index, originalArr) => originalArr);

		expect(newArr).toEqual([[2]]);
		expect(arr).not.toBe(newArr);
		expect(newArr.length).toBe(1);
	});

	it('when pass map([5, 5], (i, index, arr) => arr)) should return an array [[5, 5], [5, 5]]', () => {
		const arr = [5, 5];
		const newArr = map(arr, (i, index, originalArr) => originalArr);

		expect(newArr).toEqual([[5, 5], [5, 5]]);
		expect(arr).not.toBe(newArr);
		expect(newArr.length).toBe(2);
	});

	it('should return new array with the same values if callback is not passed', () => {
		const arr = [5, 5];
		const newArr = map(arr);

		expect(newArr).toEqual([5, 5]);
		expect(arr).not.toBe(newArr);
	});

	it('should throw an error if array is not passed', () => {
		expect(() => map()).toThrowError('The first parameter should not be empty');
	});
});
