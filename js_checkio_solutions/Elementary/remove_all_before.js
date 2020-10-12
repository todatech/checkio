#!/usr/bin/env checkio --domain=js run remove-all-before
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
// var assert = require('assert');
function removeAllBefore(values, b) {
    //Checking empty Array
    if (Array.isArray(values) && !values.length)
        return values;
    // Find Index
    var idx = values.findIndex(function (val) { return (val === b); });
    // return the whole array if number can't be ofound
    if (idx === -1) {
        return values;
    }
    else {
        values.splice(0, idx);
        return values;
    }
}
console.log('Example:');
console.log(removeAllBefore([1, 2, 3, 4, 5], 3));
// These "asserts" are used for self-checking
assert_1.default.deepEqual(removeAllBefore([1, 2, 3, 4, 5], 3), [3, 4, 5]);
assert_1.default.deepEqual(removeAllBefore([1, 1, 2, 2, 3, 3], 2), [2, 2, 3, 3]);
assert_1.default.deepEqual(removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2), [2, 4, 2, 3, 4]);
assert_1.default.deepEqual(removeAllBefore([1, 1, 5, 6, 7], 2), [1, 1, 5, 6, 7]);
assert_1.default.deepEqual(removeAllBefore([], 0), []);
assert_1.default.deepEqual(removeAllBefore([7, 7, 7, 7, 7, 7, 7, 7, 7], 7), [7, 7, 7, 7, 7, 7, 7, 7, 7]);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
