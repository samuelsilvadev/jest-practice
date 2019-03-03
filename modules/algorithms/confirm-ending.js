function confirmEnding(str, target) {
	if (typeof str === 'undefined') {
		throw new TypeError('str should not be empty');
	}

	if (typeof target === 'undefined') {
		throw new TypeError('target should not be empty');
	}

	if (!str || !target) {
		return false;
	}

	const strLength = str.length;
	const targetLength = target.length;
	const indexToCheck = strLength - targetLength;
	const strFinalPart = str.substring(indexToCheck);
	const areEndingsEquals = strFinalPart === target;

	return areEndingsEquals;
}

module.exports = confirmEnding;
