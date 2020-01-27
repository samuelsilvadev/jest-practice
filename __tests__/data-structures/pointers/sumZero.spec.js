const sumZero = require('./../../../modules/data-structures/pointers/sumZero');

describe('# Data Structure - Pointers - sumZero', () => {
	it('should return an array', () => {
		const sumZeroItems = sumZero([3, 2, 1, 0, -1]);

		expect(Array.isArray(sumZeroItems)).toBe(true);
	});

	['', 1, {}, () => {}].forEach(argument => {
		const parsedArgument = JSON.stringify(argument);

		it(`should only receive an array. ${parsedArgument} is not supported`, () => {
			const sumZeroFn = () => sumZero(argument);

			expect(sumZeroFn).toThrowError('The argument needs to be an array');
		});
	});

	describe('should return valid results', () => {
		it('should return [1, -1]', () => {
			const sumZeroItems = sumZero([3, 2, 1, 0, -1]);

			expect(sumZeroItems).toEqual([1, -1]);
		});

		it('should return [2, -2]', () => {
			const sumZeroItems = sumZero([3, 2, 1, 0, -2]);

			expect(sumZeroItems).toEqual([2, -2]);
		});

		it('should return [5, -5]', () => {
			const sumZeroItems = sumZero([10, 8, 7, 5, 2, 1, 0, -5, -6, -9]);

			expect(sumZeroItems).toEqual([5, -5]);
		});
	});
});
