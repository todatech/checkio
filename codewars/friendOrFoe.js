const log = console.log;
const assert = require('assert');
const { finished } = require('stream');

const friend = arr => arr.filter(v => v.length === 4);

log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);
log(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);