const chunkArrayInGroups = require('../../modules/algorithms/chunk-array-in-groups');

describe('Chunk Array in Groups Module', () => {
	it('should be a function', () => {
		expect(typeof chunkArrayInGroups).toBe('function');
	});

	it('should chunkArrayInGroups(["a", "b", "c", "d"], 2) return [["a", "b"], ["c", "d"]]', () => {
		const result = chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);

		expect(result).toEqual([['a', 'b'], ['c', 'd']]);
	});

	it('should chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) return [[0, 1, 2], [3, 4, 5]]', () => {
		const result = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);

		expect(result).toEqual([[0, 1, 2], [3, 4, 5]]);
	});

	it('should chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]', () => {
		const result = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);

		expect(result).toEqual([[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
	});

	it('should return an empty array if nothing was passed', () => {
		const result = chunkArrayInGroups();

		expect(result).toEqual([]);
	});
});
