const binarySearch = require('../../../modules/algorithms/search/binary-search');

describe('Search - Binary Search', () => {
	it('should find the index of the value correctly', () => {
		const result = binarySearch([1, 2, 3, 4, 5, 7], 5);

		expect(result).toBe(4);
	});

	it('should find the index if value is smaller than the middle point on [1, 2, 3, 4, 5, 7, 20, 49, 56, 800]', () => {
		const result = binarySearch([1, 2, 3, 4, 5, 7, 20, 49, 56, 800], 4);

		expect(result).toBe(3);
	});

	it('should return -1 if does not find the value', () => {
		const result = binarySearch([1, 2, 3, 4, 5, 7], 10);

		expect(result).toBe(-1);
	});
});
