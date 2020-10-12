#!/usr/bin/env checkio --domain=js run all-upper-i
"use strict";
// Check if a given string has all symbols in upper case. If the string is empty or doesn't have any letter in it - function should return True.
//
// Input:A string.
//
// Output:a boolean.
//
// Precondition:a-z, A-Z, 1-9 and spaces
//
//
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
function isAllUpper(text) {
    var bTest = text.toUpperCase().split('');
    return text.split('').every(function (letter, idx) { return (letter === bTest[idx]); });
}
console.log("Example:");
console.log(isAllUpper("ALL UPPER"));
// These "asserts" are used for self-checking
assert_1.default.equal(isAllUpper('ALL UPPER'), true);
assert_1.default.equal(isAllUpper('all lower'), false);
assert_1.default.equal(isAllUpper('mixed UPPER and lower'), false);
assert_1.default.equal(isAllUpper(''), true);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
