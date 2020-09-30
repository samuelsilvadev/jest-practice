function getAverage(rightValue, leftValue) {
	return Math.round((rightValue - leftValue) / 2);
}

/**
 * Search for a value using binary search algorithm.
 *
 * @param {Array} array - sorted array.
 * @param {*} value - Value to be looked up on the array.
 */
function binarySearch(array, value) {
	let leftPointer = 0;
	let rightPointer = array.length - 1;
	let middlePointer = getAverage(rightPointer, leftPointer);

	while (leftPointer < rightPointer) {
		const currentMiddleValue = array[middlePointer];

		if (currentMiddleValue === value) {
			return middlePointer;
		}

		if (currentMiddleValue < value) {
			leftPointer = middlePointer;
			middlePointer =
				getAverage(rightPointer, leftPointer) + middlePointer;
		} else if (currentMiddleValue > value) {
			rightPointer = middlePointer;
			middlePointer = getAverage(rightPointer, leftPointer);
		}
	}

	return -1;
}

module.exports = binarySearch;
