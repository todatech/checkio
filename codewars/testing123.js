const log = console.log;
const assert = require('assert');

var number = array => array.map((v, i) => '' + (i + 1) + ': ' + v);

log(number([]), [], 'Empty array should return empty array');
log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');                