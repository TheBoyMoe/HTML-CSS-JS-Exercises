'use strict';

// 1. Object literals and setting properties
const person = {
	// firstname: 'John',
	// age: 34
};

let first = 'firstname';
let last = 'lastname';
let adr = 'address';
let years = 'age';

person[first] = 'John';
person[last]= 'Smith';
person[adr] = '1 Pimlico Way, WC1 London';
person[years] = 44;

// console.log('----------------------------');
// console.log(person.firstname, person.lastname, person.address, person.age);
// console.log('----------------------------');
// console.log(person[first], person[last], person[adr], person[years]);
// console.log(person);


// 2. Rest operator - takes a list of args and returns an array
const sum = (...nums)=>{
	console.log(nums); // nums is now an array
	return nums.reduce((current, next)=>{
		return current + next;
	}, 0);
};

console.log(sum(23,34,3,345,12,53,34,3,45,56,2,124,9));


// 3. Spread operator - split an array of values into a list of comma separated args
let numbers = [23,34,3,345,12,53,34,3,45,56,2,124,9];
console.log(...numbers);
console.log(Math.max(...numbers));
console.log(Math.max.apply(null, numbers)); // same functionality in ES5 using apply() - can be called on any function

// 4. For of loop (use for arrays, use For in to iterate through an object)
for(let num of numbers)
	console.log(num);

// 5. destructuring of arrays and object

// assign the first 3 values to a,b,and c. The remaining to d as an array
let [a,b,c, ...d] = numbers; // pass in the rest parameter
console.log(a,b,c,d); // 23, 34, 3, [345,12,53,34,3,45,56,2,124,9]

// you can also use default values with destructuring
// if you try to pull out more values than exist in the array,
// and you've not used a default value, variable assigned undefined
let nums = [1,2,3], i;
let [e = 5, f, g = 10, h = 20] = nums;
console.log(e,f,g,h,i); // 1,2,3,20, undefined

// you can use destructuring to swap variable values, without temp variable to hold one of those values
let j = 5, k = 10;
[k, j] = [j, k]; // create an array, to destructure it
console.log('j %d, k %d', j, k);

// you can ignore values in an array
let [l, ,m, , n, ...o] = numbers; // 23, 3, 12, [53,34,3,45,56,2,124,9]
console.log('l %d, m %d, n %d, o', l, m, n, o);