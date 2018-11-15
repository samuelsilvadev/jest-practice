'use strict';

const reduceCore = require('./reduce-core');
const reverse = require('./reverse');

function reduceRight(arr, callback, initialValue) {
	return reduceCore(reverse(arr), callback, initialValue);
}

module.exports = reduceRight;
