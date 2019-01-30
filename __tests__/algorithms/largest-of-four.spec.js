const largestOfFour = require('../../modules/algorithms/largest-of-four');

describe('Largest of four arrays', () => {
	it('should return a function', () => {
		expect(typeof largestOfFour).toBe('function');
	});

	it('should return an array', () => {
		const result = largestOfFour([
			[4, 5, 1, 3],
			[13, 27, 18, 26],
			[32, 35, 37, 39],
			[1000, 1001, 857, 1],
		]);

		expect(Array.isArray(result)).toBe(true);
	});

	it('should return `[27, 5, 39, 1001]`', () => {
		const result = largestOfFour([
			[13, 27, 18, 26],
			[4, 5, 1, 3],
			[32, 35, 37, 39],
			[1000, 1001, 857, 1],
		]);
		const expectedResult = [27, 5, 39, 1001];

		expect(result).toEqual(expectedResult);
	});

	it('should return `[9, 35, 97, 1000000]`', () => {
		const result = largestOfFour([
			[4, 9, 1, 3],
			[13, 35, 18, 26],
			[32, 35, 97, 39],
			[1000000, 1001, 857, 1],
		]);
		const expectedResult = [9, 35, 97, 1000000];

		expect(result).toEqual(expectedResult);
	});

	it('should return `[25, 48, 21, -3]`', () => {
		const result = largestOfFour([
			[17, 23, 25, 12],
			[25, 7, 34, 48],
			[4, -10, 18, 21],
			[-72, -3, -17, -10],
		]);
		const expectedResult = [25, 48, 21, -3];

		expect(result).toEqual(expectedResult);
	});

	it('should return `[]` if not array of arrays is pass', () => {
		const result = largestOfFour([
			'',
			1,
			true,
		]);
		const expectedResult = [];

		expect(result).toEqual(expectedResult);
	});

	it('should not break if `undefined` is pass', () => {
		const result = largestOfFour(undefined);
		const expectedResult = [];

		expect(result).toEqual(expectedResult);
	});

	it('should throw an exception if other than array is pass', () => {
		const result = () => largestOfFour('');
		const expectedResult = 'Argument should be an array';

		expect(result).toThrowError(expectedResult);
	});
});
