const find = require('../../modules/array-prototype/find-recursive');

describe('# ARRAY PROTOTYPE Module - FIND RECURSIVE', () => {
	it('should return a function', () => {
		expect(typeof find).toBe('function');
	});

	it('should return 1 when pass find([1, 2], (i) => i < 2))', () => {
		const arr = [1, 2];
		const result = find(arr, (i) => i < 2);

		expect(result).toBe(1);
	});

	it('should return 2 when pass find([4, 2, 5, 7], (i) => i < 3))', () => {
		const arr = [4, 2, 5, 7];
		const result = find(arr, (i) => i < 3);

		expect(result).toBe(2);
	});

	it('should return `undefined` when pass find([1, 2], (i) => i > 10))', () => {
		const arr = [1, 2];
		const result = find(arr, (i) => i > 10);

		expect(result).toBeUndefined();
	});

	it('should return `undefined` when pass find([], (i) => i > 10))', () => {
		const arr = [];
		const result = find(arr, (i) => i > 10);

		expect(result).toBeUndefined();
	});

	it('should return `undefined` when pass find()', () => {
		expect(find()).toBeUndefined();
	});
});
