/* Returning functions from functions */
"use strict";
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
