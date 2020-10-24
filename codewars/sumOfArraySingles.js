const assert = require('assert');
const log = console.log;

function sumOfArraySingles(arr) {
  return arr.reduce((acc, elem) => {
    arr.indexOf(elem) === arr.lastIndexOf(elem) ? acc += elem : 0
    return acc;
  }, 0)
}

log(sumOfArraySingles([4, 5, 7, 5, 4, 8]));

if (false) {
  assert.equal(sumOfArraySingles([4, 5, 7, 5, 4, 8]), 15);
}