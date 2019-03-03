function truncateString(str, length) {
	if (typeof str === 'undefined') {
		throw new TypeError('First argument should not be empty');
	}

	if (!length) {
		return str;
	}

	if (str.length <= length) {
		return str;
	}

	const cuttedString = str.substring(0, length);

	return `${cuttedString}...`;
}

module.exports = truncateString;
