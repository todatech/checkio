const log = console.log;
const assert = require('assert');

function elderAge2(m, n, p, q) {
  let sum = 0;
  for (let j = q - 1; j < n; j++) {
    let array = [];
    for (let i = p - 1; i < m; i++) {
      xor = (i ^ j);
      // delay = (xor >= l) ? xor - l : 0;
      sum += xor;
    }
  }
  return sum;
}

function elderAge(m, n, l, t) {

  let sum = 0;
  for (let j = 0; j < n; j++) {
    let array = [];
    for (let i = 0; i < m; i++) {
      xor = (i ^ j);
      delay = (xor >= l) ? xor - l : 0;
      sum += delay;
      // log('i: ', i, 'j: ', j, 'i^j: ', xor, 'del: ', delay, 'sum: ', sum)
      // log('i: ', i, 'j: ', j, 'i^j: ', xor,)
      // array.push(xor)
      //  'del: ', delay, 'sum: ', sum)
    }
    // log(array.join(','));
  }
  // return sum %t;
  return sum;

}


log(elderAge(7, 11 , 0, 10000007), 11925);

// log(elderAge2(64,64,34,26))
// log(elderAge2(3,16, 1,13))
log(elderAge2(8,8,8,6))

// log(elderAge2(16, 16, 13, 13))

// log(elderAge(8, 5, 1, 100), 5);
// log(elderAge(8,8,0,100007), 224);
// log(elderAge(25,31,0,100007), 11925);
// log(elderAge(5,45,3,1000007), 4323);
// log(elderAge(31,39,7,2345), 1586);
// log(elderAge(545,435,342,1000007), 808451);

// log(elderAge(40,49,2, 1182), 931);
// log(elderAge(28827050410, 35165045587, 7109602, 13719506), 5456283);
