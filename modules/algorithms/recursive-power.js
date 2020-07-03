/**
 * Returns the value of a base expression taken to a specified power.
 *
 * @param {number} base
 * @param {number} exponent
 *
 * @returns {number}
 */
function power(base, exponent) {
	if (exponent === 0) {
		return 1;
	}

	return base * power(base, exponent - 1);
}

module.exports = power;
