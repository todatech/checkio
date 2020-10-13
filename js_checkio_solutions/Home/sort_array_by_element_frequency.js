#!/usr/bin/env checkio --domain=js run sort-array-by-element-frequency
"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
// interface IFrequency {
//   [key: string]: number,
// }
// number[] | string[]
function frequencySort(items) {
    var frequency = items.reduce(function (acc, val) {
        var idx = acc.findIndex(function (key) { return key[0] === val; });
        if (idx === -1) {
            acc.push([val, 1]);
        }
        else {
            acc[idx][1] += 1;
        }
        return acc;
    }, []);
    // return frequency;
    var sortable = frequency.sort(function (_a, _b) {
        var a = _a[1];
        var b = _b[1];
        if (a > b)
            return -1;
        if (a == b)
            return 0;
        if (a < b)
            return 1;
    })
        .reduce(function (acc, val) {
        for (var i = 0; i < val[1]; i++) {
            var theKey = val[0];
            acc.push(theKey);
        }
        return acc;
    }, []);
    return sortable;
}
console.log('Example:');
console.log(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]));
console.log(frequencySort(['bob', 'bob', 'carl', 'alex', 'bob']));
// These "asserts" are used for self-checking and not for an auto-testing
assert_1.default.deepEqual(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]), [4, 4, 4, 4, 6, 6, 2, 2]);
assert_1.default.deepEqual(frequencySort(['bob', 'bob', 'carl', 'alex', 'bob']), ['bob', 'bob', 'bob', 'carl', 'alex']);
assert_1.default.deepEqual(frequencySort([17, 99, 42]), [17, 99, 42]);
assert_1.default.deepEqual(frequencySort([]), []);
assert_1.default.deepEqual(frequencySort([1]), [1]);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
