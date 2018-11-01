function filter(arr = [], callback) {
	return (function filterInternal(arrayInternal, counter) {
		const head = arrayInternal.slice(0, 1);
		const tail = arrayInternal.slice(1);
		return (
			arrayInternal.length === 0
				? []
				: (callback && callback(head, counter, arr) ? head : [])
					.concat(filterInternal(tail, counter + 1))
		);
	}(arr, 0));
}

module.exports = filter;
