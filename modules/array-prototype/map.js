function map(array = [], callback = (item) => item) {
	if (array.length) {
		const newArray = [];

		for (let index = 0; index < array.length; index++) {
			const element = array[index];
			const modifiedValue = callback(element, index, array);

			newArray.push(modifiedValue);
		}
		return newArray;
	}
	throw new Error('The first parameter should not be empty');
}

module.exports = map;
