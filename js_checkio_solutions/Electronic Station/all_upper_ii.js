#!/usr/bin/env checkio --domain=js run all-upper-ii
"use strict";
// Check if a given string has all symbols in upper case. If the string is empty or doesn't have any letter in it - function should return False.
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
    //1. test for empty string
    if ((text === '') || (text.trim() === '')) {
        return false;
    }
    //2. test for number
    if (!Number.isNaN(Number(text))) {
        return false;
    }
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var char = text_1[_i];
        if (char !== char.toUpperCase()) {
            return false;
        }
    }
    return true;
}
console.log('Example:');
// console.log(isAllUpper('ALL UPPER'));
console.log(isAllUpper('123'));
// These "asserts" are used for self-checking
assert_1.default.equal(isAllUpper('ALL UPPER'), true);
assert_1.default.equal(isAllUpper('all lower'), false);
assert_1.default.equal(isAllUpper('mixed UPPER and lower'), false);
assert_1.default.equal(isAllUpper(''), false);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
