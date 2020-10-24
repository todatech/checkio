const assert = require('assert');
const log = console.log;

function onesAndZeros(arr) {
    return (arr.length) ? parseInt(arr.join(''), 2) : 0;
}


log(onesAndZeros([1, 0, 1, 1]));
log(onesAndZeros([]));

if (false) {
    assert.equal(onesAndZeros([0, 0, 0, 1]), 1);
    assert.equal(onesAndZeros([0, 0, 1, 0]), 2);
    assert.equal(onesAndZeros([0, 1, 0, 1]), 5)
    assert.equal(onesAndZeros([1, 0, 0, 1]), 9);
    assert.equal(onesAndZeros([0, 0, 1, 0]), 2);
    assert.equal(onesAndZeros([0, 1, 1, 0]), 6);
    assert.equal(onesAndZeros([1, 1, 1, 1]), 15);
    assert.equal(onesAndZeros([1, 0, 1, 1]), 11);
    log('test ok.')
}