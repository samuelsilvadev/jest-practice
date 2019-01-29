const SPACE_REGEX = /\s/;

function findLongestWord(str = '') {
	if (typeof str !== 'string') {
		throw new TypeError('Argument should be a string');
	}

	const stringPartsArr = str.split(SPACE_REGEX);
	let longestWord = '';

	for (let index = 0; stringPartsArr.length > index; index++) {
		const actualWord = stringPartsArr[index];

		if (actualWord.length >= longestWord.length) {
			longestWord = actualWord;
		}
	}

	return longestWord;
}

module.exports = findLongestWord;
