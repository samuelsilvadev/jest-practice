function repeatAString(str, timesToRepeat = 1) {
	if (typeof str === 'undefined') {
		throw new TypeError('str should not be empty');
	}

	if (timesToRepeat === 1) {
		return str;
	}

	let finalString = '';

	for (let index = 1; index <= timesToRepeat; index++) {
		finalString += str;
	}

	return finalString;
}

module.exports = repeatAString;
