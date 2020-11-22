const log = console.log;
const assert = require('assert');


const formula = (p0, percent, aug) => (1 + percent * 0.01) * p0 + aug;

function nbYear(p0, percent, aug, p) {

  let count = 0;
  do {
    p0 = formula(p0, percent, aug);
    count++;
  } while (p0 < p);
  return count;
}

log(nbYear(1500, 5, 100, 5000), 15);
log(nbYear(1500000, 2.5, 10000, 2000000), 10);
log(nbYear(1500000, 0.25, 1000, 2000000), 94);