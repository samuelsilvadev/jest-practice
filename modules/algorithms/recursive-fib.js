/**
 * Returns the nth number in the Fibonacci sequence.
 *
 * @param {number} n
 *
 * @returns {number}
 */
function fib(n) {
	const numbersUntilN = [];

	const helperFib = (internalN) => {
		if (numbersUntilN.length >= n + 1) {
			return;
		}

		const penultimateNumber = numbersUntilN.slice(-2)[0];
		const nextNumber = internalN + (penultimateNumber || 0);

		if (numbersUntilN.length === 0) {
			numbersUntilN.push(1, 1);
		} else {
			numbersUntilN.push(nextNumber);
		}

		// eslint-disable-next-line consistent-return
		return helperFib(nextNumber);
	};

	helperFib(1);

	return numbersUntilN[n - 1];
}

module.exports = fib;
