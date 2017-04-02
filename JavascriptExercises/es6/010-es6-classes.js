/*
	Objects, Function Constructors & 'this' - Summary:
	
	Function constructors - stick to es5 functions on prototypes (fat arrow does not bind the obj)
	
	Object literals - only use fat arrows as nested functions returned by es5/6 function call to ensure
						it binds the obj instance and not the global obj
 */


/* ES5 function constructor */
'use strict';

function Person(firstname, lastname, year) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.year = year;
	this.getAge = function () {
		console.log('inside fn' ,this); // person instatnce
		return 2017 - this.year;
	};
	this.getAge2 = ()=>{
		console.log('inside arrow', this); // person instance
		return 2017 - this.year;
	}
}

Person.prototype.getAge3 = function(){
	console.log('outside fn', this); // person instance
	return 2017 - this.year;
};

// fat arrow binds to the context of it's parent where it's defined, e.g the global object
Person.prototype.getAge4 = ()=>{
	console.log('outside arrow', this); // window obj in strict/sloppy mode
	return 2017 - this.year;
};



/* Using Object literals */
let person = {
	firstname: 'Peter',
	lastname: 'Jones',
	age: 35,
	getAge: function () {
		console.log('inside fn', this); // person obj
		return ()=>{
			console.log('fn nested arrow', this); // person obj
		}
	},
	getAge2() {
		console.log('inside es6', this); // person obj
		return ()=>{
			console.log('es6 nested arrow', this); // person obj
		}
	},
	getAge3: ()=>{
		console.log('inside arrow', this); // window object
		return ()=>{
			console.log('arrow nested arrow', this); // window obj
		}
	}
};



/* ES6 Classes */

class Animal {
	// give the object properties using the reserved constructor keyword (otherwise not req'd)
	constructor(type, weight = 'unknown', age = 'unknown'){
		this.species = 'animal';
		this.type = type;
		this.weight = weight;
		this.age = age;
	}
	
	// define functions
	getType() {
		console.log(this);
		return `Animal of type ${this.type}, weighing ${this.weight}`; // obj instance
	}
}

Animal.prototype.getDescription = function () {
	console.log(this); // obj instance
	return `Animal of type ${this.type}, weighing ${this.weight}`;
};

Animal.prototype.getFn = ()=>{
	console.log(this); // window obj
};

let dog = new Animal('dog', '24kg');