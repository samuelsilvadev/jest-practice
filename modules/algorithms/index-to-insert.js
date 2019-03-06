function isBigger(num) {
	return function isBiggerFindIndex(value) {
		return value >= num;
	};
}

function getIndexToInsert(arr = [], num) {
	return arr.findIndex(isBigger(num));
}

module.exports = getIndexToInsert;
