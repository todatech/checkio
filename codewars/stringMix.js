const assert = require('assert');
const log = console.log;

function mix(s1, s2) {

  function getCharCountObj(str) {
    return str.replace(/[^a-z]/g, '').split('').reduce((acc, val) => {
      acc.hasOwnProperty(val) ? acc[val] += 1 : acc[val] = 1;
      return acc;
    }, {})
  }

  const s1Count = getCharCountObj(s1);
  const s2Count = getCharCountObj(s2);

  // create a set of keys that apply to both sets
  let keys = [... new Set([...Object.keys(s1Count), ...Object.keys(s2Count)])];

  // go thru all keys and compare
  let result = [];
  for (let key of keys) {

    const s1Key = s1Count.hasOwnProperty(key);
    const s2Key = s2Count.hasOwnProperty(key);
    const s1Val = s1Count[key];
    const s2Val = s2Count[key];

    if (s1Key && s2Key) {
      if (s1Val > s2Val) {
        (s1Val > 1) ? result.push(['1', key, s1Val]) : 0;
      } else if (s1Val < s2Val) {
        (s2Val > 1) ? result.push(['2', key, s2Val]) : 0;
      } else if (s1Val == s2Val) {
        (s1Val > 1) ? result.push(['=', key, s1Val]) : 0;
      }
    } else if (s1Key && !s2Key) {
      (s1Val > 1) ? result.push(['1', key, s1Val]) : 0;
    } else if (!s1Key && s2Key) {
      (s2Val > 1) ? result.push(['2', key, s2Val]) : 0;
    }
  }

  result.sort((a, b) => {
    // sort count first, then str grp, finally letter
    if (a[2] - b[2] == 0) {
      if (a[0] == b[0]) {
        return (a[1] > b[1]) ? 1 : -1;
      } else {
        return (a[0] > b[0]) ? 1 : -1;
      }
    } else {
      return b[2] - a[2];
    }
  })

  return result.reduce((acc, val, idx) => {
    acc += val[0] + ':' + val[1].repeat(val[2]);
    (idx !== result.length - 1) ? acc += '/' : 0;
    return acc;
  }, '')
}

let s1 = "my&friend&Paul has heavy hats! &";
let s2 = "my friend John has many many friends &";

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
log(mix(s1, s2))

if (true) {
  s1 = "my&friend&Paul has heavy hats! &";
  s2 = "my friend John has many many friends &";
  assert.equal(mix(s1, s2), "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss");

  s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
  s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
  assert.equal(mix(s1, s2), "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss");

  s1 = "Are the kids at home? aaaaa fffff"
  s2 = "Yes they are here! aaaaa fffff"
  assert.equal(mix(s1, s2), "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh")


  assert.equal(mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr")
  assert.equal(mix("looping is fun but dangerous", "less dangerous than coding"), "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
  assert.equal(mix(" In many languages", " there's a pair of functions"), "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
  assert.equal(mix("Lords of the Fallen", "gamekult"), "1:ee/1:ll/1:oo")
  assert.equal(mix("codewars", "codewars"), "")
  assert.equal(mix("A generation must confront the looming ", "codewarrs"), "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")

  log('test ok')
}







  // let result = [];    // will gather result as [str#, char, numOfOccurrence]
  // Object.entries(s1Count).forEach(val => {

  //   let testVal = 0;

  //   if (s2Count[val[0]]) { testVal = s2Count[val[0]] }
  //   else {
  //     if (val[1] > 1) {
  //       result.push(['1', val[0], val[1]])
  //     }
  //     return;
  //   };

  //   if (val[1] > testVal && val[1] > 1) {
  //     result.push(['1', val[0], val[1]])
  //   } else if (val[1] < testVal && testVal > 1) {
  //     result.push(['2', val[0], testVal]);
  //   } else if (val[1] == testVal && val[1] > 1) {
  //     result.push(['=', val[0], val[1]]);
  //   }
  // });
  // // log(result);

  // // add those chars that did not appeared in str1
  // const s2Only = Object.keys(s2Count).filter((val) => !Object.keys(s1Count).includes(val))
  // // if (filtered) { log('filtered: ', filtered) }
  // // else { log('match not found') }
  // s2Only.forEach(key => {
  //   if (s2Count[key] > 1) {
  //     result.push(['2', key, s2Count[key]]);
  //   }
  // })
