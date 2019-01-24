function factoralize(number) {
	if (typeof number === 'undefined') {
		throw new TypeError('Argument should not be empty');
	}

	if (typeof number !== 'number') {
		throw new TypeError('Argument needs to be a number');
	}

	if (number === 0) {
		return 1;
	}

	let factorialResult = 1;

	for (let index = 1; index <= number; index++) {
		factorialResult *= index;
	}

	return factorialResult;
}

module.exports = factoralize;
