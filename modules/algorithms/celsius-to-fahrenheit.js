function celsiusToFahrenheit(celsius) {
	if (typeof celsius === 'undefined') {
		throw new Error('Celsius parameter should not be empty');
	}

	if (typeof celsius !== 'number') {
		throw new TypeError('Celsius value needs to be a number');
	}

	return ((celsius * (9 / 5)) + 32);
}

module.exports = celsiusToFahrenheit;
