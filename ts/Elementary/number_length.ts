#!/usr/bin/env checkio --domain=js run number-length

// You have a positive integer. Try to find out how many digits it has?
// 
// Input:A positive Int
// 
// Output:An Int.
// 
// 
// END_DESC

// const assert = require("assert");
// function numberLength(value) {
//   return value.toString().length;
// }

import assert from "assert";
const numberLength = (value: number): number => value.toString().length;
  
console.log("Example:");
console.log(numberLength(10));

// These "asserts" are used for self-checking
assert.equal(numberLength(10), 2);
assert.equal(numberLength(0), 1);
assert.equal(numberLength(4), 1);
assert.equal(numberLength(44), 2);

console.log("Coding complete? Click 'Check' to earn cool rewards!");