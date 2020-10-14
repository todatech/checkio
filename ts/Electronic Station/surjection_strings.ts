#!/usr/bin/env checkio --domain=js run surjection-strings

// Maybe it's a cipher? Maybe, but we don’t know for sure.
// 
// Maybe you can call it"homomorphism"? i wish I know this word before.
// 
// You need to check that the 2 given strings are isometric. This means that a character from one string can become a match for characters from another string.
// 
// One character from one string can correspond only to one character from another string. Two or more characters of one string can correspond to one character of another string, but not vice versa.
// 
// 
// END_DESC

import assert from "assert";

function isometricStrings(line1: string, line2: string): boolean {

    // if they are the same it's true
    if (line1 === '' && line2 === '') { return true; }
    if (line1.length !== line2.length) { return false; }
    if (line1.length < 3) { return false; }

    // construct mapper
    const mapper: { [key: string]: string } = {};
    for (let i = 0; i < line1.length; i++) {
        mapper[line1[i]] = line2[i];
    }

    // swapping key/value for reverse lookup
    const rlookup: { [key: string]: string } = {};
    for (let key in mapper) {
        rlookup[mapper[key]] = key;
    }

    //finding equity
    for (let i = 0; i < line1.length; i++) {
        if (line1[i] !== rlookup[line2[i]]) { return false }
    }

    return true;
}

console.log('Example:');
console.log(isometricStrings('add', 'egg'));

// These "asserts" are used for self-checking
assert.equal(isometricStrings('add', 'egg'), true);
assert.equal(isometricStrings('foo', 'bar'), false);
assert.equal(isometricStrings('', ''), true);
assert.equal(isometricStrings('all', 'all'), true);
assert.equal(isometricStrings('gogopy', 'doodle'), false);

console.log("Coding complete? Click 'Check' to earn cool rewards!");