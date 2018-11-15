const reduce = require('../../modules/array-prototype/reduce');
const reduceRight = require('../../modules/array-prototype/reduce-right');

describe('# ARRAY PROTOTYPE Module - REDUCE', () => {
	it('should return a function', () => {
		expect(typeof reduce).toBe('function');
	});

	it('should return 3 when pass reduce([1, 2], (acc, item) => acc + item, 0)', () => {
		const result = reduce([1, 2], (acc, item) => acc + item, 0);

		expect(result).toBe(3);
	});

	it('should return 3 when pass reduce([1, 2], (acc, item) => acc + item)', () => {
		const result = reduce([1, 2], (acc, item) => acc + item);

		expect(result).toBe(3);
	});

	it('should return 0 when pass reduce([], (acc, item) => acc + item, 0)', () => {
		const result = reduce([], (acc, item) => acc + item, 0);

		expect(result).toBe(0);
	});

	it('should return { a0: 1 } when pass reduce([1], (acc, item, index) => { acc[a + index] = item; return acc; }, {})', () => {
		const result = reduce([1], (acc, item, index) => {
			acc[`a${index}`] = item;
			return acc;
		}, {});

		expect(result).toEqual({ a0: 1 });
	});

	it('should return 12 when pass reduce([1, 2, 3], (acc, item, index, arr) => acc + item + arr[index], 0)', () => {
		const result = reduce([1, 2, 3], (acc, item, index, arr) => {
			return acc + item + arr[index];
		}, 0);

		expect(result).toEqual(12);
	});

	it('should throw an TypeError when pass reduce([], (acc, item) => acc + item)', () => {
		expect(() => reduce([], (acc, item) => acc + item)).toThrowError('Reduce of empty array with no initial value');
	});

	it('should return `Hello World` when I pass `World Hello`', () => {
		const result = reduceRight(['World', 'Hello '], (acc, item) => acc + item, '');

		expect(result).toBe('Hello World');
	});
});
