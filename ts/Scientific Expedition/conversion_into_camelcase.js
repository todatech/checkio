#!/usr/bin/env checkio --domain=js run conversion-into-camelcase

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

import assert from "assert";

function toCamelCase(name: string): string {
    // your code here
    return undefined;
}

console.log('Example:');
console.log(toCamelCase('my_function_name'));

// These "asserts" are used for self-checking
assert.equal(toCamelCase('my_function_name'), 'MyFunctionName');
assert.equal(toCamelCase('i_phone'), 'IPhone');

console.log("Coding complete? Click 'Check' to earn cool rewards!");