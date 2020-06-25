/**
 * Given a variable arguments number, check if there are any duplicates
 *
 * @param {...any} args
 *
 * @returns {boolean}
 */
function areThereDuplicates(...args) {
	if (args.length === 0) {
		return false;
	}

	const duplicatesMap = {};

	for (let index = 0; index < args.length; index++) {
		const currentElement = args[index];

		if (duplicatesMap[currentElement]) {
			return true;
		}

		duplicatesMap[currentElement] = 1;
	}

	return false;
}

module.exports = areThereDuplicates;
