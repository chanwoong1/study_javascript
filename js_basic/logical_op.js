// OR
const name = "Mike"
const age = 30

if (name === 'Mike' || age > 35) {
	console.log('pass')
}
else {
	console.log('no')
}

// 우선순위
const gender = 'F';
const name1 = 'Jane';
const isAdult = true;

if (gender === 'M' && (name1 === 'Mike' || isAdult)) {
	console.log('pass');
}
else {
	console.log('no');
}