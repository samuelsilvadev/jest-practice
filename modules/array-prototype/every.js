function every(arr, callback) {
	if (!arr || !callback) {
		return false;
	}

	for (let index = 0; index < arr.length; index++) {
		if (!callback(arr[index], index, arr)) {
			return false;
		}
	}

	return true;
}

module.exports = every;
