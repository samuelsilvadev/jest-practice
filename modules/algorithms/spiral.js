// [
// 	[1,2,3],
// 	[8,9,4],
// 	[7,6,5]
// ]

// [
// 	[1,2,3,4],
// 	[12,13,14,5],
// 	[11,16,15,6],
// 	[10,9,8,7]
// ]

// [
// 	[1,2,3,4,5],
// 	[16,17,18,19,6],
// 	[15,24,25,20,7],
// 	[14,23,22,21,8],
// 	[13,12,11,10,9]
// ]

function createSpiral(N) {
	if (N < 1 || Number.isNaN(N)) {
		return [];
	}

	const spiral = [];
	let currentNumber = 1;

	for (let line = 0; line < N; line++) {
		spiral.push([]);
		const isFirstLine = line === 0;
		const isLastLine = line === N - 1;

		for (let column = 0; column < N; column++) {
			const isLastColumn = column === N - 1;

			if (isLastLine) {
				spiral[line][column] = currentNumber;
				currentNumber += 1;

				if (isLastColumn) {
					spiral[line].reverse();
				}
			} else if (isFirstLine) {
				spiral[line][column] = currentNumber;
				currentNumber += 1;
			} else if (isLastColumn) {
				spiral[line][column] = currentNumber;
				currentNumber += 1;
			} else {
				spiral[line][column] = null;
			}
		}
	}

	console.log(JSON.stringify(spiral));

	return spiral;
}

createSpiral(3);
