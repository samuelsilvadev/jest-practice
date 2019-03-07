function chunkArrayInGroups(arr = [], size) {
	const finalArr = [];
	let tempArr = [];

	for (let index = 0; arr.length > index; index++) {
		tempArr.push(arr[index]);

		const isLast = arr.length - 1 === index;
		const isArrayFull = tempArr.length === size;

		if (isArrayFull || isLast) {
			finalArr.push(tempArr);
			tempArr = [];
		}
	}

	return finalArr;
}

module.exports = chunkArrayInGroups;
