"use strict";

// Rest and spread operator
const numbers = [1,2,3,4,5];

// rest operator - pass in a comma separated list of args, treated as an array
const addNum = (...arr)=>{ // can't now pass in an array
	return arr.reduce((current , next)=>{
		return current + next;
	}, 0);
};

console.log(addNum(1,2,3,4,5));

// spread operator - used to pass an array of values where the function is expecting a comma separated list
console.log(Math.max(...numbers));


// Destructure Arrays and objects
