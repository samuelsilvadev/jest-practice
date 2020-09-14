/**
 * Analyze whether a string is palindrome or not.
 *
 * @param {string} word
 *
 * @returns {boolean} isPalindrome
 */
function isPalindrome(word) {
	const { length: wordLength } = word;

	if (word[0] !== word[wordLength - 1]) {
		return false;
	}

	if (wordLength <= 1) {
		return true;
	}

	return isPalindrome(word.substring(1, wordLength - 1));
}

module.exports = isPalindrome;
