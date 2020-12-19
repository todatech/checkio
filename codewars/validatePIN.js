const log = console.log;
const assert = require('assert');

const validatePIN = pin => /^(?=[0-9]*$)(?:.{4}|.{6})$/.test(pin);

log(validatePIN("1"), false, "Wrong output for '1'")
log(validatePIN("12"), false, "Wrong output for '12'")
log(validatePIN("123"), false, "Wrong output for '123'")
log(validatePIN("12345"), false, "Wrong output for '12345'")
log(validatePIN("1234567"), false, "Wrong output for '1234567'")
log(validatePIN("-1234"), false, "Wrong output for '-1234'")
log(validatePIN("1.234"), false, "Wrong output for '1.234'")
log(validatePIN("-1.234"), false, "Wrong output for '-1.234'")
log(validatePIN("00000000"), false, "Wrong output for '00000000'")

log(validatePIN("a234"), false, "Wrong output for 'a234'")
log(validatePIN(".234"), false, "Wrong output for '.234'")

log(validatePIN("1234"), true, "Wrong output for '1234'");
log(validatePIN("0000"), true, "Wrong output for '0000'");
log(validatePIN("1111"), true, "Wrong output for '1111'");
log(validatePIN("123456"), true, "Wrong output for '123456'");
log(validatePIN("098765"), true, "Wrong output for '098765'");
log(validatePIN("000000"), true, "Wrong output for '000000'");
log(validatePIN("123456"), true, "Wrong output for '123456'");
log(validatePIN("090909"), true, "Wrong output for '090909'");
