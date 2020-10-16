#!/usr/bin/env checkio --domain=js run sum-by-type
"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var log = console.log;
function sumByTypes(values) {
    function reducer(acc, val) {
        (typeof (val) === "string") ? acc[0] += val : acc[1] += val;
        return acc;
    }
    return values.reduce(reducer, ['', 0]);
}
console.log('Example:');
console.log(sumByTypes(['1', 2, 3]));
// These "asserts" are used for self-checking
if (true) {
    assert_1.default.deepEqual(sumByTypes([]), ['', 0]);
    assert_1.default.deepEqual(sumByTypes([1, 2, 3]), ['', 6]);
    assert_1.default.deepEqual(sumByTypes(['1', 2, 3]), ['1', 5]);
    assert_1.default.deepEqual(sumByTypes(['1', '2', 3]), ['12', 3]);
    assert_1.default.deepEqual(sumByTypes(['1', '2', '3']), ['123', 0]);
    assert_1.default.deepEqual(sumByTypes(['size', 12, 'in', 45, 0]), ['sizein', 57]);
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
