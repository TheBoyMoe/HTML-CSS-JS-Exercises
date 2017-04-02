/*
 References:
 [1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

'use strict';

// class keyword is simply a convinence, does the same job as a constructor function
class Student {
	constructor({name, age, interest = 5} = {}) {
		this.name = name;
		this.age = age;
		this.interest = interest;
		this.grades = new Map();
	}
}

let joey = new Student({ name: 'Joey', age: 25 });
let sarah = new Student({ name: 'Sarah', age: 22 });
let dummy = new Student();

sarah.grades.set('History', 'C');
sarah.grades.set('Math', 'B');
sarah.grades.set('English', 'C');

console.log(joey);
console.log(sarah);
console.log(dummy);

console.log(Array.from(sarah.grades)); // convert map into array