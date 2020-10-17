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
var assert_1 = __importDefault(require("assert"));
var log = console.log;
function sortByExt(files) {
    var list = files.slice();
    // fixing input data
    for (var i = 0; i < list.length; i++) {
        //1. drop empty filename ''
        if (list[i] === '') {
            list.splice(i, 1);
            i--;
        }
        //2. filename doesn't contain '.' we will add one at the end.
        if (list[i].indexOf('.') === -1) {
            list[i] = list[i] + '.';
        }
    }
    // This re will match filename + ext into group[1] and group[2]
    // 1. filename.ext
    //    -> [1] filename, [2] ext
    // 2. Filename ".config" has an empty extension and a name ".config";
    //    -> [1] undefined [2] config -> code change
    // 3. Filename "config." has an empty extension and a name "config.";
    //    -> [1] config [2] undefined
    // 4. Filename "table.imp.xls" has an extension "xls" and a name "table.imp";
    //    -> [1] table.imp [2] xls
    // 5. Filename ".imp.xls" has an extension "xls" and a name ".imp".
    //    -> [1] .imp [2] xls
    var re = new RegExp(/([\w\.]+)?(?:\.)([\w]+)?/, 'i');
    // test regex here ------------------
    // let ma = '.imp.xls'.match(re);
    // log(ma);
    // if (ma) {
    //   log('typeof: ', typeof(ma[2]) === 'string')
    // }
    var fileAndExtPair = list.map(function (val) {
        var match = val.match(re);
        // case 1, 4, 5 - no change needed regex does its own job.
        if (match) {
            // case 2 - exmaple -> .config
            if (match[1] === undefined && typeof (match[2] === 'string')) {
                match[1] = '.' + match[2];
                match[2] = '';
            }
            // case 3 - example -> config.
            if (typeof (match[1]) === 'string' && match[2] === undefined) {
                match[1] = match[1] + '.';
                match[2] = '';
            }
            return [match[1], match[2]];
        }
        else {
            return ['', '']; //shouldn't be returning this
        }
    });
    // log(fileAndExtPair);
    var sortingExtThenFile = function (a, b) {
        if (a[1] < b[1]) {
            return -1;
        }
        if (a[1] == b[1]) {
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
        if (a[1] > b[1]) {
            return 1;
        }
        return 0;
    };
    fileAndExtPair.sort(sortingExtThenFile);
    // log('final: ', fileAndExtPair);
    return fileAndExtPair.map(function (val) { return (val[1] === '') ? val[0] : val.join('.'); });
}
console.log('Example:');
console.log(sortByExt(['1.cad', '1.bat', '.aa', '.bat']));
if (true) {
    // These "asserts" are used for self-checking
    assert_1.default.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa']), ['1.aa', '1.bat', '1.cad']);
    assert_1.default.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa', '2.bat']), ['1.aa', '1.bat', '2.bat', '1.cad']);
    assert_1.default.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa', '.bat']), ['.bat', '1.aa', '1.bat', '1.cad']);
    assert_1.default.deepEqual(sortByExt(['1.cad', '1.bat', '.aa', '.bat']), ['.aa', '.bat', '1.bat', '1.cad']);
    assert_1.default.deepEqual(sortByExt(['1.cad', '1.', '1.aa']), ['1.', '1.aa', '1.cad']);
    assert_1.default.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa', '1.aa.doc']), ['1.aa', '1.bat', '1.cad', '1.aa.doc']);
    assert_1.default.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa', '.aa.doc']), ['1.aa', '1.bat', '1.cad', '.aa.doc']);
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
//
// old code - to be discarded -----------------------------
//
// Files without the extension should go before the files with one;
// we will split 2 lists
// const fileNoExt = fileAndExtPair.filter(file => file[1] === '');
// const fileWithExt = fileAndExtPair.filter(file => file[1] !== '');
// log('No Ext: ', fileNoExt);
// log('W/ Ext: ', fileWithExt);
// const sortFilename = function (a: [string, string], b: [string, string]) {
//   if (a[0] < b[0]) { return -1; }
//   if (a[0] == b[0]) { return 0; }
//   if (a[0] > b[0]) { return 1; }
//   return 0;
// }
// fileNoExt.sort(sortFilename);
// log('NoExtSort: ', fileNoExt);
//
// const sortingFn3 = function (a: string[], b: string[]) {
//   if (a[1] === b[1]) {
//   } else {
//     return 0;
//   }
//   return 0;
// }
// const sortingFn2 = function (a: string[], b: string[]) {
//   if (a[1] === b[1]) {
//     if (a[0] < b[0]) { return 1; }
//     if (a[0] == b[0]) { return 0; }
//     if (a[0] > b[0]) { return -1; }
//   } else {
//     return 0;
//   }
//   return 0;
// }
// const finalList = fileAndExtPair
//   .sort(sortingFn2)
//   .sort(sortingFn);
// return finalList;
