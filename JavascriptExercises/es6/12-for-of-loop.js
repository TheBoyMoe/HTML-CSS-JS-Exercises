/*
 Reference:
 [1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 [2] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 */

'use strict';

let teachers = [
	{ name: 'Ken', comments: 'Amazing', rating: 4 },
	{ name: 'James', comments: 'Astounding', rating: 3 },
	{ name: 'Dave', comments: 'Astonishing', rating: 3 },
	{ name: 'John', comments: 'Accelerating', rating: 2 },
	{ name: 'Andrew', comments: 'Arm-chair-ing', rating: 3 },
	{ name: 'Elizabeth', comments: 'Accepting', rating: 5 },
	{ name: 'Nick', comments: 'Automating', rating: 6 },
	{ name: 'Sarah', comments: 'Amplifying', rating: 7 },
	{ name: 'Alena', comments: 'Appending', rating: 8 }
];

// forEach does not let you short-cicuit/break out of a loop if a certain
// condition if met - for had to use the for loop instead.
teachers.forEach(teacher => {
	if (teacher.name === 'Nick') {
		console.log(teacher.rating); // break does not work
	}
	
	// for of loop allows you to iterate through the loop and break out when rewuired
	// for of can not be used with ordinary objects - but can be used with any iterable object
	// such as arrays, strings, maps & sets
	for(let teacher of teachers){
		if(teacher.name === 'Nick') {
			console.log(teacher.rating);
			break;
		}
	}
	
});