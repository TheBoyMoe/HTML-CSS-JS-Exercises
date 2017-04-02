'use strict';

class Student {
	constructor({ firstname, lastname, age, interestLevel = 5 } = {}) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.age = age;
		this.interestLevel = interestLevel;
	}
	
	// getters take no parameters and must return a value
	get name() {
		return `${this.firstname} ${this.lastname}`;
	}
	
	// setters only take one parameter
	set name(str) {
		let name = str.split(' ');
		this.firstname = name[0];
		this.lastname = name[1];
	}
	
}


let steven = new Student({
	firstname: 'Steven',
	lastname: 'Smith',
	age: 27
});

// to access a getter/setter, reference it like a property               
console.log(steven.name);
steven.name = 'Peter Jones'; // can't set name property until a setter has been defined
console.log(steven.name);
    
    