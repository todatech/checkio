#!/usr/bin/env checkio --domain=js run all-the-same

// In this mission you should check if all elements in the given Array are equal.
// 
// Input:Array.
// 
// Output:Bool.
// 
// The idea for this mission was found onPython Tricks series by Dan Bader
// 
// 
// END_DESC

import assert from "assert";

function allTheSame(elements: any[]): boolean {

    // your code here
    return 0;
}


console.log('Example:')
console.log(allTheSame([1, 1, 1]))

// These "asserts" are used for self-checking and not for an auto-testing

assert.equal(allTheSame([1, 1, 1]), true)
assert.equal(allTheSame([1, 2, 1]), false)
assert.equal(allTheSame(['a', 'a', 'a']), true)
assert.equal(allTheSame([]), true)
assert.equal(allTheSame([1]), true)
console.log("Coding complete? Click 'Check' to earn cool rewards!");