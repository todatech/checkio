const assert = require('assert');
const log = console.log

function domainName(str) {
    let match = str.match(/http[s]?:\/\/?(?:\w+\.)?(.*)+\.[\w]+(?:.*?)?/)
    return match[1];
}

log(domainName("http://github.com/carbonfive/raygun"))

if (true) {
    assert.equal(domainName("http://github.com/carbonfive/raygun"), "github")
    assert.equal(domainName("http://www.zombie-bites.com"), "zombie-bites")
    assert.equal(domainName("https://www.cnet.com"), "cnet")

    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://youtube.com"), "youtube");
    log('test ok');
}

// http://github.com/carbonfive/raygun
// http://www.zombie-bites.com
// https://www.cnet.com

// this is for re for url
//^http[s]?:\/\/?([^:\/\s]+)(?:.*?)?$
// domain part
//(?:\w+\.)?(.*)+\.[\w]+
//^http[s]?:\/\/?((?:\w+\.)?(.*)+\.[\w]+)(?:.*?)?$