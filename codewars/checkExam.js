const log = console.log;
const assert = require('assert');

const checkExam = (array1, array2) => (a = array1.reduce((k, v, i) => k += v === array2[i] ? 4 : array2[i] === "" ? 0 : -1, 0)) > 0 ? a : 0;


log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);
