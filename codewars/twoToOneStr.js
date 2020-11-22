const log = console.log;

function longest(s1, s2) {

  let set = new Set([...s1.split(''), ...s2.split('')]);
  return Array.from(set.values()).sort().join('');

}

log(longest("aretheyhere", "yestheyarehere"), "\naehrsty")
log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "\nabcdefghilnoprstu")
log(longest("inmanylanguages", "theresapairoffunctions"), "\nacefghilmnoprstuy")
