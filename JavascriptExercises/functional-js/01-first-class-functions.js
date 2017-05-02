/* Returning functions from functions */
"use strict";
const fs = require('fs');

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


// more functional programming examples

// 1. Array.prototype.filter()
const animals = [
	{name: 'max', species: 'rabbit'},
	{name: 'rex', species: 'dog'},
	{name: 'fido', species: 'dog'},
	{name: 'sylvester', species: 'cat'},
	{name: 'mcCoy', species: 'cat'},
	{name: 'goldie', species: 'fish'}
];

// using for of loop
let dogs = [];
for(let animal of animals) {
	if(animal.species === 'dog')
		dogs.push(animal);
}

// using filter
const cats = animals.filter((animal)=>{
	return animal.species === 'cat';
});

// OR - making it composible
const notDog = (animal)=>{
	return animal.species !== 'dog';
};
const notDogs = animals.filter(notDog);


console.log(dogs);
console.log(cats);
console.log(notDogs);


// 2. using Array.prototype.map()

let names = [];
for(let animal of animals){
	names.push(animal.name);
}

const names2 = animals.map((animal)=>{
	return animal.name;
});

console.log(names);
console.log(names2);


// 3. using Array.prototype.reduce()
const orders = [
	{amount: 250},
	{amount: 450},
	{amount: 350},
	{amount: 150}
];

let sum = 0;
for(let order of orders)
	sum += order.amount;

console.log('for loop %d', sum);

let result = orders.reduce((reducedSum, order)=>{
	return reducedSum + order.amount;
}, 0);

console.log('reduce %d', result);

// more reduce example

// read the contents of the data.txt file, passing the character encoding ensures that a string is returned
const output = fs.readFileSync('data.txt', 'utf-8')
	.trim() // remove any spaces at start or end
    .split('\n') // split at line break
    .map((line) => line.replace('\r', '')) // remove carriage return at end of string
	.map((line) => line.split('\t')); // convert each string into an array of strings, splitting at '\t'
console.log(output);

