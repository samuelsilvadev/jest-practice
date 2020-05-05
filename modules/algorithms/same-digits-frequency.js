/**
 *  Checks if given two numbers, they have the same digits frequency.
 *
 * @param {number} number1
 * @param {number} number2
 *
 * @returns {boolean}
 */
function hasSameDigitsFrequency(number1, number2) {
	if (number1 === number2) {
		return true;
	}

	const numbers1Array = number1.toString().split('');
	const numbers2Array = number2.toString().split('');

	if (numbers1Array.length !== numbers2Array.length) {
		return false;
	}

	for (let index = 0; numbers1Array.length > index; index++) {
		let hasFoundSameDigit = false;

		for (let subIndex = 0; numbers2Array.length > subIndex; subIndex++) {
			if (numbers2Array[subIndex] === numbers1Array[index]) {
				hasFoundSameDigit = true;

				numbers2Array.splice(subIndex, 1);

				break;
			}
		}

		if (!hasFoundSameDigit) {
			return false;
		}
	}

	return true;
}

module.exports = hasSameDigitsFrequency;
