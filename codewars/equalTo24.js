const assert = require('assert');
const log = console.log;

// helper functions
function permute(nums) {
  let result = [];
  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums];
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
    const remainingNumsPermuted = permute(remainingNums);
    for (let j = 0; j < remainingNumsPermuted.length; j++) {
      const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
      result.push(permutedArray);
    }
  }
  return result;
}

const ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
};

// In postfix notation, we can have 7 placements (4 nums + 3 ops);
// 1st & 2nd have to be nums and 7th has to be ops
// we left with 3rd, 4th, 5th, 6th to be either any 2 nums or 2 ops
// the following is combination of orders for the above arrangement.
function mix2Nums2Ops(n1, n2, op1, op2) {
  return [
    [n1, n2, op1, op2],
    [n1, op1, n2, op2],
    [n1, op1, op2, n2],
    [op1, n1, n2, op2],
    [op1, n1, op2, n2],
    [op1, op2, n1, n2],
  ];
}

function calcuatePostfix(postfix) {
  const stack = [];
  postfix.forEach(t => {
    if (!isNaN(t)) {
      stack.push(t);
    } else {
      const op2 = stack.pop(), op1 = stack.pop();
      stack.push(ops[t](op1, op2));
    }
  });
  return stack[0];
}

function postfixToInfix(postfix) {
  const stack = [];
  postfix.forEach(t => {
    if (!isNaN(t)) {
      stack.push(t);
    } else {
      const op2 = stack.pop(), op1 = stack.pop();
      stack.push('(' + op1 + t + op2 + ')');
    }
  });
  return stack[0].slice(1, -1);
}

function equalTo24(a, b, c, d) {

  let counter = 0;
  const perms = permute([a, b, c, d]);
  for (const p of perms) {
    for (const op1 of Object.keys(ops)) {
      for (const op2 of Object.keys(ops)) {
        for (const op3 of Object.keys(ops)) {
          const [num1, num2, num3, num4] = [...p];
          const term3To6 = mix2Nums2Ops(num3, num4, op2, op3);
          for (const com of term3To6) {
            const postfix = [num1, num2, ...com, op1];
            counter++;
            if (calcuatePostfix(postfix) === 24) {
              // log('ctr: ', counter);
              return postfixToInfix(postfix);
            }
          }
        }
      }
    }
  }
  // log('ctr: ', counter);
  return "It's not possible!";
}

log(equalTo24(1, 2, 3, 4), '1*2*3*4');
log(equalTo24(2, 3, 4, 5), '2*(3+4+5)');
log(equalTo24(3, 4, 5, 6), '(3+5-4)*6');
log(equalTo24(1, 1, 1, 13), '(1+1)*(13-1)');
log(equalTo24(13, 13, 6, 12), '13+(13-(12/6)');
log(equalTo24(2, 7, 7, 13), '2*(13-(7/7)');
log(equalTo24(4, 3, 1, 6), '6/(1-(3/4)');
log(equalTo24(1, 1, 1, 1), "It's not possible!");
log(equalTo24(13, 13, 13, 13), "It's not possible!");