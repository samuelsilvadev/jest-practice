function sum(...rest) {
	return rest.reduce((previous, current) => previous + current, 0);
}

module.exports = sum;
