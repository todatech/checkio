#!/usr/bin/env checkio --domain=js run is-even
"use strict";
// Check if the given number is even or not. Your function should return true if the number is even, andfalse if the number is odd.
// 
// Input:An int.
// 
// Output:A bool.
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
var isEven = function (num) { return ((num % 2) ? false : true); };
console.log('Example:');
console.log(isEven(2));
// These "asserts" are used for self-checking
assert_1.default.equal(isEven(2), true);
assert_1.default.equal(isEven(5), false);
assert_1.default.equal(isEven(0), true);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
