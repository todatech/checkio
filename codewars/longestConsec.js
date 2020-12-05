const log = console.log;
const assert = require('assert');

function longestConsec(strarr, k) {

  if ((!strarr.length) || (k <= 0) || (k > strarr.length))
    return '';

  const lenarr = strarr.map(v => v.length)
    .reduce((m, _v, i, a) => {
      if (i + k <= a.length) {
        m.push(a.slice(i, i + k).reduce((acc, val) => acc + val))
      }
      return m;
    }, []);

  const idx = lenarr.indexOf(Math.max(...lenarr));

  let result = '';
  for (let i = 0; i < k; i++) {
    result = result.concat(strarr[idx + i]);
  }
  return result;
}

if (true) {
  assert.equal(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
  assert.equal(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
  assert.equal(longestConsec([], 3), "")
  assert.equal(longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
  assert.equal(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
  assert.equal(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
  assert.equal(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
  assert.equal(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
  assert.equal(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
  log('test ok...');
}