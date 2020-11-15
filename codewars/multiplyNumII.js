const log = console.log;
const assert = require('assert');

// Helper Functions --------------
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Convert String into a Custom Number Object -----------
String.prototype.getCustomNumObj = function () {

  let tmp, dec, neg, zero = false;
  const ArrayTrueZero = ['.', 0];

  // prep an array - convert digits to number primitives and leave symbols as str
  // array reads from lease significant digits first
  const arr = this.slice().split('').map(v => {
    const a = parseInt(v, 10);
    return (isNaN(a) ? v : a);
  }).reverse();

  // insert decimal pt into array if it has none, and find out how many decimal places.
  if ((tmp = arr.findIndex(v => v === '.')) === -1) {
    dec = 0; arr.unshift('.');
  } else {
    dec = tmp;
  }

  // find out if it's a negative number, and remove the symbol
  neg = ((tmp = arr.findIndex(v => v === '-')) === -1) ? false : true;
  if (neg) arr.splice(tmp, 1);

  // trim trailing zeros
  for (let i = 0; i < dec; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      dec--;
      i--;
    } else {
      break;
    }
  }

  // trim leading zeros
  for (let i = arr.length - 1; i > dec + 1; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
    } else {
      break;
    }
  }

  // determine if it is true zero
  if (arraysEqual(ArrayTrueZero, arr)) { zero = true; neg = false; };

  // return the custom number object
  return {
    zero: zero,
    negative: neg,
    decimal: dec,
    array: arr,
    toString() {
      if (this.zero) { return '0' };
      let temp = this.array.reverse();
      if (temp[temp.length - 1] === '.') { temp.pop() };
      return (this.negative ? '-' : '').concat(temp.join(''));
    },
  };
}

function multiply(a, b) {

  let tmp, neg;
  const m = a.getCustomNumObj();
  const n = b.getCustomNumObj();

  if (m.zero || n.zero) return '0';
  neg = !!(m.negative ^ n.negative);

  const x = m.array;
  const y = n.array;

  //remove decial pt placement
  tmp = x.findIndex(v => v === '.');
  x.splice(tmp, 1);
  tmp = y.findIndex(v => v === '.');
  y.splice(tmp, 1);

  const len = x.length + y.length + 2
  const arr = new Array(len).fill(0);

  for (let j = 0; j < y.length; j++) {
    for (let i = 0; i < x.length; i++) {
      arr[i + j] += x[i] * y[j];
    }
  }
  for (let z = 0; z < len - 1; z++) {
    const reminder = arr[z] % 10;
    const tens = Math.floor(arr[z] / 10);

    arr[z] = reminder;
    arr[z + 1] += tens;
  }

  // insert decimal pt into appropriate place
  arr.splice((m.decimal + n.decimal), 0, '.');

  let str = (neg ? '-' : '').concat(arr.reverse().join(''));
  return str.getCustomNumObj().toString();

}

// log(multiply("2", "3"));
// log(multiply("30", "69"));
// log(multiply("11", "85"));

// log(multiply("-0.00", "0.0000"));
// log(multiply("-0.01", "0.0000"));
// log(multiply("2.01", "3.0000"));
// log(multiply("2", "-3.000001"));
// log(multiply("-5.0908", "-123.1"));

if (true) {


  assert.equal(multiply("2", "3"), "6");
  assert.equal(multiply("30", "69"), "2070");
  assert.equal(multiply("11", "85"), "935");

  assert.equal(multiply("-0.00", "0.0000"), "0");
  assert.equal(multiply("-0.01", "0.0000"), "0");
  assert.equal(multiply("2.01", "3.0000"), "6.03");
  assert.equal(multiply("2", "-3.000001"), "-6.000002");
  assert.equal(multiply("-5.0908", "-123.1"), "626.67748");
  log('test ok...');
}