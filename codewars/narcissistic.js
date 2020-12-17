const log = console.log;
const assert = require('assert');

const narcissistic = value => (
  value.toString()
    .split('')
    .reduce((k, v, i, a) => k += Math.pow(v, a.length), 0)
  === value);

log(narcissistic(7), true, "7 is narcissistic");
log(narcissistic(371), true, "371 is narcissistic");
