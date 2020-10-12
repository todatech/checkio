#!/usr/bin/env checkio --domain=js run max-digit
"use strict";
// You have a number and you need to determine which digit in this number is the biggest.
// 
// Input:A positive int.
// 
// Output:An Int (0-9).
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
// var assert = require('assert');
// function maxDigit(value) {
//     // function maxDigit(value) {
//     return value.toString().split('').reduce(function (acc, val) { return ((acc > +val) ? acc : +val); }, 0);
// }
var maxDigit = function (value) {
    return value.toString().split('').reduce(function (acc, val) { return ((acc > +val) ? acc : +val); }, 0);
};
console.log('Example:');
console.log(maxDigit(1264));
// These "asserts" are used for self-checking
assert_1.default.equal(maxDigit(0), 0);
assert_1.default.equal(maxDigit(52), 5);
assert_1.default.equal(maxDigit(634), 6);
assert_1.default.equal(maxDigit(1), 1);
assert_1.default.equal(maxDigit(10000), 1);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
