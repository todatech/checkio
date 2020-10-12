#!/usr/bin/env checkio --domain=js run acceptable-password-i
"use strict";
// You are the beginning of a password series. Every mission will be based on the previous one. Going forward the missions will become slightly more complex.
// 
// In this mission you need to create a password verification function.
// 
// Those are the verification conditions:
// 
// the length should be bigger than 6.Input:A string.
// 
// Output:A bool.
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var isAcceptablePassword = function (password) { return password.length > 6; };
// var assert = require("assert").strict;
// function isAcceptablePassword(password) {
//     return password.length > 6;
// }
console.log("Example:");
console.log(isAcceptablePassword("short"));
// These "asserts" are used for self-checking
assert_1.default.equal(isAcceptablePassword("short"), false);
assert_1.default.equal(isAcceptablePassword("muchlonger"), true);
assert_1.default.equal(isAcceptablePassword("ashort"), false);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
