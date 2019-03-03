const truncateString = require('../../modules/algorithms/truncate-string');

describe('Truncate a string Module', () => {
	it('should return a function', () => {
		expect(typeof truncateString).toBe('function');
	});

	it('should return `hey brow...` when pass truncateString(`hey brow I will call to you`, 6)', () => {
		const result = truncateString('hey brow I will call to you', 8);

		expect(result).toBe('hey brow...');
	});

	it('should return `hey` when pass truncateString(`hey`, 3)', () => {
		const result = truncateString('hey', 3);

		expect(result).toBe('hey');
	});

	it('should return the same word when `length` is not passed', () => {
		const result = truncateString('hey');

		expect(result).toBe('hey');
	});

	it('should throw an error if first argument is not passed', () => {
		const result = () => truncateString(undefined, 9);

		expect(result).toThrow(TypeError);
		expect(result).toThrowError('First argument should not be empty');
	});
});
