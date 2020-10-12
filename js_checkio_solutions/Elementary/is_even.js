#!/usr/bin/env checkio --domain=js run is-even

// Check if the given number is even or not. Your function should return true if the number is even, andfalse if the number is odd.
// 
// Input:An int.
// 
// Output:A bool.
// 
// Precondition:both given ints should be between -1000 and 1000
// 
// 
// END_DESC

// import assert from "assert";
const assert = require('assert');

// function isEven(num: number): boolean {
function isEven(num) {
    return (num % 2) ? false : true;
    // return false;
}

console.log('Example:');
console.log(isEven(2));

// These "asserts" are used for self-checking
assert.equal(isEven(2), true);
assert.equal(isEven(5), false);
assert.equal(isEven(0), true);

console.log("Coding complete? Click 'Check' to earn cool rewards!");