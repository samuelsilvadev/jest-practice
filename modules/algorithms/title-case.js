const SPACE_REGEX = /\s/;

function capitalizeFirstLetter(word) {
	return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

function titleCase(str) {
	if (typeof str === 'undefined') {
		throw new TypeError('str should not be empty');
	}

	if (typeof str !== 'string') {
		throw new TypeError('str should be a string');
	}

	const words = str.split(SPACE_REGEX);
	const wordsCapitalized = words.map(capitalizeFirstLetter).join(' ');

	return wordsCapitalized;
}

module.exports = titleCase;
