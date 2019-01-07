const celsiusToFahrenheit = require('../../modules/algorithms/celsius-to-fahrenheit');

describe('Convert Celsius to Fahrenheit Module', () => {
	it('should return a function', () => {
		expect(typeof celsiusToFahrenheit).toBe('function');
	});

	it('should return a number when a value is passed', () => {
		const result = celsiusToFahrenheit(32);

		expect(typeof result).toBe('number');
	});

	it('should calculate a correct result when a value is passed', () => {
		const result = celsiusToFahrenheit(30);

		expect(result).toEqual(86);
	});

	it('should calculate a correct result even when zero is passed', () => {
		const result = celsiusToFahrenheit(0);

		expect(result).toEqual(32);
	});

	it('should throw an error when pass a parameter different of number', () => {
		expect(() => celsiusToFahrenheit('0')).toThrowError('Celsius value needs to be a number');
	});

	it('should throw an error when a parameter is not passed', () => {
		expect(() => celsiusToFahrenheit()).toThrowError('Celsius parameter should not be empty');
	});
});
