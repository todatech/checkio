#!/usr/bin/env checkio --domain=js run sort-by-extension
"use strict";
// You are given a list of files. You need to sort this list by the file extension.     The files with the same extension should be sorted by name.
// 
// Some possible cases:
// 
// Filename cannot be an empty string;Files without the extension should go before the files with one;Filename ".config" has an empty extension and a name ".config";Filename "config." has an empty extension and a name "config.";Filename "table.imp.xls" has an extension "xls" and a name "table.imp";Filename ".imp.xls" has an extension "xls" and a name ".imp".Input:A list of filenames.
// 
// Output:A list of filenames.
// 
// 
// END_DESC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//NOTE!!! Case 3 is not right
var assert_1 = __importDefault(require("assert"));
function sortByExt(files) {
    //1. drop empty filename ''
    for (var i = 0; i < files.length; i++) {
        if (files[i] === '') {
            files.splice(i, 1);
            i--;
        }
    }
    // 2. Filename ".config" has an empty extension and a name ".config";
    // 3. Filename "config." has an empty extension and a name "config.";
    // 4. Filename "table.imp.xls" has an extension "xls" and a name "table.imp";
    // 5. Filename ".imp.xls" has an extension "xls" and a name ".imp".
    var sortable = files.map(function (val) {
        if (val === '.config') {
            return ['.config', ''];
        }
        else if (val === 'config.') {
            return ['.config', ''];
        }
        else if (val[val.length - 1] === '.') {
            return [val, ''];
        }
        else
            return val.split(/\.(?!.*\.)/);
    });
    // return sortable;
    // Files without the extension should go before the files with one;
    var sortingFn = function (a, b) {
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] == b[0]) {
            return 0;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        return 0;
    };
    var sortingFn2 = function (a, b) {
        if (a[1] < b[1]) {
            return -1;
        }
        if (a[1] == b[1]) {
            return 0;
        }
        if (a[1] > b[1]) {
            return 1;
        }
        return 0;
    };
    var sortingFn3 = function (a, b) {
        if (a[1] === b[1]) {
            if (a[0] < b[0]) {
                return -1;
            }
            if (a[0] == b[0]) {
                return 0;
            }
            if (a[0] > b[0]) {
                return 1;
            }
        }
        else {
            return 0;
        }
        return 0;
    };
    var finalList = sortable.sort(sortingFn2)
        .sort(sortingFn3);
    // return finalList;
    var result = [];
    finalList.forEach(function (fileName) {
        if (fileName[1] === '') {
            result.push(fileName[0]);
        }
        else {
            result.push(fileName.join('.'));
        }
    });
    return result;
}
console.log('Example:');
// console.log(sortByExt(['.imp.xls', 'table.imp.xls', '.config', 'config.', '1.', '1.cad', '1.bat', '2.cad','1.aa', '.cad']));
console.log(sortByExt(['1.cad', '1.bat', '1.aa', '.bat']));
// console.log(sortByExt(['1.cad', '1.bat', '.aa', '.bat']));
// These "asserts" are used for self-checking
assert_1.default.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa']), ['1.aa', '1.bat', '1.cad']);
assert_1.default.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa', '2.bat']), ['1.aa', '1.bat', '2.bat', '1.cad']);
// assert.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa', '.bat']), ['.bat', '1.aa', '1.bat', '1.cad']);
assert_1.default.deepEqual(sortByExt(['1.cad', '1.bat', '.aa', '.bat']), ['.aa', '.bat', '1.bat', '1.cad']);
assert_1.default.deepEqual(sortByExt(['1.cad', '1.', '1.aa']), ['1.', '1.aa', '1.cad']);
assert_1.default.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa', '1.aa.doc']), ['1.aa', '1.bat', '1.cad', '1.aa.doc']);
assert_1.default.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa', '.aa.doc']), ['1.aa', '1.bat', '1.cad', '.aa.doc']);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
