function hasAllCharacters(arr = []) {
	const [first, second] = arr;

	if (!first || !second) {
		return false;
	}

	const characthers = second.split('');

	return characthers.every((characther) => {
		const LETTER_REGEX = new RegExp(characther, 'gi');
		const matchedResult = first.match(LETTER_REGEX);

		return !!matchedResult;
	});
}

module.exports = hasAllCharacters;
