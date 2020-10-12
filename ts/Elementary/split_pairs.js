#!/usr/bin/env checkio --domain=js run split-pairs

// Split the string into pairs of two characters. If the string contains an odd number of characters, then the missing second character of the final pair should be replaced with an underscore ('_').
// 
// Input:A string.
// 
// Output:An array of strings.
// 
// Precondition:0<=len(str)<=100
// 
// 
// END_DESC

// import assert from "assert";
const assert = require('assert');

// function splitPairs(text: string): string[] {
function splitPairs(text) {
  let len = text.length;
  if (len === 0) {
    return [];
  }

  return text.split('').reduce((acc, val, idx) => {
    if (idx % 2) {
      acc.push(acc.pop()[0] + val)
    } else {
      acc.push(val + '_')
    }
    return acc;
  }, []);
}

console.log('Example:');
console.log(splitPairs('abcd'));

// These "asserts" are used for self-checking
assert.deepEqual(splitPairs('abcd'), ['ab', 'cd']);
assert.deepEqual(splitPairs('abc'), ['ab', 'c_']);
assert.deepEqual(splitPairs('abcdf'), ['ab', 'cd', 'f_']);
assert.deepEqual(splitPairs('a'), ['a_']);
assert.deepEqual(splitPairs(''), []);

console.log("Coding complete? Click 'Check' to earn cool rewards!");