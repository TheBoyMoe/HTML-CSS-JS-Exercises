/* Closure example */


function interviewQuestion(job) {
	return function (name) {
		if(job === 'designer') {
			return `${name}, can you explain ux design?`
		} else if(job === 'teacher') {
			return `${name}, what subject do you teach?`;
		} else {
			return `Hello ${name}, what do you do?`;
		}
	};
}

interviewQuestion('designer')('john');