const assert = require('assert');
const log = console.log;

// rePhone = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/
// reHTML = /<\s*a[^>]*>(.*?)<\s*/\s*a>/g

function phone(strng, num) {

  const rePhone = new RegExp(/(?:\+)([\d]{1,2}?[.-]?[0-9]{3}[.-]?[0-9]{3}[.-]?[0-9]{4})/, '');
  const reName = new RegExp(/(?:\<)(.*?)(?:\>)/, '');
  const reAddress = new RegExp(/([\w\s.,-]+)/, '');

  const contacts = strng.split('\n').filter(entry => {
    let m = entry.match(rePhone);
    return (m && m[1] === num);
  })

  let contact = '';
  switch (contacts.length) {
    case 0:
      return `Error => Not found: ${num}`;
    case 1:
      contact = contacts[0];
      break;
    default:
      return `Error => Too many people: ${num}`;
  }

  const name = contact.match(reName);
  const a = contact.replace(rePhone, '')
    .replace(reName, '')
    .replace(/[!@#$%:^,;&*_\/]/g, ' ')
    .replace(/\s+/g, ' ')
    .match(reAddress);
  const addr = a[1].trim();

  return `Phone => ${num}, Name => ${name[1]}, Address => ${addr}`
}

const dr = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010\n"
  + "+1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573\n :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209\n"
  + "+1-741-984-3090 <Peter Reedgrave> _Chicago\n :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209\n"
  + "+1-111-544-8973 <Peter Pan> LA\n +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209\n"
  + "<Peter Gone> LA ?+1-121-544-8974 \n <R Steell> Quora Street AB-47209 +1-481-512-2222\n"
  + "<Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120\n <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,\n"
  + "<Sophia Loren> +1-421-674-8974 Bern TP-46017\n <Peter O'Brien> High Street +1-908-512-2222; CC-47209\n"
  + "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n <P Salinger> Main Street, +1-098-512-2222, Denver\n"
  + "<C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000\n <Bernard Deltheil> +1-498-512-2222; Mount Av.  Eldorado\n"
  + "+1-099-500-8000 <Peter Crush> Labrador Bd.\n +1-931-512-4855 <William Saurin> Bison Street CQ-23071\n"
  + "<P Salinge> Main Street, +1-098-512-2222, Denve\n"

const dr2 = 
`/+95-626-321-7642 156 Alphand_St. <Elizabeth Corber>
133, Green, Rd. <Bernard Deltheil> NY-56423 ;+5-749-566-2270
+67-430-756-9825 <P Salinge> /PO Box 530; Pollocksville, NC-28573
:+73-849-664-7791 <P Salinge> Ontario Bd.
+83-604-405-9030 <F Fulgur> _Mantow
:+18-195-817-5513 <Laurence Pantow> Haramburu_Street AA-67209
+27-323-246-7455 <Arthur Clarke> 156 Alphandria Street.
+5-118-130-6850 <F Fulgur> Hill Av. Cameron
<Ray Chandler> Hill Av. Cameron ?+18-626-427-4078 
<Pete Highman> LA +75-579-831-1685
<JP Gorce> San Antonio $+27-948-157-2822 TT-45120
<Peter O'Brien> Teliman Pk. !+3-377-353-4767! AB-47209,
<Peter Pan> +80-972-480-7527 LA
<Laurence Pantow> High Street +29-727-300-9096; CC-47209
<Arthur Clarke> +23-705-311-1165 Chateau des Fosses Strasbourg F-68000
<Wilfrid Stevens> Main Street, +31-423-159-4812, Denver
<Paul Dive> *+24-793-208-8936 Main Street Denver
<P Salinge> +18-947-949-4290; Mount Av.  Eldorado
+77-133-148-7696 <Anna Stevens> Chateau des Fosses Strasbourg F-68000
+78-574-317-6708 <Paul Dive> Edinburgh UK
<P Salinge> Main Street, +1-098-512-2222, Denve
/+77-887-218-7949 156 Alphandria_Street. <Elizabeth Corber>
1333, Green, Road <R Steell> NW-46423 ;+38-272-321-4058!
+27-127-935-4728 <Jr Part> /PO Box 5300; Albertville, SC-28573
:+50-871-335-8210 <Anna Stevens> Haramburu Street AA-67209
+14-865-794-2861 <Peter Crush> _Edinburgh UK
:+10-216-440-9235 <Arthur Clarke> Bellevue_Street DA-67209
+89-551-330-8373 <Arthur Paternos> Sequoia Alley PQ-67209
+67-947-128-3627 <Peter Gone> Chicago
<P McDon> Wild Street AA-67209 ?+55-684-165-9638 
<Paul Dive> 156 Alphand St. +27-402-978-9845?
<W Mount Oxford> San Antonio $+37-319-367-6155 TT-45121
<F Flanaghan> Stevenson Pk. !+27-386-639-2017! CB-47209,
<Anastasia Via> +99-477-261-6929 Via Papa Roma
<Elizabeth Corber> Revolution Street +23-941-830-1596; PP-47209
<Sophia Loren> +74-123-597-2916 SA
<Paulo Divino> Main Street, +87-102-330-3503, Boulder
<P Salinger> *+58-783-418-6470 Wild Street AA-67209
<Elizabeth Corber> +7-385-422-6277; Hill Av.  Cameron
+61-716-387-1079 <Peter Crush> LA
+87-110-976-9407 <P Salinger> Quora Street AB-47209
<John Freeland> Moon Street, +45-313-648-4806, Peterville`

log(phone(dr2, "67-430-756-9825"))
// log(phone(dr, "48-421-674-8974"));
// log(phone(dr, "1-908-512-2222"));
// log(phone(dr, "5-555-555-5555"));
// log(phone(dr, "1-098-512-2222"));

if (true) {
  assert.equal(phone(dr, "48-421-674-8974"), "Phone => 48-421-674-8974, Name => Anastasia, Address => Via Quirinal Roma")
  assert.equal(phone(dr, "1-921-512-2222"), "Phone => 1-921-512-2222, Name => Wilfrid Stevens, Address => Wild Street AA-67209")
  assert.equal(phone(dr, "1-908-512-2222"), "Phone => 1-908-512-2222, Name => Peter O'Brien, Address => High Street CC-47209")
  assert.equal(phone(dr, "1-541-754-3010"), "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St.")
  assert.equal(phone(dr, "1-121-504-8974"), "Phone => 1-121-504-8974, Name => Arthur Clarke, Address => San Antonio TT-45120")
  assert.equal(phone(dr, "1-498-512-2222"), "Phone => 1-498-512-2222, Name => Bernard Deltheil, Address => Mount Av. Eldorado")
  assert.equal(phone(dr, "1-098-512-2222"), "Error => Too many people: 1-098-512-2222")
  assert.equal(phone(dr, "5-555-555-5555"), "Error => Not found: 5-555-555-5555")
  log('test ok');
}


// old code for name
//
  // if (name.length > 2) return `Error => Too many people: ${num}`;

  // let nameFound = null;
  // for (let name of contactIterable) {
  //     if (!nameFound) {
  //       nameFound = name;
  //     } else {
  //       return `Error => Too many people: ${num}`;
  //     }    
  // }