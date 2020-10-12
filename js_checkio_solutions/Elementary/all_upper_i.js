#!/usr/bin/env checkio --domain=js run all-upper-i

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

// import assert from "assert";
const assert = require("assert");

// function isAllUpper(text) {
function isAllUpper(text: string): boolean {
  return text.split('').every((letter, idx) => (letter === text.toUpperCase().split('')[idx]));
}

console.log("Example:");
console.log(isAllUpper("ALL UPPER"));

// These "asserts" are used for self-checking
assert.equal(isAllUpper('ALL UPPER'), true);
assert.equal(isAllUpper('all lower'), false);
assert.equal(isAllUpper('mixed UPPER and lower'), false);
assert.equal(isAllUpper(''), true);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
