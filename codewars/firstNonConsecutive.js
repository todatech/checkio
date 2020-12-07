const log = console.log;
const assert = require("assert");

const firstNonConsecutive = arr => arr.find((v, i) => v != (i + arr[0]));

const first = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])
log(first, 6)