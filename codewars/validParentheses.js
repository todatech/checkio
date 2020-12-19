const log = console.log;
const assert = require('assert');

function Stack() {
  this.stack = [];
  this.push = (elem) => this.stack.push(elem);
  this.pop = () => this.stack.pop();
  this.peek = () => this.stack[this.stack.length - 1];
}

function validParentheses(parens) {

  const arr = parens.split('');
  const opStack = new Stack();
  opStack.push('#');  // top of stack

  try {
    arr.forEach(char => {
      if (char === '(') {
        opStack.push('(');
      } else if (char === ')') {
        if (opStack.peek() !== '#') {
          opStack.pop();
        } else {
          throw new Error('Top of Stack')
        }
      }
    });
  } catch (err) {
    return false;
  }
  return (opStack.peek() === '#');
}

log(validParentheses("()"), true);
log(validParentheses("())"), false);

log(validParentheses("()"), true);
log(validParentheses(")(()))"), false);
log(validParentheses("("), false);
log(validParentheses("(())((()())())"), true);