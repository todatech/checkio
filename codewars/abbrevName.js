const log = console.log;
const assert = require('assert');

const abbrevName = (str) => {
  let arr = str.toUpperCase().split(' ');
  return arr[0][0] + '.' + arr[1][0];
}

log(abbrevName("Sam Harris"), "S.H");
log(abbrevName("Patrick Feenan"), "P.F");
log(abbrevName("Evan Cole"), "E.C");
log(abbrevName("P Favuzzi"), "P.F");
log(abbrevName("David Mendieta"), "D.M");