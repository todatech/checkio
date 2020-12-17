const log = console.log;
const assert = require('assert');

const count = string => string.split('').reduce((k, v) => {
  k[v] ? k[v] += 1 : k[v] = 1;
  return k;
}, {});

log(count("aba"), { a: 2, b: 1 });
log(count(""), {});    