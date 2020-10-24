const assert = require('assert');
const log = console.log;

function digitalRoot(n) {
  while (n.toString().length > 1) {
    n = +n.toString().split('').reduce((acc, val) => acc + parseInt(val), 0);
  }
  return n
}

log(digitalRoot(123456));   //3

if (true) {
  assert.equal(digitalRoot(16), 7);
  assert.equal(digitalRoot(456), 6);

  log('test ok.')
}

