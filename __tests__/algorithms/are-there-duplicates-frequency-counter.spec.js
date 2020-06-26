const areThereDuplicates = require('../../modules/algorithms/are-there-duplicates-frequency-counter');

describe('IsAnagram Module', () => {
	it('should be a function', () => {
		expect(typeof areThereDuplicates).toBe('function');
	});

	it('should return `false` if there is not any duplicate', () => {
		const result = areThereDuplicates(1, 2, 3, 4, 5);

		expect(result).toBeFalsy();
	});

	it('should return `true` if there is any duplicate', () => {
		const result = areThereDuplicates(1, 1, 2, 2, 5);

		expect(result).toBeTruthy();
	});
});
