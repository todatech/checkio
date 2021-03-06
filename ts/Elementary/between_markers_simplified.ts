#!/usr/bin/env checkio --domain=js run between-markers-simplified

// You are given a string and two markers (the initial one and final). You have to find a substring enclosed between these two markers. But there are a few important conditions.
// 
// This is a simplified version of theBetween Markersmission.
// 
// The initial and final markers are always different.The initial and final markers are always 1 char size.The initial and final markers always exist in a string and go one after another.Input:Three arguments. All of them are strings. The second and third arguments are the initial and final markers.
// 
// Output:A string.
// 
// Precondition:There can't be more than one final and one initial markers.
// 
// 
// END_DESC

// const assert = require('assert');

// function betweenMarkers(line: string, left: string, right: string): string {
// function betweenMarkers(line, left, right) {
// const leftMarkerIndex = line.indexOf(left);
// const rightMarkerIndex = line.indexOf(right);
// return line.slice(leftMarkerIndex + 1, rightMarkerIndex)
// return line.slice(line.indexOf(left) + 1, line.indexOf(right));
// }


import assert from "assert";
function betweenMarkers(line: string, left: string, right: string): string {
    return line.slice(line.indexOf(left) + 1, line.indexOf(right));
}

console.log('Example:');
console.log(betweenMarkers('What is >apple<', '>', '<'));

// These "asserts" are used for self-checking
assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple');
assert.equal(betweenMarkers('What is [apple]', '[', ']'), 'apple');
assert.equal(betweenMarkers('What is ><', '>', '<'), '');
assert.equal(betweenMarkers('[an apple]', '[', ']'), 'an apple');

console.log("Coding complete? Click 'Check' to earn cool rewards!");