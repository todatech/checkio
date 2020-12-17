const log = console.log;
const assert = require('assert');

function twoSum(numbers, target) {
  let k = {};
  for (const [i, v] of numbers.entries()) {
    const key = target - v;
    if (k[v] !== undefined)
      return [k[v].i, i];
    if (k[key] === undefined)
      k[key] = { v, i };
  }
}
function numericalCompare(a, b) {
  return a - b;
}

log(twoSum([1, 2, 3], 4), [0, 2]);
log(twoSum([1, 2, 3], 4).sort(numericalCompare), [0, 2]);
log(twoSum([1234, 5678, 9012], 14690).sort(numericalCompare), [1, 2]);
log(twoSum([2, 2, 3], 4).sort(numericalCompare), [0, 1]);