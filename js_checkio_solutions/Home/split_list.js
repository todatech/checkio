#!/usr/bin/env checkio --domain=js run split-list
"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
function splitList(values) {
    var halfLen = Math.floor(values.length / 2);
    (values.length % 2) ? (halfLen += 1) : 0;
    return values.reduce(function (acc, val, idx) {
        (idx < halfLen) ? acc[0].push(val) : acc[1].push(val);
        return acc;
    }, [[], []]);
}
console.log('Example:');
// console.log(splitList([1, 2, 3, 4, 5, 6]));
console.log(splitList([1, 2, 3]));
// These "asserts" are used for self-checking
assert_1.default.deepEqual(splitList([1, 2, 3, 4, 5, 6]), [[1, 2, 3], [4, 5, 6]]);
assert_1.default.deepEqual(splitList([1, 2, 3]), [[1, 2], [3]]);
assert_1.default.deepEqual(splitList([1, 2, 3, 4, 5]), [[1, 2, 3], [4, 5]]);
assert_1.default.deepEqual(splitList([1]), [[1], []]);
assert_1.default.deepEqual(splitList([]), [[], []]);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
