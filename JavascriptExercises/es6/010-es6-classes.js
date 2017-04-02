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
		this.species = 'mammal';
		this.type = type;
		this.weight = weight;
		this.age = age;
	}
	
	// define functions
	getType() {
		// console.log(this); // obj instance
		return `I am a ${this.type}, weighing ${this.weight}`; // obj instance
	}
}

Animal.prototype.getDescription = function () {
	//console.log(this); // obj instance
	return `I am a ${this.age} year old ${this.type}`;
};

Animal.prototype.getFn = ()=>{
	console.log(this); // window obj
};

let cat = new Animal('cat', '4kg', 12);


/* ES6 Classes and inheritence - inherits all the properties and methods of the parent, which can be overridden if necessary */

class Dog extends Animal {
	constructor(name, type, weight, age) {
		super(type, weight, age); // call the parents constructor passing to set the appropriate props
		this.name = name;
	}
	// override parent methods, and call them too!
	getType() {
		return `My name is ${this.name}, ${super.getType()}`;
	}
}

// you can't call methods on the class directly, e.g Dog.getType(),
// you have to instantiate an instance of that class
let dog = new Dog('Max', 'dog', '24kg', 6);

// Like many other languages, you can use the static keyword to enable
// calling methods without having to instantiate an instance of the class first.
// You can also export classes using the export keyword (in front of the class name)
//  - import them into other files (import by name, eg Helper) with the import keyword just like any other import
// 		using the classes name
class Helper {
	static log() {
		console.log(`example of using the static keyword`);
	}
}



/* ES6 classes and getters and setters
 	- make a classes props private
 	- check an example of es5 constructor functions and prototypal inheritence
 			- oojs/05-constructor-functions-and-inheritance.js
  */

class Vehicle {
	// when defining getters and setters, you can't use the same prop name
	// for the name of the method, thus props are prefixed with the underscore
	constructor(model, make) {
		this._model = model;
		this._make = make;
	}
	
	
	// underscore to indicate that the prop is private,
	// the property is NOT actually private if you prepend it's name with the underscore
	// using getters/setters allows you to control data retrieving and setting values
	get model() { // retrieve value via car.model
		return this._model.toLowerCase();
	}
	
	// get make() { // retrieve value via car.make
	// 	return this._make;
	// }
	
	
	set model(value) { // set value via car.model
		if(value.length > 2)
			this._model = value;
		else
			console.log(`not valid entry,  try again`);
	}
}

let car = new Vehicle('Vantage', 'Aston Martin');
console.log(car.model); // 'vantage'
console.log(car.make); // undefined - no getter - accessible via car._make
car.model = 'DB7';
car.make = 'Fiat';
console.log(car.model); // 'db7'
console.log(car.make); // creates a new make property on the car obj, _make is unchanged