"use strict";

// Rest and spread operator
const numbers = [1,2,3,4,5];

// rest operator - pass in a comma separated list of args, treated as an array
const addNum = (...arr)=>{ // can't now pass in an array
	return arr.reduce((current , next)=>{
		return current + next;
	}, 0);
};

console.log(addNum(1,2,3,4,5));

// spread operator - used to pass an array of values where the function is expecting a comma separated list
console.log(Math.max(...numbers));


// Destructure Arrays and objects

// // destructuring in arrays depends on item position
let [a = 5, ,b = 20, ...c] = numbers;
console.log(a,b,c); // 1,3,[4,5]

[b,a] = [a,b]; // swap values


// destructuring objects is based on property name
const person = {
	firstname: 'John',
	lastname: 'Jones',
	age: 34,
	greet(){
		return `Hello my name is ${this.firstname} ${this.lastname} and I'm ${this.age} yrs old`;
	},
	hello(){
		return 'Hello Everyone';
	}
};

let {greet: description, hello: greeting} = person;
console.log(person.greet()); // works
// console.log(person.description()); // TypeError - description not a function
// greet(); // Reference Error - due to alias
// description(); // TypeError - 'this' is undefined
console.log(greeting()); // works