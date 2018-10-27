function multiplication(...rest) {
	return rest.reduce((previous, current) => previous * current);
}

module.exports = multiplication;
