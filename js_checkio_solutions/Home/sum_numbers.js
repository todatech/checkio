#!/usr/bin/env checkio --domain=js run sum-numbers
"use strict";
// In a given text you need to sum the numbers. Only separated numbers should be counted. If a number is part of a word it shouldn't be counted.
// 
// The text consists from numbers, spaces and english letters
// 
// Input:A string.
// 
// Output:An int.
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
function sumNumbers(test) {
    return test.split(' ').map(function (str) { return Number.isNaN(+str) ? 0 : +str; }).reduce(function (acc, val) { return acc + val; }, 0);
}
console.log('Example:');
console.log(sumNumbers('hi'));
console.log(sumNumbers('my numbers is 2'));
// These "asserts" are used for self-checking
assert_1.default.equal(sumNumbers('hi'), 0);
assert_1.default.equal(sumNumbers('who is 1st here'), 0);
assert_1.default.equal(sumNumbers('my numbers is 2'), 2);
assert_1.default.equal(sumNumbers('This picture is an oil on canvas '
    + 'painting by Danish artist Anna '
    + 'Petersen between 1845 and 1910 year'), 3755);
assert_1.default.equal(sumNumbers('5 plus 6 is'), 11);
assert_1.default.equal(sumNumbers(''), 0);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
