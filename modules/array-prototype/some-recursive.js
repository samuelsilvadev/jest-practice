function some(arr, callback) {
	return (function someInternal(arrayInternal, counter) {
		if (arrayInternal && arrayInternal.length > 0 && callback) {
			const head = arrayInternal[0];
			const tail = arrayInternal.slice(1);

			if (callback(head, counter, arr)) {
				return true;
			}

			return someInternal(tail, counter + 1);
		}
		return false;
	}(arr, 0));
}

module.exports = some;
