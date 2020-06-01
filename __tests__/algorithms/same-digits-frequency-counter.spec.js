const hasSameDigits = require('../../modules/algorithms/same-digits-frequency-counter');

describe('Frequency Counter - same digit', () => {
	it('should check if it have the same frequency and return `true` with 122554 and 254521', () => {
		const result = hasSameDigits(122554, 254521);

		expect(result).toBe(true);
	});

	it('should check if it have the same frequency and return `true` with 182 and 281', () => {
		const result = hasSameDigits(182, 281);

		expect(result).toBe(true);
	});

	it('should check if it have the same frequency and return `false` with 34 and 14', () => {
		const result = hasSameDigits(182, 281);

		expect(result).toBe(true);
	});

	it('should check if it have the same frequency and return `false` with 322554 and 254521', () => {
		const result = hasSameDigits(322554, 254521);

		expect(result).toBe(false);
	});
});
