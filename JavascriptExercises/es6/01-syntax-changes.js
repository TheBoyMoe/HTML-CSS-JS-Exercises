/*
	fat arrow function  and 'this' keyword
	
	Fat arrow functions set the 'this' to the context where the function is defined,
	NOT to the context where the function is called
	
	*/

// variables defined with let/const are NOT hoisted
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
		return `${this.firstname} ${this.lastname}`; // returns name
	}
};

let employee = {
	firstname: 'Helen',
	lastname: 'Thumb',
	getName: ()=>{
		// return `${this.firstname} ${this.lastname}`; // returns undefined
		return `${employee.firstname} ${employee.lastname}`; // returns name
	}
};

