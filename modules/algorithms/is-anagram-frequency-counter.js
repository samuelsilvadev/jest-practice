/**
 *
 * @param {string} str1
 * @param {string} str2
 *
 * @returns {boolean}
 */
function isAnagram(str1, str2) {
	if (
		typeof str1 === 'undefined' ||
		typeof str2 === 'undefined' ||
		str1.length !== str2.length
	) {
		return false;
	}

	if (str1 === str2) {
		return true;
	}

	const anagramCounterMap = {};

	for (let index = 0; index < str1.length; index++) {
		const letter = str1[index];

		if (anagramCounterMap[letter]) {
			anagramCounterMap[letter]++;
		} else {
			anagramCounterMap[letter] = 1;
		}
	}

	for (let index = 0; index < str2.length; index++) {
		const letter = str2[index];

		if (anagramCounterMap[letter]) {
			anagramCounterMap[letter]--;
		} else {
			return false;
		}
	}

	return true;
}

module.exports = isAnagram;
