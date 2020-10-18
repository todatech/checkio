#!/usr/bin/env checkio --domain=js run best-stock
"use strict";
// You are given the current stock prices. You have to find out which stocks cost more.
// 
// Input:The dictionary where the market identifier code is a key and the value is a stock price.
// 
// Output:The market identifier code (ticker symbol) as a string.
// 
// Preconditions:All the prices are unique.
// 
// 
// END_DESC
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var log = console.log;
function bestStock(data) {
    var result = Object.entries(data).reduce(function (acc, val) {
        (val[1] > acc[1]) ? acc = __spreadArrays(val) : 0;
        return acc;
    }, ['', 0]);
    return result[0];
}
console.log('Example:');
console.log(bestStock({
    'ATX': 390.2,
    'CAC': 10.0,
    'WIG': 1.2
}));
if (true) {
    // These "asserts" are used for self-checking
    assert_1.default.equal(bestStock({
        'ATX': 390.2,
        'CAC': 10.0,
        'WIG': 1.2
    }), 'ATX');
    assert_1.default.equal(bestStock({
        'ATX': 1.01,
        'CAC': 91.1,
        'TASI': 120.9
    }), 'TASI');
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
