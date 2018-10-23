const sum = require('./../../modules/calcs/sum');

describe('# SUM Module', () => {
	it('should return a function', () => {
		expect(typeof sum).toBe('function');
	});

	it('should return 5 when pass 3 and 2 as argument', () => {
		const calc = sum(3, 2);

		expect(calc).toBe(5);
	});
});
