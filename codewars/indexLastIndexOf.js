const assert = require('assert');
const log = console.log;

String.prototype.indexOf = function (value, fromIndex = 0) {

  if (value instanceof (RegExp)) {

    const re = (value.global)? value: new RegExp(value, 'g');
    re.lastIndex = fromIndex;

    let match;
    let lastMatchedIndex = -1
    while ((match = re.exec(this)) !== null) {
      lastMatchedIndex = match.index;
      break;
    }
    return lastMatchedIndex;

  } else if (typeof value === 'string') {
    return this.indexOf(new RegExp(value), fromIndex);
  }

};

String.prototype.lastIndexOf = function (value, fromIndex) {

  if(fromIndex === undefined) { fromIndex = this.length }

  if (value instanceof (RegExp)) {

    const re = (value.global)? value: new RegExp(value, 'g');

    let match;
    let matchedIndexes = [];

    while ((match = re.exec(this)) !== null) {
      matchedIndexes.push(match.index);
      re.lastIndex = match.index + 1;
    }

    if (matchedIndexes.length) {
      let answer = -1;
      for(let i = 0; i < matchedIndexes.length; i++){
        if (matchedIndexes[i] <= fromIndex ) {
          answer = matchedIndexes[i];
        }
      }
      return answer;

    } else {
      return -1;
    }

  } else if (typeof value === 'string') {
    return this.lastIndexOf(new RegExp(value), fromIndex);
  }

};

log("abcba".lastIndexOf(/a?bc|cb/, 2)) // - Expected: 2, instead got: 1


// One thing to note when going into the .lastIndexOf() implementation is that 
// the fromIndex is the last index that the matched string can start from. The 
// sub-string or regex match can trail after that index, but the index of that 
// first character must be at the fromIndex or lower.

// log("abcba".indexOf("b"));
// log("abcba".indexOf("b", 2));
// log("abcba".lastIndexOf("b"));  // 3
// log("abcba".indexOf("e"));

// log("abcba".indexOf(/bc|cb/));
// log("abcba".indexOf(/bc|cb/, 2));
// log("abcba".lastIndexOf(/bc|cb/));   // 2
// log("abcba".indexOf(/d/));

// log('abcba'.lastIndexOf(/bc|cb/, 3 ));  // 2, not -1
// log('abcba'.lastIndexOf(/b/, 2 ));      // 1 not 3
// log('abcba'.lastIndexOf('abc', 1));     // 0 not -1
// log('abcba'.lastIndexOf(/abc/, 1 ));    // 0 not -1
// log('abcba'.lastIndexOf('cb', 1 ));  // -1 not 2
// log('abcba'.lastIndexOf('/cb/', 1 ));  //-1 not 2


if (false) {
  assert.equal("abcba".indexOf("b"), 1);
  assert.equal("abcba".indexOf("b", 2), 3);
  assert.equal("abcba".lastIndexOf("b"), 3);
  assert.equal("abcba".indexOf("d"), -1);

  assert.equal("abcba".indexOf(/bc|cb/), 1);
  assert.equal("abcba".indexOf(/bc|cb/, 2), 2);
  assert.equal("abcba".lastIndexOf(/bc|cb/), 2);
  assert.equal("abcba".indexOf(/d/), -1);

  assert.equal('abcba'.lastIndexOf(/bc|cb/, 3 ), 2);  // 2 not -1
  assert.equal('abcba'.lastIndexOf(/b/, 2 ), 1);  // 1 not 3
  assert.equal('abcba'.lastIndexOf('abc', 1), 0);  // 0 not -1
  assert.equal('abcba'.lastIndexOf(/abc/, 1 ), 0);  // 0 not -1
  assert.equal('abcba'.lastIndexOf('cb', 1 ), -1);  // -1 not 2
  assert.equal('abcba'.lastIndexOf('/cb/', 1 ), -1);  // -1 not 2


  log('test ok...');
}


// old code ---
// Object.defineProperty(String.prototype, 'counter', {
//   get() { return counter; },
//   set(value) { counter = value;}
// });


// String.prototype.lastIndexOf = function (value, fromIndex = 0) {

//   if (value instanceof (RegExp)) {
//     // let str = this.slice(fromIndex,);
//     // let n = str.search(value);
//     // return (n != -1) ? (fromIndex + n) : -1;

//   } else if (typeof value === 'string') {
//     const re = new RegExp(value, 'g');
//     return this.lastIndexOf(re, fromIndex);
//   }

// };