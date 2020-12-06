const log = console.log;
const assert = require('assert');

const invert = array => array.map(v => v ? -v : 0);

if (true) {
    log(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
    log(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
    log(invert([]), []);
    log(invert([0]), [0]);
}