const User = require('../../modules/algorithms/old-calc-codewars');

describe('calcPointsBasedOnRanks module', () => {
	it('should export a function', () => {
		expect(typeof User).toBe('function');
	});

	it('should start with progress and rank correctly', () => {
		const user = new User();

		expect(user.progress).toBe(0);
		expect(user.rank).toBe(-8);
	});

	it('should throw an error if not instantiate the User constructor function', () => {
		expect(() => User()).toThrowError('You should use `new` to use this function');
	});

	describe('incProgress', () => {
		it('should increment progress correctly when change the rank', () => {
			const user = new User();

			user.incProgress(-7);

			expect(user.progress).toBe(10);
		});

		it('should increment progress even with the same rank', () => {
			const user = new User();

			user.incProgress(-8);

			expect(user.progress).toBe(3);
		});

		it('should apply rank of -4 and the resulting user rank is expected to be -7', () => {
			const user = new User();

			user.incProgress(-4);

			expect(user.rank).toBe(-7);
		});
	});
});
