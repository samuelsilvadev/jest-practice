function sumZero(array) {
	if (!Array.isArray(array)) {
		throw new TypeError('The argument needs to be an array');
	}

	let head = 0;
	let tail = array.length - 1;

	while (head < tail) {
		if (array[head] === 0 || array[tail] === 0) {
			break;
		}

		const delta = array[head] + array[tail];

		if (delta < 0) {
			tail--;
		} else if (delta > 0) {
			head++;
		} else {
			return [array[head], array[tail]];
		}
	}

	return [];
}

module.exports = sumZero;
