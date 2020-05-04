function maxSubArraySum(array, delimiter) {
	if (delimiter > array.length) {
		return null;
	}

	let maxSum = 0;

	for (let index = 0; index < array.length; index++) {
		let internalSum = 0;
		const length = index + delimiter;

		for (let subIndex = index; subIndex < length; subIndex++) {
			internalSum += array[subIndex] || 0;
		}

		maxSum = Math.max(maxSum, internalSum);
	}

	return maxSum;
}
