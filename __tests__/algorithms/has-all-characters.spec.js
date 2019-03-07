const hasAllCharacters = require('../../modules/algorithms/has-all-characters');

describe('It Has all characthers Module', () => {
	it('should be a function', () => {
		expect(typeof hasAllCharacters).toBe('function');
	});

	it('should hasAllCharacters(["hello", "hey"]) return false', () => {
		const result = hasAllCharacters(['hello', 'hey']);

		expect(result).toBe(false);
	});

	it('should hasAllCharacters(["hello", "Hello"]) return true', () => {
		const result = hasAllCharacters(['hello', 'Hello']);

		expect(result).toBe(true);
	});

	it('should hasAllCharacters(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) return true', () => {
		const result = hasAllCharacters([
			'zyxwvutsrqponmlkjihgfedcba',
			'qrstu',
		]);

		expect(result).toBe(true);
	});

	it('should hasAllCharacters(["hello", "neo"]) return false', () => {
		const result = hasAllCharacters(['hello', 'neo']);

		expect(result).toBe(false);
	});

	it('should return false if nothing was passed', () => {
		const result = hasAllCharacters();

		expect(result).toBe(false);
	});
});
