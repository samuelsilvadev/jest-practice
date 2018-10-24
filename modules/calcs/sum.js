function sum(...rest) {
	return rest.reduce((acc, actual) => acc + actual, 0);
}

module.exports = sum;
