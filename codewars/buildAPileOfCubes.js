const log = console.log;
const assert = require('assert');

// sum of n^3 => (n(n+1)/2)^2
function findNb(m) {
  const sr = Math.sqrt(m)
  if (sr !== Math.floor(sr)) return -1;

  const sr2 = Math.sqrt(8 * sr + 1)
  if (sr2 !== Math.floor(sr2)) return -1;

  return (sr2 - 1) / 2;
}

log(findNb(4183059834009), 2022)
log(findNb(1071225), 45)
log(findNb(24723578342962), -1)
log(findNb(91716553919377), -1)
log(findNb(135440716410000), 4824)
log(findNb(40539911473216), 3568)