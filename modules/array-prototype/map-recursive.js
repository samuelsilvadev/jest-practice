function map(arr = [], callback = (item) => item) {
	if (arr.length) {
		return (function mapInternal(arrInternal, counter) {
			const [first, ...remain] = arrInternal;

			return arrInternal.length === 0
				? []
				: [
					callback(first, counter, arr),
					...mapInternal(remain, counter + 1),
				];
		}(arr, 0));
	}
	throw new Error('The first parameter should not be empty');
}

module.exports = map;
