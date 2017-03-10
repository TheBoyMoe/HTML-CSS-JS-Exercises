/*
	PROPERTY DESCRIPTORS
 */

// 1. start with a factory function
let createPerson = function (firstName, lastName, age) {
	// 2. create a person object
	let person = {};
	
	// 3. define data descriptor properties
	// 1st arg - obj, 2nd arg - prop name, 3rd arg - descriptor obj contains options to be set for this property
	
	// Object.defineProperty(person, 'firstName', {
	// 	value: firstName, // value of the property
	// 	writable: false, // prop read only if omitted or set to false
	// });
	
	// Object.defineProperty(person, 'lastName', {
	// 	value: lastName
	// });
	
	// OR define multiple properties at once
	Object.defineProperties(person, {
		// data properties - by default properties are not enumerable unless specified
		firstName: {
			value: firstName,
			writable: true,
			enumerable: true
		},
		lastName: {
			value: lastName,
			writable: true,
			enumerable: true
		},
		age: {
			value: age,
			enumerable: true
		},
		// accessor properties
		detail: {
			get: function () {
				return `Name: ${this.lastName}, ${this.firstName} age: ${this.age}`
			},
			set: function (value) {
				this.firstName = value;
			}
		}
	});
	
	return person;
};

// to return an object's enumerable properties use:

// Object.keys()) - passing in the obj of interest
 
 // OR iterate through the objs enumerable properties with a for/in loop

// for(let p in [obj of interest]) {
// 	console.log(p);
// }

