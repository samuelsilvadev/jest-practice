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

	const frequencyCounterNumber1 = {};
	const frequencyCounterNumber2 = {};

	for (const digit of numbers1Array) {
		frequencyCounterNumber1[digit] =
			(frequencyCounterNumber1[digit] || 0) + 1;
	}

	for (const digit of numbers2Array) {
		frequencyCounterNumber2[digit] =
			(frequencyCounterNumber2[digit] || 0) + 1;
	}

	for (const key of Object.keys(frequencyCounterNumber1)) {
		if (
			!frequencyCounterNumber2[key] ||
			frequencyCounterNumber1[key] !== frequencyCounterNumber2[key]
		) {
			return false;
		}
	}

	return true;
}

module.exports = hasSameDigitsFrequency;
