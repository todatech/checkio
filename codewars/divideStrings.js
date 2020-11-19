const log = console.log;
const assert = require('assert');

function* incOneGenerator() {
  let unit = 0;
  while (true) {
    unit++; carry = false;
    if (unit > 9) {
      unit = 0; carry = true;
    }
    yield { unit, carry };
  }
}

function incrementArrByOne(arr, gen) {
  let a = gen.next();

  if (a.value.carry) {
    let n = 1;
    arr[1]++;
    while (arr[n] > 9 && arr[n] !== undefined) {
      arr[n] = 0;
      if (arr[n + 1] === undefined) {
        arr.push(1);
      } else {
        arr[n + 1]++;
      }
      n++;
    }
  }
  arr[0] = a.value.unit;
}

// function test() {
//   let increaseByOne = incOneGenerator();
//   const arr = [0, 0];
//   for (let i = 0; i< 1000; i++) {
//     incrementArrByOne(arr, increaseByOne);
//     log('i: ', i, 'arr: ', arr);
//   }
// }

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

function divideStrings(a, b) {

  const x = a.toString().trimLeadingZerosToArray().reverse();
  const y = b.toString().trimLeadingZerosToArray().reverse();

  // [quotient, remainder]

  const q = new Array(x.length);
  const r= new Array(Math.max(x.length, y.length)).fill(0);

  for (let i = 0; i < r.length; i++) {
    r[i] += (x[i] ?? 0) - (y[i] ?? 0);
    if (r[i] < 0) {
      if (i == r.length -1 ) {
        break;
      } else {
        r[i] += 10;
        r[i+1] -= 1;
      }
    }
  }

  // for(let i = 0; i < r.length; i++) { 
  // }
  log ('r: ',r );

}

// log(divideStrings(0,5));
log(divideStrings(1234, 9999));
// log(test());
// log(divideStrings(4,5));
// log(divideStrings(10,2));
// log(divideStrings(20,3));
// log(divideStrings(60,5));
// log(divideStrings(219,11));
// log(divideStrings(729,9));
// log(divideStrings(1000,10));
// log(divideStrings(600001,100));

if (false) {
  assert.deepEqual(divideStrings(0, 5), ['0', '0']);
  // assert.deepEqual(divideStrings(4,5), [ '0', '4' ]);
  // assert.deepEqual(divideStrings(10,2), [ '5', '0' ]);
  // assert.deepEqual(divideStrings(20,3), [ '6', '2' ]);
  // assert.deepEqual(divideStrings(60,5), [ '12', '0' ]);
  // assert.deepEqual(divideStrings(219,11), [ '19', '10' ]);
  // assert.deepEqual(divideStrings(729,9), [ '81', '0' ]);
  // assert.deepEqual(divideStrings(1000,10), [ '100', '0' ]);
  // assert.deepEqual(divideStrings(600001,100), [ '6000', '1' ]);
  log('test ok...')
}

// log(test(0,5));
// log(test(4,5));
// log(test(10,2));
// log(test(20,3));
// log(test(60,5));
// log(test(219,11));
// log(test(729,9));
// log(test(1000,10));
// log(test(600001,100));



// function test(a,b) {
//     return [Math.floor(+a / +b).toString(), (+a % +b).toString()];  // This doesn't work on big numbers!
// }