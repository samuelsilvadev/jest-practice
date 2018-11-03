function every(arr, callback) {
	return (function everyInternal(arrayInternal, counter) {
		if (!arr || !callback || arrayInternal.length === 0) {
			return true;
		}

		const head = arrayInternal[0];
		const tail = arrayInternal.slice(1);

		return !callback(head, counter, arr) ? false : everyInternal(tail, counter + 1);
	}(arr, 0));
}

module.exports = every;
