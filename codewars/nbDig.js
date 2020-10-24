const assert = require('assert');
const log = console.log;

function nbDig(n, d) {

  let count = 0;
  for (let i = 0; i <= n; i++) {
    count += (i ** 2).toString().split('')
       .filter((digit) => digit.includes(d)).length;
  }
  return count;
}



// log(nbDig(10, 1))   //4
// log(nbDig(25, 1))
if (false) {
  assert.equal(nbDig(10, 1), 4)
  assert.equal(nbDig(25, 1), 11)
  // log(nbDig(10, 1), 4)
}