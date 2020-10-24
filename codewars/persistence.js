const assert = require('assert');
const log = console.log;

function persistence(n) {   
  let p = 0;
  while (n >= 10) {
    n = n.toString().split('').reduce((acc, val) => acc *=val, 1);
    p++; 
  }
  return p;
}

log(persistence(999));

if (false) {

persistence(4) === 0 // because 4 is already a one-digit number
      assert.equal(persistence(39), 3);
      assert.equal(persistence(999), 4);
      assert.equal(persistence(4), 0);


    log('test ok.')
}