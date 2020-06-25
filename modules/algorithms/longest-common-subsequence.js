function longestCommonSubsequence(xChars, yChars) {
	// const xChars = x.split('');
	// const yChars = y.split('');

	// first case it end with the same element

	if (xChars[xChars.length - 1] === yChars[yChars.length - 1]) {
		const subsequence = longestCommonSubsequence(
			xChars[xChars.length - 2],
			yChars[yChars.length - 2],
		);

		return subsequence + xChars[xChars.length - 1];
	}

	// const lsc = [];
	// let lastYIndex = 0;
	// // debugger;
	// for (let xIndex = 0; xIndex < xChars.length; xIndex++) {
	// 	for (let yIndex = lastYIndex; yIndex < yChars.length; yIndex++) {
	// 		// we have to look in all letters
	// 		// if we reach the end we need to stop

	// 		if (xChars[xIndex] === yChars[yIndex]) {
	// 			lsc.push(xChars[xIndex]);

	// 			lastYIndex = yIndex;

	// 			// need to go to outside loop
	// 			continue;
	// 		}
	// 	}
	// }

	// return lsc.join('');
}

const result = longestCommonSubsequence('abcdef', 'abc');
const result2 = longestCommonSubsequence('a', 'b');
const result3 = longestCommonSubsequence('abcdef', 'acf');
const result4 = longestCommonSubsequence('132535365', '123456789'); // 12356
console.log('TCL: result', result);
console.log('TCL: result2', result2);
console.log('TCL: result3', result3);
console.log('TCL: result4', result4);
