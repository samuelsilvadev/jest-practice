const sum = require('./../../modules/calcs/sum');

describe('# SUM Module', () => {
	it('should return a function', () => {
		expect(typeof sum).toBe('function');
	});

	it('should return 5 when pass ( 3, 2 ) as argument', () => {
		const calc = sum(3, 2);

		expect(calc).toBe(5);
	});

	it('should return 10 when pass( 4, 4, 2 ) as argument', () => {
		const calc = sum(4, 4, 2);

		expect(calc).toBe(10);
	});

	it('should not break if I not pass nothing', () => {
		const calc = sum();

		expect(calc).toBe(0);
	});
});
