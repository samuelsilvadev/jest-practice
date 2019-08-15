const VALID_MATCH = '()';

function isValidParentheses(parens) {
	if (!parens || parens.length === 1) {
		return false;
	}

	let cursor = 0;
	const parensArray = parens.split('');

	while (parensArray.length > 1 && cursor <= parensArray.length) {
		// current item is equals to previous one?
		const isValid = `${parensArray[cursor - 1]}${parensArray[cursor]}` === VALID_MATCH;

		if (isValid) {
			// remove the previous and the current item
			parensArray.splice(cursor - 1, 2);
			cursor -= 2;
		} else {
			cursor++;
		}
	}

	return parensArray.length === 0;
}

module.exports = isValidParentheses;
