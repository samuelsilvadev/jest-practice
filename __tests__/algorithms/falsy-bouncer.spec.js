const falsyBouncer = require('../../modules/algorithms/falsy-bouncer');

describe('Falsy Bouncer Module', () => {
	it('should return a function', () => {
		expect(typeof falsyBouncer).toBe('function');
	});

	it('should falsyBouncer([7, "ate", "", false, 9]) return [7, "ate", 9]', () => {
		const result = falsyBouncer([7, 'ate', '', false, 9]);

		expect(result).toEqual([7, 'ate', 9]);
	});

	it('should falsyBouncer(["a", "b", "c"]) return ["a", "b", "c"]', () => {
		const result = falsyBouncer(['a', 'b', 'c']);

		expect(result).toEqual(['a', 'b', 'c']);
	});

	it('should falsyBouncer([false, null, 0, NaN, undefined, ""]) return []', () => {
		const result = falsyBouncer([false, null, 0, NaN, undefined, '']);

		expect(result).toEqual([]);
	});

	it('should falsyBouncer([1, null, NaN, 2, undefined]) return [1, 2]', () => {
		const result = falsyBouncer([1, null, NaN, 2, undefined]);

		expect(result).toEqual([1, 2]);
	});

	it('should not break if nothing was passed', () => {
		const result = falsyBouncer();

		expect(result).toEqual([]);
	});
});
