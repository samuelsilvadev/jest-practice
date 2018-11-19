'use strict';

function find(arr = [], callback) {
	return (function findInternal(arrInternal, counter) {
		if (arrInternal.length === 0) {
			return undefined;
		}

		const head = arrInternal[0];
		const tail = arrInternal.slice(1);

		if (callback(head, counter, arr)) {
			return head;
		}

		return findInternal(tail, counter + 1);
	}(arr, 0));
}

module.exports = find;
