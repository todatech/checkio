const log = console.log;
const assert = require('assert');

function divisors(integer) {

  let result = [];
  for (let i = 2; i < integer; i++)
    if (!(integer % i))
      result.push(i);

  return result.length ? result : `${integer} is prime`;
};

log(divisors(15), [3, 5]);
log(divisors(12), [2, 3, 4, 6]);
log(divisors(13), "13 is prime");