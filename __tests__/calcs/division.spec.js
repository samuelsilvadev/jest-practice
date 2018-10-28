const division = require('./../../modules/calcs/division');

describe('# DIVISION Module', () => {
	it('should return a function', () => {
		expect(typeof division).toBe('function');
	});

	it('should return 2 when pass ( 8, 4 ) as argument', () => {
		const calc = division(8, 4);

		expect(calc).toBe(2);
	});

	it('should return 1 when pass ( 8, 4, 2 ) as argument', () => {
		const calc = division(8, 4, 2);

		expect(calc).toBe(1);
	});

	it('should return 5 when pass ( 5, 0 ) as argument', () => {
		const calc = division(5, 0);

		expect(calc).toBe(5);
	});

	it('should return 0 when pass ( 0 ) as argument', () => {
		const calc = division(0);

		expect(calc).toBe(0);
	});

	it('should throw an exception if arguments.length was empty', () => {
		expect(() => division()).toThrow();
	});
});
