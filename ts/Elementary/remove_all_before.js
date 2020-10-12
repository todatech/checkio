#!/usr/bin/env checkio --domain=js run remove-all-before
// Not all of the elements are important. What you need to do here is to remove from the array all of the elements before the given one.
// 
// 
// 
// For the illustration we have a array [3, 4, 5] and we need to remove all elements that go before 3 - which is 1 and 2.
// 
// We have two edge cases here: (1) if a cutting element cannot be found, then the array shoudn't be changed. (2) if the array is empty, then it should remain empty.
// 
// Input:Array and the border element.
// 
// Output:Array.
// 
// 
// END_DESC
// import assert from "assert";
var assert = require('assert');
function removeAllBefore(values, b) {
    // function removeAllBefore(values, b)  {
    if (Array.isArray(values) && !values.length)
        return values;
    var idx = values.findIndex(function (val) { return val === b; });
    if (idx === -1)
        return values;
    values.splice(0, idx);
    return values;
}
console.log('Example:');
console.log(removeAllBefore([1, 2, 3, 4, 5], 3));
// These "asserts" are used for self-checking
assert.deepEqual(removeAllBefore([1, 2, 3, 4, 5], 3), [3, 4, 5]);
assert.deepEqual(removeAllBefore([1, 1, 2, 2, 3, 3], 2), [2, 2, 3, 3]);
assert.deepEqual(removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2), [2, 4, 2, 3, 4]);
assert.deepEqual(removeAllBefore([1, 1, 5, 6, 7], 2), [1, 1, 5, 6, 7]);
assert.deepEqual(removeAllBefore([], 0), []);
assert.deepEqual(removeAllBefore([7, 7, 7, 7, 7, 7, 7, 7, 7], 7), [7, 7, 7, 7, 7, 7, 7, 7, 7]);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
