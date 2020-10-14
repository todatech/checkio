#!/usr/bin/env checkio --domain=js run ascending-list
"use strict";
// Determine whether the sequence of elements items is  ascending so that its each element is  strictly larger   than (and not merely equal to) the element that precedes it.
// 
// Input:Iterable with ints.
// 
// Output:Bool.
// 
// The mission was taken from Python CCPS 109 Fall 2018. It is taught for Ryerson Chang School of Continuing Education byIlkka Kokkarinen
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
function isAscending(values) {
    // 1. test emtpy
    if (Array.isArray(values) && ((values.length === 0) || (values.length === 1))) {
        return true;
    }
    var lastValue = values[0];
    for (var i = 1; i < values.length; i++) {
        var currentVal = values[i];
        if (lastValue >= currentVal) {
            return false;
        }
        lastValue = currentVal;
    }
    return true;
}
console.log('Example:');
console.log(isAscending([-5, 10, 99, 123456]));
// These "asserts" are used for self-checking
assert_1.default.equal(isAscending([-5, 10, 99, 123456]), true);
assert_1.default.equal(isAscending([99]), true);
assert_1.default.equal(isAscending([4, 5, 6, 7, 3, 7, 9]), false);
assert_1.default.equal(isAscending([]), true);
assert_1.default.equal(isAscending([1, 1, 1, 1]), false);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
