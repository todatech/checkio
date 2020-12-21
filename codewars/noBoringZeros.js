const log = console.log;
const assert = require('assert');

function noBoringZeros(n) {
  let arr = n.toString().split('').reverse();
  for (let i = 0; i < arr.length; i++) {
    if (arr.length > 1 && arr[0] == 0) {
      arr.shift();
      i--;
    }
  }
  return +arr.reverse().join('');
}

log(noBoringZeros(1450), 145)
log(noBoringZeros(960000), 96)
log(noBoringZeros(1050), 105)
log(noBoringZeros(-1050), -105)
log(noBoringZeros(-105), -105)
log(noBoringZeros(0), 0)