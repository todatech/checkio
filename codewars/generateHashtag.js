const log = console.log;
const assert = require('assert');

function generateHashtag(str) {
  let tmp = str.trim();
  if (!tmp.length)
    return false;

  let ht = '#' + tmp.split(' ')
    .map(v => v.trim().charAt(0).toUpperCase() + v.slice(1))
    .join('');

  return (ht.length > 140) ? false : ht;
}

log(generateHashtag(""), false, "Expected an empty string to return false")
log(generateHashtag(" ".repeat(200)), false, "Still an empty string")
log(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
log(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
log(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
log(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
log(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
log(generateHashtag("a".repeat(140)), false, "Too long")