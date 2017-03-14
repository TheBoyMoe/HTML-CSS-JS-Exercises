/* Returning functions from functions */

function interviewQuestion(job) {
	if(job === 'designer') {
		return function (name) {
			return `${name}, can you explain what ux design is?`;
		}
	} else if(job === `teacher`){
		return function (name) {
			return `${name}, what subject do you teach?`;
		}
	} else {
		return function (name) {
			return `Hello ${name}, what do you do?`;
		}
	}
}

let teacherQuestion = interviewQuestion('teacher');
let designerQuestion = interviewQuestion('designer');
let question = interviewQuestion();

console.log(teacherQuestion('John'));
console.log(designerQuestion('Mike'));
console.log(question('Roger'));

// call the returned function immediately
interviewQuestion('teacher')('Simon');