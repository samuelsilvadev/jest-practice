const findElement = require('../../modules/algorithms/find-element');

describe('Find element Module', () => {
	it('should return a function', () => {
		expect(typeof findElement).toBe('function');
	});

	it('should findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0) return `8`', () => {
		const result = findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0);

		expect(result).toBe(8);
	});

	it('should findElement([1, 3, 5, 9], (num) => num % 2 === 0) return `undefined`', () => {
		const result = findElement([1, 3, 5, 9], (num) => num % 2 === 0);

		expect(result).toBeUndefined();
	});

	it('should not break if nothing was passed and return `undefined`', () => {
		const result = findElement();

		expect(result).toBeUndefined();
	});
});
