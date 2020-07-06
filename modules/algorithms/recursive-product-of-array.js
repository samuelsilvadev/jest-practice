/**
 * Given an array, calculate its product.
 *
 * @param {Array<number>} values
 *
 * @returns {number}
 */
function getProductOf(values) {
	if (values.length === 1) {
		return values[0];
	}

	return values[0] * getProductOf(values.slice(1));
}

module.exports = getProductOf;
