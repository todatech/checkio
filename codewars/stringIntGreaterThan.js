const log = console.log;
const assert = require('assert');

String.prototype.toCustomArray = function () {

  const array = this.slice().split('').map(v => {
    const a = parseInt(v, 10);
    return (isNaN(a) ? v : a);
  });

  const neg = ((tmp = array.findIndex(v => v === '-')) === -1) ? false : true;
  if (neg) array.splice(tmp, 1);

  return {
    negative: neg,
    array: array
  };
}

function stringIntGreaterThan(a, b) {

  const m = a.toCustomArray();
  const n = b.toCustomArray();

  const x = m.array;
  const y = n.array;

  // both vars have different signs
  if (!m.negative && n.negative) return true;
  else if (m.negative && !n.negative) return false;

  // both vars have the same sign
  else {
    const result = (!m.negative) ? true : false;
    if (x.length == y.length) {
      for (let i = 0; i < x.length; i++) {
        if (x[i] > y[i]) return result;
        else if (x[i] < y[i]) return !result;
      }
      return false;
    } else {
      if (x.length > y.length) return result;
      else return !result;
    }
  }
}


// log(stringIntGreaterThan("-22", "23"));
// log(stringIntGreaterThan("5", "4"));
// log(stringIntGreaterThan("234", "134"));
// log(stringIntGreaterThan("1345345", "134534"));
// log(stringIntGreaterThan("1345345", "345345"));
// log(stringIntGreaterThan("134534", "1345345"));
// log(stringIntGreaterThan("134534", "3453455"));

if (true) {
  assert.equal(stringIntGreaterThan("-101", "-101"), false);
  assert.equal(stringIntGreaterThan("1", "2"), false);
  assert.equal(stringIntGreaterThan("5", "4"), true);
  assert.equal(stringIntGreaterThan("234", "134"), true);
  assert.equal(stringIntGreaterThan("1345345", "134534"), true);
  assert.equal(stringIntGreaterThan("1345345", "345345"), true);
  log('test ok...')
}