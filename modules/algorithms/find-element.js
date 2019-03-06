function findElement(arr = [], fn) {
	if (!fn) {
		return undefined;
	}

	return arr.find(fn);
}

module.exports = findElement;
