function division(...rest) {
	if (rest.length) {
		return rest.reduce((previous, current) => {
			if (current !== 0) {
				return previous / current;
			}
			return previous;
		});
	}
	throw new Error('The arguments should not be empty');
}

module.exports = division;
