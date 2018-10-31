function filter(arr = [], callback) {
	const newArr = [];
	for (let index = 0; index < arr.length; index++) {
		const element = arr[index];
		if (callback && callback(element, index, arr)) {
			newArr.push(element);
		}
	}
	return newArr;
}

module.exports = filter;
