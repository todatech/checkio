#!/usr/bin/env checkio --domain=js run replace-first
"use strict";
// In a given array the first element should become the last one. An empty array or array with only one element should stay the same.
// 
// 
// 
// Input:Array.
// 
// Output:Array.
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const assert = require('assert');
// function replaceFirst(values) {
//     if (Array.isArray(values) && !values.length) {
//         return [];
//     }
//     values.push(values.shift())
//     return values;
// }
var assert_1 = __importDefault(require("assert"));
var replaceFirst = function (values) {
    if (Array.isArray(values) && !values.length) {
        return [];
    }
    values.push(values.shift());
    return values;
};
console.log('Example:');
console.log(replaceFirst([1, 2, 3, 4]));
// These "asserts" are used for self-checking
assert_1.default.deepEqual(replaceFirst([1, 2, 3, 4]), [2, 3, 4, 1]);
assert_1.default.deepEqual(replaceFirst([1]), [1]);
assert_1.default.deepEqual(replaceFirst([]), []);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
