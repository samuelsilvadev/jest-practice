const repeatAString = require('../../modules/algorithms/repeat-a-string');

describe('Repeat a string Module', () => {
	it('should return a function', () => {
		expect(typeof repeatAString).toBe('function');
	});

	it('should return `#####` when call repeatAString(`#`, 5)', () => {
		const result = repeatAString('#', 5);

		expect(result).toBe('#####');
	});

	it('should return `ABCABC` when call repeatAString(`ABC`, 2)', () => {
		const result = repeatAString('ABC', 2);

		expect(result).toBe('ABCABC');
	});

	it('should return `one` when call repeatAString(`one`, 1)', () => {
		const result = repeatAString('one', 1);

		expect(result).toBe('one');
	});

	it('should return the same word when timesToRepeat to be `undefined`', () => {
		const result = repeatAString('hey');

		expect(result).toBe('hey');
	});

	it('should throw an error if `str` is `undefined`', () => {
		const result = () => repeatAString();

		expect(result).toThrow(TypeError);
		expect(result).toThrowError('str should not be empty');
	});
});
