#!/usr/bin/env checkio --domain=js run split-pairs
"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
// return text.split('').reduce<[][]>((acc, val, idx) => {
//   if (idx % 2) {
//     acc.push(acc.pop()[0] + val)
//   } else {
//     acc.push(val + '_')
//   }
//   return acc;
// }, '');
function splitPairs(text) {
    if (text.length === 0) {
        return [];
    }
    var reducer = function (acc, val, idx) {
        if (idx % 2) {
            acc.push(acc.pop()[0] + val);
        }
        else {
            acc.push(val + '_');
        }
        return acc;
    };
    return text.split('').reduce(reducer, []);
}
console.log('Example:');
console.log(splitPairs('abcd'));
// These "asserts" are used for self-checking
assert_1.default.deepEqual(splitPairs('abcd'), ['ab', 'cd']);
assert_1.default.deepEqual(splitPairs('abc'), ['ab', 'c_']);
assert_1.default.deepEqual(splitPairs('abcdf'), ['ab', 'cd', 'f_']);
assert_1.default.deepEqual(splitPairs('a'), ['a_']);
assert_1.default.deepEqual(splitPairs(''), []);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
