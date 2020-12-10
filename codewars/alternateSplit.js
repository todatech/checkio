const log = console.log;
const assert = require('assert');

function encryptOnce(text) {
  const strA = [], strB = [];
  text.split('').forEach((v, i) => {
    (i % 2) ? strA.push(v) : strB.push(v);
  });
  return strA.concat(strB).join('');
}

function encrypt(text, n) {
  if (text == null) return null;
  if (typeof text === 'string' && !text.length) return '';
  let encryptedText = text;
  for (; n > 0; n--) {
    encryptedText = encryptOnce(encryptedText);
  }
  return encryptedText;
}

function decryptOnce(encryptedText) {
  const len = encryptedText.length;
  const l = Math.floor(encryptedText.length / 2);

  const x = new Array(encryptedText.length);
  encryptedText.slice(0, l).split('').forEach((v, i) => x[i * 2 + 1] = v);
  encryptedText.slice(l, len).split('').forEach((v, i) => x[i * 2] = v);
  return x.join('');
}

function decrypt(encryptedText, n) {
  if (encryptedText == null) return null;
  if (typeof encryptedText === 'string' && !encryptedText.length) return '';  
  let text = encryptedText;
  for (; n > 0; n--) {
    text = decryptOnce(text);
  }
  return text;
}


log(encrypt("This is a test!", 0), "This is a test!");
log(encrypt("This is a test!", 1), "hsi  etTi sats!");
log(encrypt("This is a test!", 2), "s eT ashi tist!");
log(encrypt("This is a test!", 3), " Tah itse sits!");
log(encrypt("This is a test!", 4), "This is a test!");
log(encrypt("This is a test!", -1), "This is a test!");
log(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");

log(decrypt("This is a test!", 0), "This is a test!");
log(decrypt("hsi  etTi sats!", 1), "This is a test!");
log(decrypt("s eT ashi tist!", 2), "This is a test!");
log(decrypt(" Tah itse sits!", 3), "This is a test!");
log(decrypt("This is a test!", 4), "This is a test!");
log(decrypt("This is a test!", -1), "This is a test!");
log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");

log(encrypt("", 0), "");
log(decrypt("", 0), "");
log(encrypt(null, 0), null);
log(decrypt(null, 0), null);




