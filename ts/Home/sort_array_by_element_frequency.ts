#!/usr/bin/env checkio --domain=js run sort-array-by-element-frequency

// Sort the given Array so that its elements end up in the decreasing frequency order, that is, the number of times they appear in elements. If two elements have the same frequency, they should end up in the same order as the first appearance in the Array.
// 
// Input:Array
// 
// Output:Array
// 
// Precondition:elements can be ints or strings
// 
// The mission was taken from Python CCPS 109 Fall 2018. It's being taught for Ryerson Chang School of Continuing Education byIlkka Kokkarinen
// 
// 
// END_DESC

import assert from "assert";

// interface IFrequency {
//   [key: string]: number,
// }


// number[] | string[]

function frequencySort(items: any[]): any[] {

  const frequency = items.reduce((acc, val) => {
    const idx = acc.findIndex((key: [string, number]) => key[0] === val);
    if (idx === -1) {
      acc.push([val, 1])
    } else {
      acc[idx][1] += 1;
    }
    return acc;
  }, [])
  // return frequency;

  const sortable = frequency.sort(([, a]: [string, number], [, b]: [string, number]) => {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
  })
    .reduce((acc: string[] | number[], val: [string, number]): string[] | number[] => {
      for (let i = 0; i < val[1]; i++) {
        let theKey = val[0];
        acc.push(theKey as never);
      }
      return acc;
    }, [])
  return sortable;
}

console.log('Example:');
console.log(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]));
console.log(frequencySort(['bob', 'bob', 'carl', 'alex', 'bob']));


// These "asserts" are used for self-checking and not for an auto-testing
assert.deepEqual(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]), [4, 4, 4, 4, 6, 6, 2, 2]);
assert.deepEqual(frequencySort(['bob', 'bob', 'carl', 'alex', 'bob']), ['bob', 'bob', 'bob', 'carl', 'alex']);
assert.deepEqual(frequencySort([17, 99, 42]), [17, 99, 42]);
assert.deepEqual(frequencySort([]), []);
assert.deepEqual(frequencySort([1]), [1]);

console.log("Coding complete? Click 'Check' to earn cool rewards!");