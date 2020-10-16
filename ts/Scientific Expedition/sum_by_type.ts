#!/usr/bin/env checkio --domain=js run sum-by-type

// You have an array. Each value from that array can be either a string or an integer. Your task here is to return two values. The first one is a concatenation of all strings from the given array. The second one is a sum of all integers from the given array.
// 
// Input:A list of strings and ints
// 
// Output:An array
// 
// Precondition:both given ints should be between -1000 and 1000
// 
// 
// END_DESC

export { };
import assert from "assert";

const log = console.log;

function sumByTypes(values: Array<number | string>): [string, number] {

  function reducer(acc: [string, number], val: number | string): [string, number] {
    (typeof (val) === "string") ? acc[0] += val : acc[1] += val;
    return acc;
  }

  return values.reduce(reducer, ['', 0]);
}

console.log('Example:');
console.log(sumByTypes(['1', 2, 3]));

// These "asserts" are used for self-checking
if (true) {

  assert.deepEqual(sumByTypes([]), ['', 0]);
  assert.deepEqual(sumByTypes([1, 2, 3]), ['', 6]);
  assert.deepEqual(sumByTypes(['1', 2, 3]), ['1', 5]);
  assert.deepEqual(sumByTypes(['1', '2', 3]), ['12', 3]);
  assert.deepEqual(sumByTypes(['1', '2', '3']), ['123', 0]);
  assert.deepEqual(sumByTypes(['size', 12, 'in', 45, 0]), ['sizein', 57]);

  console.log("Coding complete? Click 'Check' to earn cool rewards!");
}