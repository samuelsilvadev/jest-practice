const getIndexToInsert = require('../../modules/algorithms/index-to-insert');

describe('Index to Insert Module', () => {
	it('should be a function', () => {
		expect(typeof getIndexToInsert).toBe('function');
	});

	it('should getIndexToInsert([10, 20, 30, 40, 50], 35) return 3', () => {
		const result = getIndexToInsert([10, 20, 30, 40, 50], 35);

		expect(result).toBe(3);
	});

	it('should getIndexToInsert([10, 20, 30, 40, 50], 30) return 2', () => {
		const result = getIndexToInsert([10, 20, 30, 40, 50], 30);

		expect(result).toBe(2);
	});

	it('should getIndexToInsert([40, 60], 50) return 1', () => {
		const result = getIndexToInsert([40, 60], 50);

		expect(result).toBe(1);
	});

	it('should getIndexToInsert([3, 10, 5], 3) return 0', () => {
		const result = getIndexToInsert([3, 10, 5], 3);

		expect(result).toBe(0);
	});

	it('should not break if nothing was passed but should return -1', () => {
		const result = getIndexToInsert();

		expect(result).toBe(-1);
	});
});
