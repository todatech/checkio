#!/usr/bin/env checkio --domain=js run conversion-from-camelcase
"use strict";
// Your mission is to convert the name of a function (a string) from CamelCase ("MyFunctionName") into the Python format ("my_function_name") where all chars are in lowercase and all words are concatenated with an intervening underscore symbol "_".
// 
// Input:A function name as a CamelCase string.
// 
// Output:The same string, but in under_score.
// 
// Precondition:
// 0<len(string)<= 100
// Input data won't contain any numbers.
// 
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
function fromCamelCase(name) {
    var lowerCaseName = name.slice().toLowerCase();
    var result = '';
    for (var i = 0; i < name.length; i++) {
        if (name[i] !== lowerCaseName[i]) {
            if (i === 0) {
                result += (lowerCaseName[i]);
            }
            else {
                result += ('_' + lowerCaseName[i]);
            }
        }
        else {
            result += lowerCaseName[i];
        }
    }
    return result;
}
console.log('Example:');
console.log(fromCamelCase('MyFunctionName'));
// These "asserts" are used for self-checking
assert_1.default.equal(fromCamelCase('MyFunctionName'), 'my_function_name');
assert_1.default.equal(fromCamelCase('IPhone'), 'i_phone');
console.log("Coding complete? Click 'Check' to earn cool rewards!");
