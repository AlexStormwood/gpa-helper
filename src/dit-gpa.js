// Editable area:
// Fill in your own values up here.
// Any grade or subject result type that doesn't fit into the given values should be left out.
// eg. "pass conceded", "faculty pass", "recognition of prior learning", "credit transfer" -- all excluded.

// Get these from your academic transcript:
let subjectResults = {
	hd: 8,
	d: 0, 
	c: 0,
	p: 0,
	f: 0
}

// You should make sure that 
// whatever numbers you've put into subjectResults 
// does not make a total higher than this
// eg. 8 HDs and 4 Ds is invalid, 
// because that would be 12 and this has a max of 8.
let diplomaMaxSubjects = 8


// Get these from subject outlines or academic transcripts:
let subjectCreditValue = 6;


// Do NOT edit anything past this line!

let gpa4pointScale = {
	hd: 4,
	d: 3, 
	c: 2,
	p: 1,
	f: 0
}

let gpa7pointScale = {
	hd: 7,
	d: 6, 
	c: 5,
	p: 4,
	f: 0
}

let gpa4pointSubtotal = 0;
let gpa7pointSubtotal = 0;

Object.keys(subjectResults).forEach(subjectResultKey => {
	gpa4pointSubtotal += (subjectResults[subjectResultKey] * gpa4pointScale[subjectResultKey]);
	gpa7pointSubtotal += (subjectResults[subjectResultKey] * gpa7pointScale[subjectResultKey]);
});

gpa4pointSubtotal /= diplomaMaxSubjects;
gpa7pointSubtotal /= diplomaMaxSubjects;

console.log(`
4-point scale result: ${gpa4pointSubtotal}
7-point scale result: ${gpa7pointSubtotal}
	`);