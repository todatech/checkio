#!/usr/bin/env checkio --domain=js run currency-style
"use strict";
// "Well, it's that time of the month again. Payroll checks for our employees,      which require your signatures. And no forgetting to sign the big ones!"
// -- Trading Places
// 
// Many countries use different conventions for the thousands separator and decimal mark.  For example in the Netherlands    one million one thousand two hundred and eighty one-hundredths is written as 1.001.200,80, but in the US this is written    as 1,001,200.80.  Use your coding skills to convert dollars in the first style (Netherlands, Germany, Russia, Turkey,    Brazil, and others) to the second style (US, UK, Canada, China, Japan, Mexico, and others).
// 
// Only currency amounts in dollars should be converted: $1.234,50 to $1,234.50, $1.000 to $1,000, and $4,57 to $4.57.    Don't accidentally convert your router's IP address 192.168.1.1.  You should leave currency noted in the US style unchanged.
// 
// Input:A string containing dollar amounts to be converted.
// 
// Output:A string with converted currencies.
// 
// Precondition:0 < len(text) ≤ 1000;
// len(fractional_part_of_currency) in {0,2};
// all(s[-1].isdigit() for s in currency_substrings);
// all(s[0] == '$' for s in currency_substrings)
// 
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var log = console.log;
function currencyStyle(line) {
    //make a copy
    var arrLine = line.slice();
    // Strategy --------
    // 1. Match all currency entries
    // 2. Test to see which style matches.
    // 3. If no style matches, it will be a Currency without decimal
    // matching all currency with $ and end with space or new line
    var reCurrency = new RegExp(/([\$][\d\.\,]+)(?:[\w])/, 'g');
    var currencyMatch = arrLine.match(reCurrency);
    if (!currencyMatch) {
        return arrLine;
    }
    var result = currencyMatch.map(function (curr) {
        var reUSStyleWithDecimal = new RegExp(/([\$].+)(?:[\.])([\d]{2})/, 'g');
        var reEUStyleWithDecimal = new RegExp(/([\$].+)(?:[\,])([\d]{2})/, 'g');
        var USMatch = curr.match(reUSStyleWithDecimal);
        var EUMatch = curr.match(reEUStyleWithDecimal);
        // log('U: ', USMatch, 'E: ', EUMatch);
        if (USMatch) {
            if (USMatch[0] === curr) {
                //no change is needed.
                return curr;
            }
        }
        if (EUMatch) {
            if (EUMatch[0] === curr) {
                // replace period with comma, but the other way for decimal places.
                var ans_1 = curr.replace(/\./g, ',');
                var pos = curr.length - 3;
                ans_1 = ans_1.slice(0, pos) + '.' + ans_1.slice(pos + 1);
                return ans_1;
            }
        }
        // Fall through here, if it's not a decmial match.
        // Only change period separate to comma separator.
        var ans = curr.replace(/\./g, ',');
        return ans;
    });
    // log(result);
    if (result === undefined) {
        return ''; // this shouldn't be the case. Just for safety
    }
    var count = 0;
    return arrLine.replace(reCurrency, function (match) { return result[count++]; });
}
console.log('Example:');
// console.log(currencyStyle('$5,34 + $123,44 + $4.321,34 + $4.123'));
// console.log(currencyStyle('$5,34 + $4.123,44'));
// console.log(currencyStyle('$222.100.455,34'));
console.log(currencyStyle('$4.545,45 is less than $5.454,54.'));
// console.log(currencyStyle('127.255.255.255'))
if (false) {
    // These "asserts" are used for self-checking
    assert_1.default.equal(currencyStyle('$5.34'), '$5.34');
    assert_1.default.equal(currencyStyle('$5,34'), '$5.34');
    assert_1.default.equal(currencyStyle('$222,100,455.34'), '$222,100,455.34');
    assert_1.default.equal(currencyStyle('$222.100.455,34'), '$222,100,455.34');
    assert_1.default.equal(currencyStyle('$222,100,455'), '$222,100,455');
    assert_1.default.equal(currencyStyle('$222.100.455'), '$222,100,455');
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
