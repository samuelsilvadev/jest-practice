const titleCase = require('../../modules/algorithms/title-case');

describe('TitleCase Module', () => {
	it('should return a function', () => {
		expect(typeof titleCase).toBe('function');
	});

	it('should `titleCase(\'I\'m a little tea pot\')` return I\'m A Little Tea Pot.', () => {
		const result = titleCase('I\'m a little tea pot');

		expect(result).toBe('I\'m A Little Tea Pot');
	});

	it('should titleCase(\'sHoRt AnD sToUt\') return Short And Stout', () => {
		const result = titleCase('sHoRt AnD sToUt');

		expect(result).toBe('Short And Stout');
	});

	it('should titleCase(\'HERE IS MY HANDLE\') return Here Is My Handle', () => {
		const result = titleCase('HERE IS MY HANDLE');

		expect(result).toBe('Here Is My Handle');
	});

	it('should throw an exception if the string is not passed', () => {
		const result = () => titleCase();

		expect(result).toThrow(TypeError);
		expect(result).toThrowError('str should not be empty');
	});

	it('should throw an exception if the string is not a string', () => {
		const result = () => titleCase(1);

		expect(result).toThrow(TypeError);
		expect(result).toThrowError('str should be a string');
	});
});
