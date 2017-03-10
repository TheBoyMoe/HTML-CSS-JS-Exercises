/*
	Object constructor
 */

// using Object()ects
let person = new Object();
person.firstName = 'John';
person.lastName = 'Smith';
person.age = 29;
person.getInfo = function () {
	return `Name: ${this.lastName}, ${this.firstName} age: ${this.age}`;
};

//using object literals
let person2 = {
	firstName: 'Tom',
	lastName: 'Jones',
	age: 22,
	getInfo: function () {
		return `Name: ${this.lastName}, ${this.firstName} age: ${this.age}`;
	}
	
};