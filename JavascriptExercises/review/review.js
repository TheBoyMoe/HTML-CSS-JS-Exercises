'use strict';

// 1. Object literals and setting properties
const person = {
	// firstname: 'John',
	// age: 34
};

let first = 'firstname';
let last = 'lastname';
let adr = 'address';
let years = 'age';

person[first] = 'John';
person[last]= 'Smith';
person[adr] = '1 Pimlico Way, WC1 London';
person[years] = 44;

// console.log('----------------------------');
// console.log(person.firstname, person.lastname, person.address, person.age);
// console.log('----------------------------');
// console.log(person[first], person[last], person[adr], person[years]);
// console.log(person);


// 2. Rest operator - takes a list of args and returns an array
const sum = (...nums)=>{
	console.log(nums); // nums is now an array
	return nums.reduce((current, next)=>{
		return current + next;
	}, 0);
};

console.log(sum(23,34,3,345,12,53,34,3,45,56,2,124,9));


// 3. Spread operator - split an array of values into a list of comma separated args
let numbers = [23,34,3,345,12,53,34,3,45,56,2,124,9];
console.log(...numbers);
console.log(Math.max(...numbers));
console.log(Math.max.apply(null, numbers)); // same functionality in ES5 using apply() - can be called on any function