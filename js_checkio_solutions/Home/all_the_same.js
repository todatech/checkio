#!/usr/bin/env checkio --domain=js run all-the-same
"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
function allTheSame(elements) {
    if (Array.isArray(elements) && (!elements.length)) {
        return true;
    }
    if (Array.isArray(elements) && (elements.length === 1)) {
        return true;
    }
    var testElem = elements[0];
    return elements.every(function (elem) { return elem === testElem; });
}
console.log('Example:');
console.log(allTheSame([1, 1, 1]));
// These "asserts" are used for self-checking and not for an auto-testing
assert_1.default.equal(allTheSame([1, 1, 1]), true);
assert_1.default.equal(allTheSame([1, 2, 1]), false);
assert_1.default.equal(allTheSame(['a', 'a', 'a']), true);
assert_1.default.equal(allTheSame([]), true);
assert_1.default.equal(allTheSame([1]), true);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
