#!/usr/bin/env checkio --domain=js run fizz-buzz
"use strict";
// "Fizz buzz" is a word game we will use to teach the robots about division. Let's learn computers.
// 
// You should write a function that will receive a positive integer and return:
// "Fizz Buzz"if the number is divisible by 3 and by 5;
// "Fizz"if the number is divisible by 3;
// "Buzz"if the number is divisible by 5;
// The numberas a string for other cases.
// 
// 
// Input:A number as an integer.
// 
// Output:The answer as a string.
// 
// Precondition:0 < number ≤ 1000
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var log = console.log;
function fizzBuzz(a) {
    var modThree = a % 3;
    var modFive = a % 5;
    if (!modThree && !modFive) {
        return 'Fizz Buzz';
    }
    else if (!modThree) {
        return 'Fizz';
    }
    else if (!modFive) {
        return 'Buzz';
    }
    else {
        return a.toString();
    }
}
console.log('Example:');
console.log(fizzBuzz(15));
// These "asserts" are used for self-checking
assert_1.default.equal(fizzBuzz(15), 'Fizz Buzz');
assert_1.default.equal(fizzBuzz(6), 'Fizz');
assert_1.default.equal(fizzBuzz(10), 'Buzz');
assert_1.default.equal(fizzBuzz(7), '7');
console.log("Coding complete? Click 'Check' to earn cool rewards!");
