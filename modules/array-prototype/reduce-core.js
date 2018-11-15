'use strict';

function reduceCore(arr, callback, initialValue) {
	let acc = initialValue;
	let arrCopy = arr;

	if (initialValue === undefined) {
		[acc] = arrCopy;
		if (acc === undefined) {
			throw new TypeError('Reduce of empty array with no initial value');
		}
		arrCopy = arr.slice(1);
	}

	for (let index = 0; index < arrCopy.length; index++) {
		acc = callback(acc, arrCopy[index], index, arr);
	}

	return acc;
}

module.exports = reduceCore;
