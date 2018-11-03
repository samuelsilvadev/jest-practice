function some(arr, callback) {
	if (arr && callback) {
		for (let index = 0; index < arr.length; index++) {
			if (callback(arr[index], index, arr)) {
				return true;
			}
		}
	}
	return false;
}

module.exports = some;
