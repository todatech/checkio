const log = console.log;
const assert = require('assert');

const Calculator = function () {

  this.arth = {
    '+': { op(x, y) { return x + y }, },
    '-': { op(x, y) { return x - y }, },
    '*': { op(x, y) { return x * y }, },
    '/': { op(x, y) { return x / y }, }
  }

  this.ops = ['*/', '+-'];

  this.evaluate = string => {

    const arr = string.split(' ').map(val => {
      const parsed = parseInt(val, 10);
      return (isNaN(parsed)) ? val : parsed;
    })

    if (arr.length === 0) return 0;

    this.ops.forEach(op => {
      for (let idx = 0; idx < arr.length; idx++) {
        let term = arr[idx];
        if (op.includes(term)) {
          const result = this.arth[term].op(arr[idx - 1], arr[idx + 1]);
          arr.splice(idx - 1, 3, result);
          idx--;
        }
      }
    })
    return +arr[0];
  }
};

var calculate = new Calculator()
// log(calculate.evaluate(''));
// log(calculate.evaluate('127'));
// log(calculate.evaluate('2 + 3'));
// log(calculate.evaluate('2 - 3 - 4'));
// log(calculate.evaluate('10 * 5 / 2'));
// log(calculate.evaluate('2 + 3 * 4 / 3 - 2 / 3 * 3 + 8'));  // 2 + 4 - 2 + 8 

if (true) {

  var calculate = new Calculator()
  assert.equal(calculate.evaluate('127'), 127);
  assert.equal(calculate.evaluate('2 + 3'), 5);
  assert.equal(calculate.evaluate('2 - 3 - 4'), -5);
  assert.equal(calculate.evaluate('10 * 5 / 2'), 25);
  assert.equal(calculate.evaluate('2 + 3 * 4 / 3 - 2 / 3 * 3 + 8'), 12);
  log('test ok...')
}

// old code 
// for (let key of this.ops) {
//   let idx;
//   do {

//     idx = arr.findIndex(term => term === key);
//     if (~idx) {
//       const result = this.arth[key].op(arr[idx - 1], arr[idx + 1]);
//       arr.splice(idx - 1, 3, result);
//     }
//   } while (~idx);
// }