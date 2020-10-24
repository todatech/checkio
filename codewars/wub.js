const assert = require('assert');
const log = console.log;

function songDecoder(song) {
    return (song.replace(/(WUB)+/gi, ' ').trim() || '');
}

log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));
log(songDecoder(""));

if (true) {
    assert.equal(songDecoder("AWUBBWUBC"), "A B C") // ,"WUB should be replaced by 1 space");
    assert.equal(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C" ) // ,"multiples WUB should be replaced by only 1 space");
    assert.equal(songDecoder("WUBAWUBBWUBCWUB"), "A B C") //,"heading or trailing spaces should be removed");

    log('test ok.')
}