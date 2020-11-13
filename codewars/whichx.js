const assert = require('assert');
const log = console.log;

function solve(m) {

    // solve the equation -> m = x/(1-x)^2
    // To solve this quadratic equation -> mx^2 -(2m+1)x + m = 0
    // we will separate a = m, b = -(2m+1), c = m
    // What is value of m if discriminant = 0 -> b^2 - 4ac = 0
    // Sub in the vars and solve for m, you get -> -1/4 = -0.25 
    // Since given in the question that m has to be greater than 0
    // we will not solve for discriminant case <= 0
    // Here, we get 2 real roots and we will return answer between 0 & 1

    let r1, r2;

    const a = m;
    const b = -(2 * m + 1);
    const c = m;

    let discriminant = b**2 - 4*a*c;
    r1 = (-b + Math.sqrt(discriminant)) / ( 2*a);
    r2 = (-b - Math.sqrt(discriminant)) / ( 2*a);
    return ( r1 > 0 && r1 < 1)? r1: r2;
}

log(solve(8.0))

if (false) {
    assert.equal(solve(2.0), 0.5);
    assert.equal(solve(8.0), 0.7034648345913732);
}