const assert = require('assert');
const log = console.log;

function simplify(poly) {

	// Separating the terms
	const reSeparate = new RegExp(/([\-\+]?[\w\d]+)/, 'igm');
	const m = poly.match(reSeparate);

	// Affixing a plus sign for first term to indicate it's +1 later
	const reAddPlus = new RegExp(/(^[\w\d]+)/, 'igm');
	const p = m.map(val => val.replace(reAddPlus, '+$1'));

	// Separate numeral and non-numeral parts into array form
	const reNumeral = new RegExp(/([\+\-][\d]*)(\w+)/, 'im');
	const q = p.map(val => {

		let b, c;
		const a = val.match(reNumeral);

		if (a[1] === '+') { b = 1; }
		else if (a[1] === '-') { b = -1; }
		else { b = Number(a[1]); }

		c = a[2].split('').sort().join('');
		return [b, c];
	})

	// get a unique set of polynomials
	let s = new Set();
	q.forEach(pair => s.add(pair[1]))

	// get intermediate result
	let r = [];		
	s.forEach(poly => {
		let polySet = q.filter(item => item[1] === poly);
		let ans = polySet.reduce((acc, val) => acc + val[0], 0);
		r.push([ans, poly]);
	})

	r.sort((a, b) => {
		if (a[1].length != b[1].length) {
			return (a[1].length - b[1].length)
		} else {
			return (a[1].localeCompare(b[1]));
		}
	})

	let rStr = r.reduce((acc, val, idx) => {

		let term = '';
		if (val[0] > 1) {
			term = ((idx == 0)? '': '+') + String(val[0]) + val[1];
		} else if (val[0] == 1) {
			term = ((idx == 0)? '': '+') + val[1];
		} else if (val[0] == 0) {
			// do nothing
		} else if (val[0] == -1) {
			term = '-' + val[1];
		} else if (val[0] < 1) {
			term = String(val[0]) + val[1];
		}
		acc = acc.concat(term);
		return acc;
	}, '')

	return rStr;
}

// log(simplify("dc+dcba"))
// log(simplify("2xy-yx"))
// log(simplify("-a+5ab+3a-c-2a"))

// log(simplify("-abc+3a+2ac"))
// log(simplify("xyz-xz"))

// log(simplify("a+ca-ab"))
// log(simplify("xzy+zby"))

// log(simplify("-y+x"))
// log(simplify("y-x"))


if (true) {
	// Test.it("Test reduction by equivalence",_=>{
	assert.equal(simplify("dc+dcba"), "cd+abcd")
	assert.equal(simplify("2xy-yx"), "xy")
	assert.equal(simplify("-a+5ab+3a-c-2a"), "-c+5ab")

	// Test.it("Test monomial length ordering",_=>{
	assert.equal(simplify("-abc+3a+2ac"), "3a+2ac-abc")
	assert.equal(simplify("xyz-xz"), "-xz+xyz")

	// Test.it("Test lexicographic ordering",_=>{
	assert.equal(simplify("a+ca-ab"), "a-ab+ac")
	assert.equal(simplify("xzy+zby"), "byz+xyz")

	// Test.it("Test no leading +",_=>{
	assert.equal(simplify("-y+x"), "x-y")
	assert.equal(simplify("y-x"), "-x+y")
	log('test ok...')
}