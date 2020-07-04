/**
 * Returns the calculated factorial of a value.
 *
 * @param {number} value
 *
 * @returns {number}
 */
function factorial(value) {
	if (value === 1 || value === 0) {
		return 1;
	}

	return value * factorial(value - 1);
}

module.exports = factorial;
