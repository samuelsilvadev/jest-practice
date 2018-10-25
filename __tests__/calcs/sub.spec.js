const sub = require('./../../modules/calcs/sub');

describe('# SUB Module', () => {
	it('should return a function', () => {
		expect(typeof sub).toBe('function');
	});

	it('should return 0 when pass ( 2, 2 ) as argument', () => {
		const calc = sub(2, 2);

		expect(calc).toBe(0);
	});

	it('should return 3 when pass ( 5, 2 ) as argument', () => {
		const calc = sub(5, 2);

		expect(calc).toBe(3);
	});

	it('should return 2 when pass ( 5, 3 ) as argument', () => {
		const calc = sub(5, 3);

		expect(calc).toBe(2);
	});

	it('should return 0 when pass ( 5, 3, 2 ) as argument', () => {
		const calc = sub(5, 3, 2);

		expect(calc).toBe(0);
	});
});
