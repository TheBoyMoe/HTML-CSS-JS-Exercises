/*
	Object constructor
 */

// using Object()ects
let person = new Object();
person.firstName = 'John';
person.lastName = 'Smith';
person.age = 29;
person.getInfo = function () {
	// you can call the propertires using the obj name, doesn't work where you're using anonymous functions
	return `Name: ${person.lastName}, ${this.firstName} age: ${this.age}`;
};

//using object literals
let person2 = {
	firstName: 'Tom',
	lastName: 'Jones',
	age: 22,
	getInfo: function () {
		return `Name: ${person2.lastName}, ${this.firstName} age: ${this.age}`;
	}
	
};

// two types of function that can be used in js to return objs, constructor and factor functions

// factory function
let  createPerson = function (firstName, lastname, age) {
	return {
		firstName: firstName,
		lastname: lastname,
		age: age,
		getInfo: function () {
			return `Name: ${lastname}, ${firstName} age: ${age}`;
		}
	}
};

