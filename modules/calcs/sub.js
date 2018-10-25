function subtraction(...rest) {
	return rest.reduce((previous, current) => previous - current);
}

module.exports = subtraction;
