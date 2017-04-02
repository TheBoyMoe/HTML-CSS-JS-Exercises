'use strict';

function submit(name, comments, rating = 5) {
	// in ES6, when property keys are not supplied, the variable name is used as the property key
	let data = { name, comments, rating };
	
	for (let key in data) {
		console.log(key + ':', data[key]);
	}
	// … do ajax request
}

submit('English', ['didn\'t like the film', 'The film sucked'], 1);