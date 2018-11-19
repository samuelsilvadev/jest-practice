'use strict';

function find(arr = [], callback) {
	for (let index = 0; index < arr.length; index++) {
		if (callback(arr[index], index, arr)) {
			return arr[index];
		}
	}
	return undefined;
}

module.exports = find;
