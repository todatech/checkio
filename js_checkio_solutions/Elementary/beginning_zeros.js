#!/usr/bin/env checkio --domain=js run beginning-zeros
"use strict";
// You have a string that consist only of digits. You need to find how many zero digits ("0") are at the beginning of the given string.
// 
// Input:A string, that consist of digits.
// 
// Output:An Int.
// 
// Precondition:0-9
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const assert = require('assert');
// function beginningZeros(text) {
//     return text.match('^[0]*')[0].length;
// }
// const beginningZeros = (text) => text.match('^[0]*')[0].length;
var assert_1 = __importDefault(require("assert"));
var beginningZeros = function (text) {
    var matchStr = text.match('^[0]*');
    if (matchStr === null) {
        return -1;
    }
    else {
        return matchStr[0].length;
    }
};
console.log('Example:');
console.log(beginningZeros('0001'));
// These "asserts" are used for self-checking
assert_1.default.equal(beginningZeros('100'), 0);
assert_1.default.equal(beginningZeros('001'), 2);
assert_1.default.equal(beginningZeros('100100'), 0);
assert_1.default.equal(beginningZeros('001001'), 2);
assert_1.default.equal(beginningZeros('012345679'), 1);
assert_1.default.equal(beginningZeros('0000'), 4);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
