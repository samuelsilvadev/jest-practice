function frakenSplice(arrToCopy = [], arr = [], index = 0) {
	const head = arr.slice(0, index);
	const tail = arr.slice(index);
	const arrConcatenated = head.concat(arrToCopy, tail);

	return arrConcatenated;
}

module.exports = frakenSplice;
