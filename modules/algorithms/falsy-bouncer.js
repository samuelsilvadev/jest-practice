function toTruthy(value) {
	return !!value;
}

function falsyBouncer(arr = []) {
	return arr.filter(toTruthy);
}

module.exports = falsyBouncer;
