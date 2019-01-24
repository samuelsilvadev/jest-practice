const factoralize = require('../../modules/algorithms/factoralize');

describe('Factoralize a number', () => {
	it('should return a function', () => {
		expect(typeof factoralize).toBe('function');
	});

	it('should return a number', () => {
		const expectedResult = factoralize(1);

		expect(typeof expectedResult).toBe('number');
	});

	it('should return `120` when `5` was passed', () => {
		const expectedResult = factoralize(5);

		expect(expectedResult).toBe(120);
	});

	it('should return `2432902008176640000` when `20` was passed', () => {
		const expectedResult = factoralize(20);

		expect(expectedResult).toBe(2432902008176640000);
	});

	it('should return `1` when `0` was passed', () => {
		const expectedResult = factoralize(0);

		expect(expectedResult).toBe(1);
	});

	it('should throw an error if a argument different of number was passed', () => {
		const expectedResult = () => factoralize('0');

		expect(expectedResult).toThrowError('Argument needs to be a number');
	});

	it('should throw an error if an undefined argument was passed', () => {
		const expectedResult = () => factoralize();

		expect(expectedResult).toThrowError('Argument should not be empty');
	});
});
