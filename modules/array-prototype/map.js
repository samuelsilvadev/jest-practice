function map(array, callback) {
	if (typeof array !== 'undefined' && array.length) {
		const newArray = [];

		for (let index = 0; index < array.length; index++) {
			const element = array[index];
			let modifiedValue = element;

			if (callback && typeof callback === 'function') {
				modifiedValue = callback(element, index, array);
			}

			newArray.push(modifiedValue);
		}
		return newArray;
	}
	throw new Error('The first parameter should not be empty');
}

module.exports = map;
