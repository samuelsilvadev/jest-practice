const polishNotation = require('../../modules/algorithms/polish-notation');

describe('Polish Notation', () => {
	it('should return a function', () => {
		expect(typeof polishNotation).toBe('function');
	});

	it('should add correctly', () => {
		const expression = '3 4 +';
		const result = polishNotation(expression);

		expect(result).toBe(7);
	});

	it('should subtract correctly', () => {
		const expression = '3 4 -';
		const result = polishNotation(expression);

		expect(result).toBe(-1);
	});

	it('should multiply correctly', () => {
		const expression = '5 5 *';
		const result = polishNotation(expression);

		expect(result).toBe(25);
	});

	it('should divide correctly', () => {
		const expression = '5 5 /';
		const result = polishNotation(expression);

		expect(result).toBe(1);
	});

	it('should add correctly with multiple numbers', () => {
		const expression = '5 5 / 3 4 + 1 2 - + +';
		const result = polishNotation(expression);

		expect(result).toBe(7);
	});

	it('should return 0 when an invalid argument be passed', () => {
		const expression = '';
		const result = polishNotation(expression);

		expect(result).toBe(0);
	});
});
