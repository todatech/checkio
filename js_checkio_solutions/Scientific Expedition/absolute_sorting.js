#!/usr/bin/env checkio --domain=js run absolute-sorting
"use strict";
// Let's try some sorting. Here is an array with the specific rules.
// 
// The array        has various numbers. You should sort it, but sort it by absolute value in ascending order.    For example, the sequence (-20, -5, 10, 15) will be sorted like so: (-5, 10, 15, -20).    Your function should return the sorted list .
// 
// Precondition:The numbers in the array are unique by their absolute values.
// 
// Input:An array of numbers .
// 
// Output:The list or tuple (but not a generator) sorted by absolute values in ascending order.
// 
// Addition:The results of your function will be shown as a list in the tests explanation panel.
// 
// Precondition:    len(set(abs(x) for x in array)) == len(array)
// 0 < len(array) < 100
// all(isinstance(x, int) for x in array)
// all(-100 < x < 100 for x in array)
// 
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var absoluteSorting = function (values) { return values.sort(function (a, b) { return Math.abs(a) - Math.abs(b); }); };
console.log('Example:');
console.log(absoluteSorting([-20, -5, 10, 15]));
// These "asserts" are used for self-checking
assert_1.default.deepEqual(absoluteSorting([-20, -5, 10, 15]), [-5, 10, 15, -20]);
assert_1.default.deepEqual(absoluteSorting([1, 2, 3, 0]), [0, 1, 2, 3]);
assert_1.default.deepEqual(absoluteSorting([-1, -2, -3, 0]), [0, -1, -2, -3]);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
