const multiplication = require('./../../modules/calcs/multiplication');

describe('# MULTIPLICATION Module', () => {
	it('should return a function', () => {
		expect(typeof multiplication).toBe('function');
	});

	it('should return 4 when pass ( 2, 2 ) as argument', () => {
		const calc = multiplication(2, 2);

		expect(calc).toBe(4);
	});

	it('should return 32 when pass ( 2, 2, 2, 4 ) as argument', () => {
		const calc = multiplication(2, 2, 2, 4);

		expect(calc).toBe(32);
	});
});
