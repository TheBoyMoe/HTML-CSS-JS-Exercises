/*
	References:
	[1] http://wesbos.com/arrow-function-no-no/
 */


'use strict';

let Person = function (data) {
	for (let key in data) { // for in iterates over own/inherited props
		if(data.hasOwnProperty(key))
			this[key] = data[key];
	}
	this.getKeys = function () {
		 return Object.keys(this); // refers to the person instance
	};
	// fat arrow will bind 'this' of it's parent scope, ie, the Person object
	// it uses the 'this' of where it's defined and NOT of the context it is called in.
	// you can use this feature to call it out of scope - and will still work
	this.getKeys2 = ()=>{
		return Object.keys(this); // refers to the Person instance whether or not the method is called against the object
	}
	
};

let Alena = new Person({ name: 'Alena', role: 'Teacher' });
console.log('Alena\'s Keys:', Alena.getKeys()); // 'this' refers to 'Alena'
let getKeys = Alena.getKeys; // 'this' is undefined since the method is called out of scope

// 'this' is undefined in strict mode, returns type error .
// Refers to the window object in sloppy mode - returns all keys in the window object
// console.log(getKeys()); // returns TypeError

console.log('---------------------------------------');

let getKeys2 = Alena.getKeys2;
console.log(`called in-scope`, Alena.getKeys2());
console.log('re-assign obj method', getKeys2());


let Employee = function (id, department, role) {
	this.id = id;
	this.department = department;
	this.role = role;
	this.getId = function () {
		return `Id ${this.id}`;
	};
	this.getDepartment = function () {
		return `Department: ${this.department}`;
	};
	this.getObj = function () {
		console.log(this); // returns the instantiation of the employee obj
	}
};

// let pete = new Employee(123, 'HR', 'Manager');
// pete.getObj();