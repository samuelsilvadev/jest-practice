/**
 * Sum the maximum value of a subarray, based on a delimiter parameter.
 *
 * @param {Array} array - value to be sum.
 * @param {number} delimiter
 *
 * @returns {number} maxSum
 */
function maxSubArraySum(array, delimiter) {
	if (array.length < delimiter) {
		return null;
	}

	let initialMaxSum = 0;

	for (let index = 0; delimiter > index; index++) {
		initialMaxSum += array[index];
	}

	let sum = 0;
	let previousSum = initialMaxSum;

	for (let index = delimiter; array.length > index; index++) {
		previousSum = previousSum - array[index - delimiter] + array[index];

		sum = Math.max(previousSum, sum);
	}

	return sum;
}

module.exports = maxSubArraySum;
