function maxSubArraySum(array, delimiter) {
	if (delimiter > array.length) {
		return null;
	}

	let maxSum = 0;

	for (let index = 0; index < array.length; index++) {
		let internalSum = 0;
		const length = index + delimiter;
		console.log('maxSubArraySum -> length', length);

		for (let subIndex = index; subIndex < length; subIndex++) {
			internalSum += array[subIndex] || 0;
			// console.log('maxSubArraySum -> array[subIndex]', array[subIndex]);
		}

		maxSum = Math.max(maxSum, internalSum);
	}

	return maxSum;
}

module.exports = maxSubArraySum;
