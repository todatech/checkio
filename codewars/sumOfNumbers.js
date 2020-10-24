const assert = require('assert')

const log = console.log

function getSum(a, b) {

    // if (a === b) {
    //     return a;
    // }

    // let [min, max] = (a < b) ? ([a, b]) : [b, a]
    
    // let result = 0;
    // for (let i = min; i <= max; i++) {
    //     result += i;
    // }
    // return result;

}


log(getSum(-10, 11));

if (true) {
    assert.equal(getSum(-10, 11), 11);
    assert.equal(getSum(0, -1), -1);
    assert.equal(getSum(0, 1), 1);

    assert.equal(getSum(1, 0) , 1);   // 1 + 0 = 1
    assert.equal(getSum(1, 2) , 3);   // 1 + 2 = 3
    assert.equal(getSum(0, 1) , 1);   // 0 + 1 = 1
    assert.equal(getSum(1, 1) , 1);   // 1 Since both are same
    assert.equal(getSum(-1, 0) , -1); // -1 + 0 = -1
    assert.equal(getSum(-1, 2) , 2);  // -1 + 0 + 1 + 2 = 2    
    log('test ok');
}
