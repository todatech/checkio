#!/usr/bin/env checkio --domain=js run multiply-intro
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
function multTwo(a, b) {
    return a * b;
}
console.log('Example:');
console.log(multTwo(3, 2));
// These "asserts" are used for self-checking
assert_1.default.equal(multTwo(3, 2), 6);
assert_1.default.equal(multTwo(0, 1), 0);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
