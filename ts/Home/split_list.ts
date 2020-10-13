#!/usr/bin/env checkio --domain=js run split-list

// You have to split a given array into two arrays. If it has an odd amount of elements, then the first array should have more elements. If it has no elements, then two empty arrays should be returned.
// 
// 
// 
// Input:List.
// 
// Output:List of two lists.
// 
// 
// END_DESC

import assert from "assert";

function splitList(values: number[]): number[][] {
  let halfLen = Math.floor(values.length / 2);
  (values.length % 2) ? (halfLen += 1) : 0;

  return values.reduce((acc: [number[], number[]], val: number, idx: number): [number[], number[]] => {    
    (idx < halfLen)?acc[0].push(val): acc[1].push(val);
    return acc;
  }, [[], []])
}

console.log('Example:');
// console.log(splitList([1, 2, 3, 4, 5, 6]));
console.log(splitList([1, 2, 3]));

// These "asserts" are used for self-checking
assert.deepEqual(splitList([1, 2, 3, 4, 5, 6]), [[1, 2, 3], [4, 5, 6]]);
assert.deepEqual(splitList([1, 2, 3]), [[1, 2], [3]]);
assert.deepEqual(splitList([1, 2, 3, 4, 5]), [[1, 2, 3], [4, 5]]);
assert.deepEqual(splitList([1]), [[1], []]);
assert.deepEqual(splitList([]), [[], []]);

console.log("Coding complete? Click 'Check' to earn cool rewards!");