'use strict';

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

console.log('----------------------------');
console.log(person.firstname, person.lastname, person.address, person.age);
console.log('----------------------------');
console.log(person[first], person[last], person[adr], person[years]);
console.log(person);
