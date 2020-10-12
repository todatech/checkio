#!/usr/bin/env checkio --domain=js run nearest-value

// Find the nearest value to the given one.
// 
// You are given a list of values as Array form and a value for which you need to find the nearest one.
// 
// For example, we have the following set of numbers: 4, 7, 10, 11, 12, 17, and we need to find the nearest value to the number 9. If we sort this set in the ascending order, then to the left of number 9 will be number 7 and to the right - will be number 10. But 10 is closer than 7, which means that the correct answer is 10.
// 
// A few clarifications:
// 
// If 2 numbers are at the same distance, you need to choose the smallest one;The set of numbers is always non-empty, i.e. the size is >=1;The given value can be in this set, which means that it’s the answer;The set can contain both positive and negative numbers, but they are always integers;The set isn’t sorted and consists of unique numbers.Input:Two arguments. A list of values in the Array form. The sought value is an int.
// 
// Output:Int.
// 
// 
// END_DESC

// const assert = require('assert');
// function nearestValue(values, search) {

//     let idx = values.sort((a, b) => (a - b)).findIndex((num) => num >= search);

//     if (idx === -1) {
//         if (values[0] >= search) {
//             return values[0];
//         } else if (values[values.length - 1] <= search) {
//             return values[values.length - 1];
//         }
//     }

//     if ((idx === 0)) {
//         return values[idx];
//     }

//     if ((values[idx] - search) < search - (values[idx - 1])) {
//         return values[idx];
//     } else {
//         return values[idx - 1];
//     }
// }

import assert from "assert";

function nearestValue(values: number[], search: number): number {
    let idx = values.sort((a, b) => (a - b)).findIndex((num) => num >= search);

    if (idx === -1) {
        if (values[0] >= search) {
            return values[0];
        } else if (values[values.length - 1] <= search) {
            return values[values.length - 1];
        }
    }

    if ((idx === 0)) {
        return values[idx];
    }

    if ((values[idx] - search) < search - (values[idx - 1])) {
        return values[idx];
    } else {
        return values[idx - 1];
    }
}

console.log('Example:');
console.log(nearestValue([7, 10, 4, 11, 12, 17], 4));

// These "asserts" are used for self-checking
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 9), 10);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 8), 7);
assert.equal(nearestValue([4, 8, 10, 11, 12, 17], 9), 8);
assert.equal(nearestValue([4, 9, 10, 11, 12, 17], 9), 9);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 0), 4);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 100), 17);
assert.equal(nearestValue([5, 10, 8, 12, 89, 100], 7), 8);
assert.equal(nearestValue([-1, 2, 3], 0), -1);

console.log("Coding complete? Click 'Check' to earn cool rewards!");