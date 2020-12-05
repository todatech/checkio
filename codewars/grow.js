const log = console.log;
const assert = require('assert');

const grow = (x) => x.reduce((k, v) => k *= v);

if (true) {

    log(grow([1, 2, 3]), 6);
    log(grow([4, 1, 1, 1, 4]), 16);
    log(grow([2, 2, 2, 2, 2, 2]), 64);
    log('test ok...')
}