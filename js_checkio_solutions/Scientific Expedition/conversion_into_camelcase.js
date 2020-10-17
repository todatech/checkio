#!/usr/bin/env checkio --domain=js run conversion-into-camelcase
"use strict";
// Your mission is to convert the name of a function (a string) from the Python format (for example "my_function_name") into CamelCase ("MyFunctionName"), where the first char of every word is in uppercase and all words are concatenated without any intervening characters.
// 
// Input:A function name as a string.
// 
// Output:The same string, but in CamelCase.
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
var log = console.log;
function toCamelCase(name) {
    // check entry cases
    if (name.length === 0) {
        return '';
    }
    var result = '';
    for (var i = 0; i < name.length; i++) {
        if (i === 0) {
            result += name[i].toUpperCase();
        }
        else {
            if (name[i] === '_') {
                if ((i + 1) < name.length) {
                    result += name[i + 1].toUpperCase();
                    i++;
                }
                else {
                    // we will skip this because it's end of word.
                }
            }
            else {
                result += name[i];
            }
        }
    }
    return result;
}
console.log('Example:');
console.log(toCamelCase('my_function_name_'));
// These "asserts" are used for self-checking
assert_1.default.equal(toCamelCase('my_function_name'), 'MyFunctionName');
assert_1.default.equal(toCamelCase('i_phone'), 'IPhone');
console.log("Coding complete? Click 'Check' to earn cool rewards!");
