const log = console.log;
const assert = require('assert');

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((k, v) => k + ((v) ? 1 : 0))
}


if (true) {
  var array1 = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true];

  log(countSheeps(array1), 17, "There are 17 sheeps in total")
}