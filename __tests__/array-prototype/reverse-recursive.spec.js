const reverse = require('./../../modules/array-prototype/reverse-recursive');

describe('# ARRAY PROTOTYPE Module - REVERSE RECURSIVE', () => {
	it('should return a function', () => {
		expect(typeof reverse).toBe('function');
	});

	it('when pass [1] should return [1]', () => {
		expect(reverse([1])).toEqual([1]);
	});

	it('when pass [7, 8, 9] should return [9, 8, 7]', () => {
		expect(reverse([7, 8, 9])).toEqual([9, 8, 7]);
	});

	it('when pass [\'banana\', \'orange\'] should return [\'orange\', \'banana\']', () => {
		expect(reverse(['banana', 'orange'])).toEqual(['orange', 'banana']);
	});

	it('should return an empty array if I do not pass anything', () => {
		expect(reverse()).toEqual([]);
	});
});
