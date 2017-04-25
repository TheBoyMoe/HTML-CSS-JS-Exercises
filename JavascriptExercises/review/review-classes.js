'use strict';

// ES5 constructor/prototype example
function PersonES5(firstname, lastname, age) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.age = age;
}

PersonES5.prototype.greet = function () {
	console.log('Hello my name is ', this.firstname);
};

PersonES5.prototype.description = function () {
	console.log(`name: ${this.firstname} ${this.lastname}, age: ${this.age}`);
};

let persones5 = new PersonES5('Peter', 'Jones', 34);
persones5.greet();
persones5.description();

// ES6 Class example
class Person {
	constructor(firstname, lastname, age) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.age = age;
	}
	description(){
		console.log(`name: ${this.firstname} ${this.lastname}, age: ${this.age}`);
	}
	greet(){
		console.log('Hello my name is ', this.firstname);
	}
}

let person = new Person('John', 'Smith', 33);
person.greet();
person.description();