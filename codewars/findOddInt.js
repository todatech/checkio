const assert = require('assert');
const log = console.log;

function findOdd(A) {
    const intCount = A.reduce((acc, val) => {
        acc.hasOwnProperty(val)? acc[val] += 1: acc[val] = 1; 
        return acc;
    }, {})
    return Object.entries(intCount).find((count) => (count[1] % 2))[0]
}

log(findOddInt([1,2,3,1,2,3,1]));

if (false) {
      assert.equal(findOddInt([1,2,3,1,2,3,1]), 1);

    log('test ok.')
}