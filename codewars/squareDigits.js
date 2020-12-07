const log = console.log;
const assert = require('assert');

const squareDigits = num => +num.toString().split('').map(v => Math.pow(+v, 2)).join('');

log(squareDigits(9119), 811181);
