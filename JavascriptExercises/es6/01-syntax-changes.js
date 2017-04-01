/*
	fat arrow function  and 'this' keyword
	
	Fat arrow functions set the 'this' to the context where the function is defined,
	NOT to the context where the function is called
	
	*/

// variables defined with let/const are NOT hoisted
// you can create let/const variables with the same name as long as they are in a different scope (function/block)
// variables defined using let/const created in outer scopes are visible to nested scopes, just like var defined variables.

let btnFn = function() {
	console.log(this); // btn obj
};

let btnFn2 = ()=>{
	console.log(this); // window obj
};



// define a html doc with a button element
const btn = document.querySelector('button');
btn.addEventListener('click', btnFn2);




function fn(){
	console.log('outside', this); // window obj / undefined in strict mode
	return function(){
		console.log('inside', this); // window obj / undefined in strict mode
	}
}

// fn()();

const fn2 = ()=>{
	'use strict';
	console.log('outside', this); // window obj in strict/sloppy mode
	return ()=>{
		console.log('inside', this); // window obj in strict/sloppy mode
	}
};
// fn2()();

let obj = {
	fnObj: function(){
		'use strict';
		console.log('this',this); // obj called on in strict/sloppy mode
		let that = this;
		return function(){
			//console.log('inside',this); // window obj in sloppy mode/ undefined strict mode
			console.log('that', that); // obj
		}
	}
};

// obj.fnObj()();

let obj2 = {
	fnObj: ()=>{
		'use strict';
		// console.log('outside', this); // window obj in both strict and sloppy mode
		return ()=> {
			console.log('inside', this); // window obj in strict and sloppy mode
		}
	}
};

// obj2.fnObj()();


let person = {
	firstname: 'Tom',
	lastname: 'Thumb',
	getName: function () {
		console.log('outside', this); // obj
		return ()=> {
			"use strict";
			console.log('inside', this); // obj
			return `${this.firstname} ${this.lastname}`; // returns name
		}
	}
};

let employee = {
	firstname: 'Helen',
	lastname: 'Thumb',
	getName: ()=>{
		// return `${this.firstname} ${this.lastname}`; // returns undefined
		console.log(this); // window obj
		return `${employee.firstname} ${employee.lastname}`; // returns name
	}
};


/* ES6 method definitions */
let staff = {
	firstname: 'Peter',
	lastname: 'Jones',
	job: 'Developer',
	getName() {
		//"use strict";
		console.log(this); // obj
		return `${this.firstname} ${this.lastname}`; // returns name
	},
	getDescription() {
		"use strict";
		console.log(this); //obj
		return `${this.firstname} ${this.lastname} is a ${this.job}`;
	},
	fn() {
		"use strict";
		console.log('outside',this); // obj
		return ()=> {
			console.log('inside', this); // obj
			return `${this.firstname} ${this.lastname} is a ${this.job}`;
		}
	}
	
};


/* using string method and dynamic property names on objects */

let ageField = 'age';

let dynPerson = {
	firstname: 'Tom',
	lastname: 'Jones',
	[ageField]: 28, // property name is set to the value of the variable
	'hello everyone'() {
		"use strict";
		return `Hello everyone, my name is ${this.firstname} ${this.lastname}`;
	}
};
console.log(dynPerson.age);
console.log(dynPerson[ageField]);
console.log(dynPerson['hello everyone']());