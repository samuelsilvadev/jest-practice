function reverse(arr) {
	if (!arr || arr.length === 0) {
		return [];
	}

	return arr.slice(-1).concat(reverse(arr.slice(-arr.length, -1)));
}

module.exports = reverse;
