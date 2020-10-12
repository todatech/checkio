#!/usr/bin/env checkio --domain=js run backward-string
"use strict";
// You should return a given string in reverse order.
//
// Input:A string.
//
// Output:A string.
//
//
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
// var assert = require("assert");
// function backwardString(value) {
//     return value.split('').reverse().join('');
// }
var backwardString = function (value) { return value.split('').reverse().join(''); };
console.log("Example:");
console.log(backwardString("val"));
// These "asserts" are used for self-checking
assert_1.default.equal(backwardString("val"), "lav");
assert_1.default.equal(backwardString(""), "");
assert_1.default.equal(backwardString("ohho"), "ohho");
assert_1.default.equal(backwardString("123456789"), "987654321");
console.log("Coding complete? Click 'Check' to earn cool rewards!");
