/**
 * Given a number get the sum from zero until the number.
 *
 * @param {number} n
 *
 * @returns {number}
 */
function range(n) {
	if (n === 1) {
		return n;
	}

	return n + range(n - 1);
}

module.exports = range;
