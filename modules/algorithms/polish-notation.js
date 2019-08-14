const OPERATIONS = {
	'+': (x, y) => x + y,
	'-': (x, y) => x - y,
	'*': (x, y) => x * y,
	'/': (x, y) => x / y,
};

function polishNotation(expression) {
	if (typeof expression !== 'string' || !expression) {
		return 0;
	}

	const numbersStack = [];
	const splittedExpression = expression.split(/\s/);

	for (let index = 0; index < splittedExpression.length; index++) {
		const value = splittedExpression[index];

		if (!Number.isNaN(Number(value))) {
			numbersStack.push(Number(value));
		} else {
			const [penultimate, last] = numbersStack.splice(-2, 2);
			const result = OPERATIONS[value](penultimate, last);

			numbersStack.push(result);
		}
	}

	return numbersStack[0];
}

module.exports = polishNotation;
