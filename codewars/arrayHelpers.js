const assert = require('assert');
const log = console.log;

var numbers = [1, 2, 3, 4, 5];

Array.prototype.square = function () {
    return this.map(val => val ** 2);
}
Array.prototype.cube = function () {
    return this.map(val => val ** 3);
}
Array.prototype.average = function () {
    if (!this.length) return NaN;
    return this.reduce((acc, val, idx) => {
        acc += val;
        (idx === this.length - 1) ? acc /= this.length : 0;
        return acc;
    }, 0);
}
Array.prototype.sum = function () {
    return this.reduce((acc, val) => acc += val);
}
Array.prototype.even = function () {
    return this.filter((val) => !(val % 2));
}
Array.prototype.odd = function () {
    return this.filter((val) => (val % 2));
}


log(numbers.square());  // must return [1, 4, 9, 16, 25]
log(numbers.cube());    // must return [1, 8, 27, 64, 125]
log(numbers.average()); // must return 3
log(numbers.sum());     // must return 15
log(numbers.even());    // must return [2, 4]
log(numbers.odd());     // must return [1, 3, 5]


if (false) {
    assert.equal(numbers.square(), [1, 4, 9, 16, 25])
    assert.equal(numbers.cube(), [1, 8, 27, 64, 125])
    assert.equal(numbers.average(), 3)
    assert.equal(numbers.sum(), 15)
    assert.equal(numbers.even(), [2, 4])
    assert.equal(numbers.odd(), [1, 3, 5])
    log('test ok.')
}