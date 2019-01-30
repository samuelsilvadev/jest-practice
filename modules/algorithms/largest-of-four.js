function largestOfFour(matrix = []) {
	if (!Array.isArray(matrix)) {
		throw new TypeError('Argument should be an array');
	}

	const finalArray = [];

	for (let index = 0; index < matrix.length; index++) {
		const value = matrix[index];
		const isArray = Array.isArray(value);

		if (isArray) {
			let largestValue = -Infinity;
			for (let internIndex = 0; internIndex < value.length; internIndex++) {
				const element = value[internIndex];

				if (element > largestValue) {
					largestValue = element;
				}
			}

			finalArray.push(largestValue);
		}
	}

	return finalArray;
}

module.exports = largestOfFour;
