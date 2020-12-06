const log = console.log;
const assert = require('assert');
const { timeStamp } = require('console');

const add = (a, b) => {
  let sum = a ^ b;
  let carry = (a & b) << 1;
  if (sum & carry)
    return add(sum, carry);
  else
    return sum ^ carry;
}

const sub = (a, b) => {
  if (b == 0)
    return a;
  return sub(a ^ b, (~a & b) << 1);
}

const mul = (a, b) => {
  let result = 0;
  for (let i = 0; i != b; i = add(i, 1)) {
    result = add(result, a);
  }
  return result;
}
const div = (a, b) => {
  
  // need to be decimal

  // let counter = 0;
  // while(a >=b) {
  //   a = sub(a,b);
  //   counter++;
  // }

  // return counter; 
  return Math.tan(Math.atan2(a, b)).toFixed(3).toString().slice(0, -1);
}

const mod = (a, b) => {
  while (a >= b) { a = sub(a, b); }
  return a;
}

const operatorLU = {
  
}

function calc(a, b, operator) {
  log('pi: ', encodeURI('+-*/'));
  let operation = {
    [operator]: (a,b) => {return a+b}
  }
  // switch (operator.charCodeAt(0)) {
  //   case 43: return add(a, b);
  //   case 45: return sub(a, b);
  //   case 42: return mul(a, b);
  //   case 47: return (b === 0) ? NaN : div(a, b);
  //   case 37: return (b === 0) ? NaN : mod(a, b);
  // }
  // return NaN;
  log(operation[operator](a,b))

}

function generateAddLoookup() {

  let result = [];
  for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
      let obj = { v: (i + j) % 10, c: (i + j >= 10) }
      row.push(obj);
    }
    result.push(row);
  }
  return result;
}

// log(generateAddLoookup());

function generateMulLookup() {
  let result = [];
  for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
      let obj = { t: Math.floor((i * j) / 10), u: (i * j) % 10 }
      row.push(obj);
    }
    result.push(row);
  }
  return result;
}

// log(generateMulLookup());

function generateSubLookup() {

  let result = [];
  for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
      let obj = { v: Math.abs(i - j), n: ((i - j) < 0) }
      row.push(obj);
    }
    result.push(row);
  }
  return result;
}

log(generateSubLookup());




log(calc(5, 3, '/'));
// log(Math.sub(54,20))

if (false) {
  assert.deepEqual(calc(0, 12, "+"), 12);
  assert.deepEqual(calc(21, 12, "+"), 33);

  assert.deepEqual(calc(54, 20, "-"), 34);
  assert.deepEqual(calc(20, 54, "-"), -34);

  assert.deepEqual(calc(4, 5, "*"), 20);
  assert.deepEqual(calc(5, 0, "*"), 0);

  assert.deepEqual(calc(10, 5, "/"), 2);
  assert.deepEqual(calc(1, 2, "/"), 0.5);
  assert.equal(calc(5, 3, "/"), 1.66);
  assert.deepEqual(calc(5, 0, "/"), NaN);

  assert.deepEqual(calc(10, 5, "%"), 0);
  assert.deepEqual(calc(1, 2, "%"), 1);
  assert.deepEqual(calc(5, 3, "%"), 2);
  assert.deepEqual(calc(5, 0, "%"), NaN);
  log('test ok...');
}