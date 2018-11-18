'use strict';

function isInitialValueUndefined(initialValue) {
	return initialValue === undefined;
}

function reduce(arr, callback, initialValue) {
	const acc = isInitialValueUndefined(initialValue) ? arr[0] : initialValue;
	const arrCopy = isInitialValueUndefined(initialValue) ? arr.slice(1) : arr;

	if (acc === undefined) {
		throw new TypeError('Reduce of empty array with no initial value');
	}

	return (function reduceInternal(accInternal, arrInternal, counter) {
		const head = arrInternal[0];
		const tail = arrInternal.slice(1);

		if (arrInternal.length === 0) {
			return accInternal;
		}

		return reduceInternal(
			callback(accInternal, head, counter, arr),
			tail,
			counter + 1,
		);
	}(acc, arrCopy, 0));
}

module.exports = reduce;
