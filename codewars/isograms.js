const log = console.log;
const assert = require('assert');

const re = new RegExp(/(?!.*([a-z]).*\1)^[a-z]{0,}$/, 'i');
const isIsogram = str => re.test(str);

log(isIsogram("Dermatoglyphics"), true);
log(isIsogram("isogram"), true);
log(isIsogram("aba"), false, "same chars may not be adjacent");
log(isIsogram("moOse"), false, "same chars may not be same case");
log(isIsogram("isIsogram"), false);
log(isIsogram(""), true, "an empty string is a valid isogram");
