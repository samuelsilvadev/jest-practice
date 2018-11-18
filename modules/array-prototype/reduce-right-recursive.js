'use strict';

const reduceRecursiveCore = require('./reduce-recursive-core');
const reverseRecursive = require('./reverse-recursive');

function reduceRightRecursive(arr, callback, initialValue) {
	return reduceRecursiveCore(reverseRecursive(arr), callback, initialValue);
}

module.exports = reduceRightRecursive;
