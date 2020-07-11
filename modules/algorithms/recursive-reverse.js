/**
 *	Reverse a given string
 *
 * @param {string} value
 *
 * @returns {string}
 */
function reverse(value) {
	if (value.length <= 1) {
		return value;
	}

	const lastLetter = value.slice(-1);

	return lastLetter + reverse(value.slice(0, -1));
}

module.exports = reverse;
