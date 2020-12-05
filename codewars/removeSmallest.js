const log = console.log;
const assert = require('assert');

function removeSmallest(numbers) {
  const arr = numbers.slice();
  arr.splice(numbers.indexOf(Math.min(...numbers)), 1);
  return arr;
}

log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5]);

if (false) {

    assert.equal(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
    assert.equal(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
    assert.equal(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
    log('test ok...');
}