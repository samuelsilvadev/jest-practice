const factoralize = require('../../modules/algorithms/factoralize');

describe('Factoralize a number', () => {
	it('should return a function', () => {
		expect(typeof factoralize).toBe('function');
	});

	it('should return a number', () => {
		const result = factoralize(1);
		const expectedResult = 'number';

		expect(typeof result).toBe(expectedResult);
	});

	it('should return `120` when `5` is pass', () => {
		const result = factoralize(5);
		const expectedResult = 120;

		expect(result).toBe(expectedResult);
	});

	it('should return `2432902008176640000` when `20` is pass', () => {
		const result = factoralize(20);
		const expectedResult = 2432902008176640000;

		expect(result).toBe(expectedResult);
	});

	it('should return `1` when `0` is pass', () => {
		const result = factoralize(0);
		const expectedResult = 1;

		expect(result).toBe(expectedResult);
	});

	it('should throw an error if a argument different of number is pass', () => {
		const result = () => factoralize('0');
		const expectedResult = 'Argument needs to be a number';

		expect(result).toThrowError(expectedResult);
	});

	it('should throw an error if an undefined argument is pass', () => {
		const result = () => factoralize();
		const expectedResult = 'Argument should not be empty';

		expect(result).toThrowError(expectedResult);
	});
});
