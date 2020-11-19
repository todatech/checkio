const log = console.log;
const assert = require('assert');

String.prototype.trimLeadingZerosToArray = function () {
  if (this.length === 1) return [+this];
  const temp = this.split('').map(v => +v);
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 0) {
      temp.splice(i, 1);
      i--;
    } else {
      break;
    }
  }
  return temp;
}

function sumStrings(a, b) {

  const x = a.trimLeadingZerosToArray().reverse();
  const y = b.trimLeadingZerosToArray().reverse();

  const len = Math.max(x.length, y.length) + 1;
  const arr = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {

    let units = 0, tens = false;
    const tmp = ((x[i] !== undefined) ? x[i] : 0) + ((y[i] !== undefined) ? y[i] : 0) + arr[i];

    if (tmp > 9) { units = tmp - 10; tens = true; }
    else { units = tmp; }

    if (tens) { arr[i + 1] += 1; }
    arr[i] = units;
  }

  const result = arr.reverse().join('').trimLeadingZerosToArray().join('');
  return (result.length) ? result : '0';
}

log(sumStrings('800', '9576'))

if (false) {
  assert.equal(sumStrings('123', '456'), '579')
}