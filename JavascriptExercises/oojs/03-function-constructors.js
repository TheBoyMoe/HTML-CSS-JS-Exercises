/* Basic object construction */

let john = {
	name: 'john',
	dob: 1990,
	job: 'teacher'
};

/* Function constructor - blue print for creating objects
   the parameters are the props that you want to set when instantiating the obj	*/
let Person = function (name, yob, job) {
	this.name = name;
	this.yob = yob;
	this.job = job;
};

// function constructor containing obj methods
let Employee = function (id, department, role) {
	this.id = id;
	this.department = department;
	this.role = role;
	this.getId = function () {
		return `Id ${this.id}`;
	};
	this.getDepartment = function () {
		return `Department: ${this.department}`;
	}
};


/* Instantiate the obj using the new keyword
	1. an empty obj is 1st created,
	2. obj constructor is called
	3. execution context is created with 'this' pointing to the empty obj
	4. results in properties being set on the new empty obj
	5. if the function has no return value, the obj is returned */

let mike = new Person('John Smith', 1990, 'teacher');
let jane = new Person('Jane Smith', 1995, 'designer');
let ralph = new Person('Ralph Smith', 1948, 'retired');

/* Instead of adding functions directly to the obj constructor, as in the employee example
   add them to the objs prototype - the objs no longer have the functions 'within' them - are
   instead inherited by all instances of that obj from their prototype
   
   You WOULD NOT use prototypal inheritence for properties - otherwise all obj instances
   would inherit the same property value - define properties in the function constructor
   and set the values by using the args passed to the constructor*/

Person.prototype.calculateAge = function () {
	let year = new Date().getFullYear();
	return `Age ${year - this.yob}`;
};

Person.prototype.getName = function () {
	return `Name: ${this.name}`;
};

Person.prototype.getOccupation = function () {
	return `Occupation: ${this.job}`;
};