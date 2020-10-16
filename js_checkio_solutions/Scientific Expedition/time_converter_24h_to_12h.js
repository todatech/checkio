#!/usr/bin/env checkio --domain=js run time-converter-24h-to-12h
// You prefer a good old 12-hour time format. But the modern world we live in would rather use the 24-hour format and you see it everywhere. Your task is to convert the time from the 24-h format into 12-h format by following the next rules:
// - the output format should be 'hh:mm a.m.' (for hours before midday) or 'hh:mm p.m.' (for hours after midday)
// - if hours is less than 10 - don't write a '0' before it. For example: '9:05 a.m.'
// Here you can find some useful information about the12-hour format.
// 
// 
// 
// Input:Time in a 24-hour format (as a string).
// 
// Output:Time in a 12-hour format (as a string).
// 
// Precondition:
// '00:00'<= time<= '23:59'
// 
// 
// END_DESC
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log = console.log;
function timeConverter(dayTime) {
    var _a = dayTime.split(':').map(function (val) { return parseInt(val); }), hour = _a[0], minute = _a[1];
    var ampm;
    (hour < 12) ? ampm = ' a.m.' : ampm = ' p.m.';
    (hour > 12) ? hour -= 12 : 0;
    (hour === 0) ? hour = 12 : 0;
    function leadStrWithZero(num) {
        var str = num.toString();
        (str.length === 1) ? str = '0' + str : 0;
        return str;
    }
    var time = hour.toString() + ':' + leadStrWithZero(minute) + ampm;
    return time;
}
var assert = require('assert');
console.log('Example:');
console.log(timeConverter('12:30'));
if (true) {
    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(timeConverter('12:30'), '12:30 p.m.');
    assert.equal(timeConverter('09:00'), '9:00 a.m.');
    assert.equal(timeConverter('23:15'), '11:15 p.m.');
    assert.equal(timeConverter('00:00'), '12:00 a.m.');
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
