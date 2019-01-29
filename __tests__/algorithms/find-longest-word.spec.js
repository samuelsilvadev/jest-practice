const findLongestWord = require('../../modules/algorithms/find-longest-word');

describe('Find longest word Module', () => {
	it('should return a function', () => {
		expect(typeof findLongestWord).toBe('function');
	});

	it('should return `potato` when pass `potato and love`', () => {
		const result = findLongestWord('potato and love');
		const expectedResult = 'potato';

		expect(result).toBe(expectedResult);
	});

	it('should return `suit` when pass `suit and sum and I do not .`', () => {
		const result = findLongestWord('suit and sum and I do not .');
		const expectedResult = 'suit';

		expect(result).toBe(expectedResult);
	});

	it('should return `summer` when pass `suit and summer and I do not`', () => {
		const result = findLongestWord('suit and summer and I do not');
		const expectedResult = 'summer';

		expect(result).toBe(expectedResult);
	});

	it('should not break if empty string is pass', () => {
		const result = findLongestWord('');
		const expectedResult = '';

		expect(result).toBe(expectedResult);
	});

	it('should not break if undefined is pass', () => {
		const result = findLongestWord();
		const expectedResult = '';

		expect(typeof result).toBe('string');
		expect(result).toBe(expectedResult);
	});

	it('should throw an exception if other than string is pass', () => {
		const result = () => findLongestWord(0);

		expect(result).toThrowError('Argument should be a string');
	});
});
