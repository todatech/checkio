const log = console.log;
const assert = require('assert');

const positiveSum = arr => arr.reduce((k, v) => (v > 0) ? k + v : k, 0);

log(positiveSum([1, 2, 3, 4, 5]), 15);
log(positiveSum([1, -2, 3, 4, 5]), 13);
log(positiveSum([]), 0);
log(positiveSum([-1, -2, -3, -4, -5]), 0);
log(positiveSum([-1, 2, 3, 4, -5]), 9);