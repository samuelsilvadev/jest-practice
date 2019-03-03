function compose(...fns) {
	return (initialValue) => {
		if (!initialValue) {
			throw new TypeError('Argument can\'t be empty');
		}

		return fns.reduceRight((value, fn) => fn(value), initialValue);
	};
}

module.exports = compose;
