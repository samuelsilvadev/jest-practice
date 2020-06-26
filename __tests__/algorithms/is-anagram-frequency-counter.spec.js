const isAnagram = require('../../modules/algorithms/is-anagram-frequency-counter');

describe('IsAnagram Module', () => {
	it('should be a function', () => {
		expect(typeof isAnagram).toBe('function');
	});

	it('should be `false` if some argument is `undefined`', () => {
		const isSomeUndefinedAnagram = isAnagram('abc');
		const isSomeUndefinedAnagram2 = isAnagram(undefined, 'abc');

		expect(isSomeUndefinedAnagram).toBeFalsy();
		expect(isSomeUndefinedAnagram2).toBeFalsy();
	});

	it('should be `false` if words are not anagrams', () => {
		const isAnagramResult = isAnagram('abc', 'cca');

		expect(isAnagramResult).toBeFalsy();
	});

	it('should be `true` if words are anagrams', () => {
		const isAnagramResult = isAnagram('abc', 'bca');

		expect(isAnagramResult).toBeTruthy();
	});

	it('should be `true` if words are more complex anagrams', () => {
		const isAnagramResult = isAnagram('anagram', 'nagaram');

		expect(isAnagramResult).toBeTruthy();
	});
});
