const confirmEnding = require('./../../modules/algorithms/confirm-ending');

describe('Confirm ending Module', () => {
	it('should return a function', () => {
		expect(typeof confirmEnding).toBe('function');
	});

	it('should confirmEnding(`Batman`, `n`) return true', () => {
		const result = confirmEnding('Batman', 'n');

		expect(result).toBe(true);
	});

	it('should confirmEnding(`Congratulation`, `on`) return true', () => {
		const result = confirmEnding('Congratulation', 'on');

		expect(result).toBe(true);
	});

	it('should confirmEnding(`Connor`, `n`) return false', () => {
		const result = confirmEnding('Connor', 'n');

		expect(result).toBe(false);
	});

	it('should confirmEnding(`specification are easy if both are frozen`, `specification`) return false', () => {
		const result = confirmEnding('specification are easy if both are frozen', 'specification');

		expect(result).toBe(false);
	});

	it('should confirmEnding(`He has to give me a new name`, `name`) s return true', () => {
		const result = confirmEnding('He has to give me a new name', 'name');

		expect(result).toBe(true);
	});

	it('should confirmEnding(`Open sesame`, `game`) s return false', () => {
		const result = confirmEnding('`Open sesame', 'game');

		expect(result).toBe(false);
	});

	['str', 'target'].forEach((field) => {
		it(`should throw an error if ${field} is undefined`, () => {
			const args = {
				str: 'one',
				target: 'e',
			};

			args[field] = undefined;

			const result = () => confirmEnding(args.str, args.target);
			const expectedResult = `${field} should not be empty`;

			expect(result).toThrowError(expectedResult);
		});
	});

	it('should return false if empty string is passed', () => {
		const result = confirmEnding('', '');

		expect(result).toBe(false);
	});
});
