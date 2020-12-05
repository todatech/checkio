str.forEach(function (char, idx) {
    if (isDigit(char)) {
        result.push(new Token("Literal", char));
    } else if (isLetter(char)) {
        result.push(new Token("Variable", char));
    } else if (isOperator(char)) {
        result.push(new Token("Operator", char));
    } else if (isLeftParenthesis(char)) {
        result.push(new Token("Left Parenthesis", char));
    } else if (isRightParenthesis(char)) {
        result.push(new Token("Right Parenthesis", char));
    } else if (isComma(char)) {
        result.push(new Token("Function Argument Separator", char));
    }
});
