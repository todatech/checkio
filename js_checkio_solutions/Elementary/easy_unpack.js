#!/usr/bin/env checkio --domain=js run easy-unpack
"use strict";
// Your mission here is to create a function that gets an array and returns a tuple with 3 elements - the first, third and second element from the last for the given array.
// 
// Input:A tuple, at least 3 elements long.
// 
// Output:A tuple.
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
// function easyUnpack(values: number[]): number[] {
//     return [values[0], values[2], values[values.length - 2]]
// }
var easyUnpack = function (values) { return [values[0], values[2], values[values.length - 2]]; };
console.log('Example:');
console.log(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]));
// These "asserts" are used for self-checking
assert_1.default.deepEqual(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]), [1, 3, 7]);
assert_1.default.deepEqual(easyUnpack([1, 1, 1, 1]), [1, 1, 1]);
assert_1.default.deepEqual(easyUnpack([6, 3, 7]), [6, 7, 3]);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
