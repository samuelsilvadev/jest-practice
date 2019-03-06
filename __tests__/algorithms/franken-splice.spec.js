const frankenSplice = require('../../modules/algorithms/franken-splice');

describe('Fraken Splice Module', () => {
	it('should return a function', () => {
		expect(typeof frankenSplice).toBe('function');
	});

	it('should `frankenSplice([1, 2, 3], [4, 5], 1)` return `[4, 1, 2, 3, 5]`', () => {
		const result = frankenSplice([1, 2, 3], [4, 5], 1);

		expect(result).toEqual([4, 1, 2, 3, 5]);
	});

	it("should `frankenSplice([1, 2], ['a', 'b'], 1)` return `['a', 1, 2, 'b']`", () => {
		const result = frankenSplice([1, 2], ['a', 'b'], 1);

		expect(result).toEqual(['a', 1, 2, 'b']);
	});

	it("should `frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2)` return `['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes']`", () => {
		const result = frankenSplice(
			['claw', 'tentacle'],
			['head', 'shoulders', 'knees', 'toes'],
			2,
		);

		expect(result).toEqual(['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes']);
	});

	it('should not broken if nothing was passed', () => {
		const result = frankenSplice();

		expect(result).toEqual([]);
	});
});
