const isValidParentheses = require('../../modules/algorithms/valid-parentheses');

describe('Valid Parentheses Module', () => {
	it('should be a function', () => {
		expect(typeof isValidParentheses).toBe('function');
	});

	['(())', '(())((()())())', '()(()())', '(()()())', '()'].forEach((parentheses) => {
		it(`should return 'true' to ${parentheses}`, () => {
			const result = isValidParentheses(parentheses);

			expect(result).toBe(true);
		});
	});

	['(()))', '(((())', '(((()))(()())', ')(()))', '())))', ')'].forEach((parentheses) => {
		it(`should return 'false' to ${parentheses}`, () => {
			const result = isValidParentheses(parentheses);

			expect(result).toBe(false);
		});
	});
});
