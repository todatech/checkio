const log = console.log;

const answers = [

    [1, 2, 3, '+', '+', 4, '*'],
    [2, 3, 4, 5, '+', '+', '*'],
    [3, 4, '-', 5, '+', 6, '*'],
    [1, 1, '+', 13, 1, '-', '*'],
    [13, 13, 12, 6, '/', '-', '+'],
    [2, 13, 7, 7, '/', '-', '*'],
    [6, 1, 3, 4, '/', '-', '/'],
];

function postfixToInfix(postfix) {
    const stack = [];
    postfix.forEach(t => {
        if (!isNaN(t)) {
            stack.push(t);
        } else {
            const op2 = stack.pop();
            const op1 = stack.pop();
            const ans = '(' + op1.toString() + t + op2.toString() + ')';
            stack.push(ans);
        }
    });
    return stack[0].slice(1, -1)
}

function test(answers) {
    return answers.map(answer => postfixToInfix(answer));
}
log(test(answers));