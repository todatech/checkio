#!/usr/bin/env checkio --domain=js run end-zeros
"use strict";
// Try to find out how many zeros a given number has at the end.
// 
// Input:A positive Int
// 
// Output:An Int.
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
// const assert = require("assert");
// function endZeros(value) {
//   let arr = value.toString().split("").reverse();
//   let result = 0;
//   for (let i=0; i < arr.length; i++) {
//     if (arr[i] === "0") {
//       result++;
//     } else {
//       break;
//     }
//   }
//   return result;
// }
// const endZeros = (value: number): number => {
//   let result: number = 0;
//   let reversedString: string = value.toString().split('').reverse().join('');
//   for (let char of reversedString) {
//     if (char === '0') { result++}
//     else {break;}
//   }
//   return result;
// }
var endZeros = function (value) {
    var result = 0;
    var stringVal = value.toString();
    for (var i = stringVal.length - 1; i >= 0; i--) {
        if (stringVal[i] === '0') {
            result++;
        }
        else {
            break;
        }
    }
    return result;
};
console.log("Example:");
console.log(endZeros(12345));
// These "asserts" are used for self-checking
assert_1.default.equal(endZeros(0), 1);
assert_1.default.equal(endZeros(1), 0);
assert_1.default.equal(endZeros(10), 1);
assert_1.default.equal(endZeros(101), 0);
assert_1.default.equal(endZeros(245), 0);
assert_1.default.equal(endZeros(100100), 2);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
