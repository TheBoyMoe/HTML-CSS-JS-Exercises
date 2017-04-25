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

// let persones5 = new PersonES5('Peter', 'Jones', 34);
// persones5.greet();
// persones5.description();

// ES6 Class example
class Person {
	constructor(firstname='Fred', lastname='Bloggs', age=100) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.age = age;
	}
	description(){
		console.log(`name: ${this.firstname} ${this.lastname}, age: ${this.age}`);
	}
	greet(){
		return 'Hello my name is ' + this.firstname;
	}
}

// let person = new Person('John', 'Smith', 33);
// person.greet();
// person.description();

// Inheritance in ES6 - child inherits the props and methods of the parent
class Employee extends Person {
	constructor(firstname, lastname, age, ninumber){
		super(firstname, lastname, age);
		this.ninumber = ninumber;
 	}
}

let employee = new Employee('Simon', 'Jones', 33, 'NI8789789789');
// employee.greet();
// employee.description();

// Manager uses the constructor of it's parent
// define one if you need to add more properties
// constructor needs to call super
class Manager extends Employee {
	// if you call an empty constructor like this, you'll be overriding the parent's,
	//  so none of the properties will be set unless you've set defaults
	
	// constructor(){
	// 	super();
	// }
	
	// the parent's constructor is automatically called when one is not used and set the object's properties
	// can't call a constructor without calling the parents constructor through super()
	
	// override parent method
	greet(){
		// call the parent method via a call to super ('this' will point to the parent object), otherwise you call the child version
		console.log(super.greet(),'Overridden parent greet method');
	}
	
}


let manager = new Manager('Tom', 'Jones', 88, 'NI9876476');
// manager.greet();
// manager.description();


class StoreManager extends Manager{
	// the other properties will be set to undefined unless default values have been set
	constructor(address){
		super();
		this.address = address;
	}
}

let storeManager = new StoreManager('Tom', 'Peters', 77, 'NI89798789', '1 the Street, London');
// storeManager.greet();
// storeManager.description();


class AreaManager extends Person {
	description(){
		// call the parents version of description()
		// 'this' points to the object the method is called on,
		// in this case AreaManager
		super.description();
	}
}

let areaManager = new AreaManager('Dick', 'Chaney', 88, 'NI2365726354');
areaManager.description();