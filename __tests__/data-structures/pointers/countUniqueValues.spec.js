const countUniqueValues = require('./../../../modules/data-structures/pointers/countUniqueValues');

describe('# Data Structure - Pointers - countUniqueValues', () => {
	it('should return an integer', () => {
		const count = countUniqueValues([1, 2, 3]);

		expect(typeof count).toBe('number');
	});

	['', 1, {}, () => {}].forEach(argument => {
		const parsedArgument = JSON.stringify(argument);

		it(`should only receive an array. ${parsedArgument} is not supported`, () => {
			const countFn = () => countUniqueValues(argument);

			expect(countFn).toThrowError('The argument needs to be an array');
		});
	});

	it('should return correct value - (3)', () => {
		const count = countUniqueValues([1, 2, 3]);

		expect(count).toBe(3);
	});

	it('should return correct value - (4)', () => {
		const count = countUniqueValues([1, 1, 2, 2, 2, 3, 3, 3, 4]);

		expect(count).toBe(4);
	});

	it('should return correct value - (5)', () => {
		const count = countUniqueValues([1, 2, 3, 3, 3, 3, 3, 5, 5, 5, 6, 6]);

		expect(count).toBe(5);
	});
});
