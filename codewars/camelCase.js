const log = console.log;
const assert = require('assert');

String.prototype.camelCase = function () {
  if (!this.length)
    return '';

  return this.trim()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join('');
}

log("test case".camelCase(), "TestCase");
log("camel case method".camelCase(), "CamelCaseMethod");
log("say hello ".camelCase(), "SayHello");
log(" camel case word".camelCase(), "CamelCaseWord");
log("".camelCase(), "");