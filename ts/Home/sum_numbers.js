#!/usr/bin/env checkio --domain=js run sum-numbers

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

// import assert from "assert";
const assert = require('assert');

// function sumNumbers(test: string): number {
function sumNumbers(test) {
    return test.split(' ').map((str) => Number.isNaN(+str) ? 0 : +str).reduce((acc, val) => acc + val, 0)
}

console.log('Example:');
console.log(sumNumbers('hi'));
console.log(sumNumbers('my numbers is 2'));

// These "asserts" are used for self-checking
assert.equal(sumNumbers('hi'), 0);
assert.equal(sumNumbers('who is 1st here'), 0);
assert.equal(sumNumbers('my numbers is 2'), 2);
assert.equal(sumNumbers('This picture is an oil on canvas '
    + 'painting by Danish artist Anna '
    + 'Petersen between 1845 and 1910 year'), 3755);
assert.equal(sumNumbers('5 plus 6 is'), 11);
assert.equal(sumNumbers(''), 0);

console.log("Coding complete? Click 'Check' to earn cool rewards!");