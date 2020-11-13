const assert = require('assert');
const log = console.log;

// Criteria for a n digit number d1...dn
// 1) For n digits, they have to be  d1 <= d2 <= d3 <= ... <= dn (or n)
// 2) And s = sum = d1 + d2 + ... + dn
// since d1 = 0 can't satisfy 1), because if d1 = 0 -> you won't get a full n digit number 
// and for 2), d1 <= d2...dn has to be progressive, therefore d2-dn can't be 0

// build a number generator that will output from *x(1,start) to *y(9,end)
// and eliminate cases in main body loop using start/end to satisfy 1) and 2);

function* genNum(start = 1, end) {
  for (let i = start; i <= Math.min(9, end); i++) { yield i; }
}

function findAll(s, n) {

  let count = 0;
  let answer = [];

  let digit = 0;

  // edge cases
  if (n * 9 < s) return [];
  if (n * 1 > s) return [];
  let d1Check = (s - (n - 1) * 9);
  let startD1 = (d1Check > 0) ? d1Check : 1;

  function recurse(...args) {

    if (digit < n) {

      // build generator from left-most digit
      let g;
      if (digit === 0) {
        g = genNum(startD1, s);
      } else {
        const sumOfD = args.reduce((a, b) => a + b)
        g = genNum(args[digit - 1], s - sumOfD)
      }

      digit++;
      for (let d of g) {
        if (digit === n) {
          count++;    //record # of loop to finish findAll
          const sum = d + args.reduce((a, b) => a + b);
          if (sum === s) {
            answer.push(Number([...args, d].join('')));
            break;
          }
        } else {
          recurse(...args, d);
        }
      }
      digit--;
    }
  }
  recurse();

  // log('count: ', count);
  // log('answer: ', answer);
  answer.sort((a, b) => a < b)
  if (answer.length) {
    const res1 = answer.length;
    const res2 = Math.min(...answer).toString();
    const res3 = Math.max(...answer).toString();
    return [res1, res2, res3];
  } else {
    return [];
  }
}

log(findAll(10, 3));    // c: 31
// log(findAll(27, 3));    // c: 1
// log(findAll(84, 4));    // c: 0
// log(findAll(35, 6));    // c: 2266

if (true) {
  assert.deepEqual(findAll(10, 3), [8, '118', '334']);
  assert.deepEqual(findAll(27, 3), [1, '999', '999']);
  assert.deepEqual(findAll(84, 4), []);
  assert.deepEqual(findAll(35, 6), [123, '116999', '566666'])
  log('test ok...')
}

// old code -------------------------
// const g1 = genNum(1, s);
// for (let a1 of g1) {
//   const g2 = genNum(a1, s - a1)
//   for (let a2 of g2) {
//     const g3 = genNum(a2, s - a1 - a2);
//     for (let a3 of g3) {
//       if (a1 + a2 + a3 === s) {
//         answer.push(Number(a1.toString() + a2.toString() + a3.toString()));
//       }
//       count++;
//     }
//   }
// }