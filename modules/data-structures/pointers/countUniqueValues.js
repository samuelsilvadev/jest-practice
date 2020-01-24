function countUniqueValues(array) {
	if (!Array.isArray(array)) {
		throw new TypeError('The argument needs to be an array');
	}

	if (array.length === 0) {
		return 0;
	}

	const arrayCopy = [].concat(array);

	let firstPointer = 0;
	let secondPointer = 1;

	while (secondPointer < arrayCopy.length) {
		if (arrayCopy[firstPointer] !== arrayCopy[secondPointer]) {
			firstPointer++;

			arrayCopy[firstPointer] = arrayCopy[secondPointer];
		}

		secondPointer++;
	}

	return firstPointer + 1;
}

module.exports = countUniqueValues;
