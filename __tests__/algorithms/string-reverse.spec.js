const reverseString = require('../../modules/algorithms/reverse-string');

describe('Reverse a string', () => {
	it('should return a function', () => {
		expect(typeof reverseString).toBe('function');
	});

	it('should return a reversed string when `orange` was passed', () => {
		const expectedResult = reverseString('orange');

		expect(expectedResult).toBe('egnaro');
	});

	it('should return a reversed string when `potato` was passed', () => {
		const expectedResult = reverseString('potato');

		expect(expectedResult).toBe('otatop');
	});

	it('should return an empty string if nothing was passed', () => {
		const expectedResult = reverseString('');

		expect(expectedResult).toBe('');
	});

	it('should throw an error if a argument different of string was passed', () => {
		const expectedResult = () => reverseString(0);

		expect(expectedResult).toThrowError('Argument needs to be a string');
	});
});
