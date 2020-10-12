#!/usr/bin/env checkio --domain=js run between-markers

// You are given a string and two markers (the initial and final). You have to find a substring enclosed between these two markers. But there are a few important conditions:
// 
// The initial and final markers are always different.If there is no initial marker, then the first character should be considered the beginning of a string.If there is no final marker, then the last character should be considered the ending of a string.If the initial and final markers are missing then simply return the whole string.If the final marker comes before the initial marker, then return an empty string.Input:Three arguments. All of them are strings. The second and third arguments are the initial and final markers.
// 
// Output:A string.
// 
// Precondition:can't be more than one final marker and can't be more than one initial. Marker can't be an empty string
// 
// 
// END_DESC

// If there is no initial marker, then the first character should be considered the beginning of a string.
// If there is no final marker, then the last character should be considered the ending of a string.
// If the initial and final markers are missing then simply return the whole string.
// If the final marker comes before the initial marker, then return an empty string.


// import assert from "assert";
const assert = require('assert');

// function betweenMarkers(text: string, begin: string, end: string): string {
function betweenMarkers(text, begin, end) {

    let beginText = text.indexOf(begin)
    // # Case 1 - no initial marker
    if (beginText === -1) {
        beginText = 0;
    } else {
        beginText += begin.length;
    }

    let endText = text.indexOf(end);
    // # Case 2 - no final marker
    if (endText === -1) {
        endText = text.length
    }

    if (beginText > endText) {
        return '';
    }

    return text.slice(beginText, endText);

}

console.log('Example:')
console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')

assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
assert.equal(betweenMarkers("<head><title>My new site</title></head>",
    "<title>", "</title>"), 'My new site')
assert.equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
assert.equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
assert.equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
assert.equal(betweenMarkers('No <hi>', '>', '<'), '')
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");