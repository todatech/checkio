#!/usr/bin/env checkio --domain=js run goes-right-after

// In a given word you need to check if one symbol goes right after another.
// 
// Cases you should expect while solving this challenge:
// 
// If more than one symbol is in the list you should always count the first oneone of the symbols are not in the given word - your function should return False;any symbol appears in a word more than once - use only the first one;two symbols are the same - your function should return False;the condition is case sensitive, which mease 'a' and 'A' are two different symbols.Input:Three arguments. The first one is a given string, second is a symbol that shoud go first, and the third is a symbold that should go after the first one.
// 
// Output:A bool.
// 
// 
// END_DESC

"use strict";

function goesAfter(word: string, first: string, second: string): boolean {
    // your code here
    return false;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:');
    console.log(goesAfter('world', 'w', 'o'));

    // These "asserts" are used for self-checking
    assert.equal(goesAfter('world', 'w', 'o'), true);
    assert.equal(goesAfter('world', 'w', 'r'), false);
    assert.equal(goesAfter('world', 'l', 'o'), false);
    assert.equal(goesAfter('panorama', 'a', 'n'), true);
    assert.equal(goesAfter('list', 'l', 'o'), false);
    assert.equal(goesAfter('', 'l', 'o'), false);
    assert.equal(goesAfter('list', 'l', 'l'), false);
    assert.equal(goesAfter('world', 'd', 'w'), false);

    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}