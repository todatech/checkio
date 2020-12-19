const log = console.log;
const assert = require('assert');

function Stack() {
  this.stack = [];
  this.push = (elem) => this.stack.push(elem);
  this.pop = () => this.stack.pop();
  this.peek = () => this.stack[this.stack.length - 1];
}

function validBraces(braces) {

  const arr = braces.split('');
  const opStack = new Stack();
  opStack.push('#');  // top of stack

  try {
    arr.forEach(char => {
      if (char === '(' || char === '[' || char === '{') {
        opStack.push(char);
      } else if (char === ')' || char === ']' || char === '}') {
        let p = opStack.peek();
        if ((p !== '#') &&
          ((p === '(' && char === ')') ||
            (p === '[' && char === ']') ||
            (p === '{' && char === '}'))) {
          opStack.pop();
        } else {
          throw new Error('Error when clearing stack')
        }
      }
    });
  } catch (err) {
    return false;
  }
  return (opStack.peek() === '#');
}



log(validBraces("()"), true);
log(validBraces("[(])"), false);

log(validBraces("(){}[]"), true);
log(validBraces("([{}])"), true);
log(validBraces("(}"), false);
log(validBraces("[(])"), false);
log(validBraces("[({})](]"), false);