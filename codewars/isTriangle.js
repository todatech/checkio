const log = console.log;
const assert = require('assert');

function isTriangle() {
    const args = Array.prototype.slice.call(arguments);
    const max = Math.max(...args);
    args.splice(args.findIndex(v => v === max), 1);
    const sum = args.reduce((k, v) => k + v);
    return (sum > max);
}

log(isTriangle(1, 2, 2), true);
log(isTriangle(7, 2, 2), false);