function reverseString(str) {
	if (typeof str !== 'string') {
		throw new TypeError('Argument needs to be a string');
	}

	const newStr = [];

	for (let index = str.length; index >= 0; index--) {
		newStr.push(str[index]);
	}

	return newStr.join('');
}

module.exports = reverseString;
