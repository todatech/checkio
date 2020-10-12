#!/usr/bin/env checkio --domain=js run count-digits
"use strict";
// You need to count the number of digits in a given string.
// 
// Input:A Str.
// 
// Output:An Int.
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
function countDigits(text) {
    var count = 0;
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var char = text_1[_i];
        if ((char >= '0') && (char <= '9')) {
            count++;
        }
    }
    return count;
}
console.log('Example:');
console.log(countDigits('hi'));
// These "asserts" are used for self-checking
assert_1.default.equal(countDigits('hi'), 0);
assert_1.default.equal(countDigits('who is 1st here'), 1);
assert_1.default.equal(countDigits('my numbers is 2'), 1);
assert_1.default.equal(countDigits('This picture is an oil on canvas '
    + 'painting by Danish artist Anna '
    + 'Petersen between 1845 and 1910 year'), 8);
assert_1.default.equal(countDigits('5 plus 6 is'), 2);
assert_1.default.equal(countDigits(''), 0);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
