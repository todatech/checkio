const log = console.log;

const assert = require("assert");
c
function findOutlier(integers) {
    let result = [0,0];
    let counts = [0,0];
    integers.forEach((val) => {
      if (val % 2) {
        counts[0] += 1;
        result[0] = val;
      } else {
        counts[1] += 1;
        result[1] = val;
      }
    })
    return (counts[0]<counts[1]? result[0]: result[1])
}

log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));

assert.equal(findOutlier([0, 1, 2]), 1)
assert.equal(findOutlier([1, 2, 3]), 2)
assert.equal(findOutlier([2,6,8,10,3]), 3)
assert.equal(findOutlier([0,0,3,0,0]), 3)
assert.equal(findOutlier([1,1,0,1,1]), 0)
console.log('check ok!')