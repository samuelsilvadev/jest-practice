function reverse(arr = []) {
	const newArr = [];
	for (let index = (arr.length - 1); index >= 0; index--) {
		const element = arr[index];

		newArr.push(element);
	}
	return newArr;
}

module.exports = reverse;
