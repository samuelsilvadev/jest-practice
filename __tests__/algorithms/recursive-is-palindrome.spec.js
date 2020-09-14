const isPalindrome = require('../../modules/algorithms/recursive-is-palindrome');

describe('IsPalindrome Recursive Module ', () => {
	it('should return a function', () => {
		expect(typeof isPalindrome).toBe('function');
	});

	['tacocat', 'amanaplanacanalpanama'].forEach((word) => {
		it(`should return 'true' for the '${word}' palindrome`, () => {
			const result = isPalindrome(word);

			expect(result).toBe(true);
		});
	});

	['awesome', 'foobar'].forEach((word) => {
		it(`should return 'false' for the '${word}' non-palindrome`, () => {
			const result = isPalindrome(word);

			expect(result).toBe(false);
		});
	});

	it('should return `true` if word has only one letter', () => {
		const result = isPalindrome('a');

		expect(result).toBe(true);
	});
});
