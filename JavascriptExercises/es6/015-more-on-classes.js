/*
 References:
 [1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 [2] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
 
 */

'use strict';

// class keyword is simply a convinence, does the same job as a constructor function
/*
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
*/
// Extending classes

// JS classes are not hoisted, define the class before any code that uses the class
// code in the constructor block is executed when the new keyword is used
class Person {
	constructor({ name, age, eyeColor = 'brown' } = {}) {
		this.name = name;
		this.age = age;
		this.eyeColor = eyeColor;
	}
	
	dance() {
		const dances = ['waltz', 'tango', 'mambo', 'foxtrot'];
		console.log(`${this.name} is doing the ${dances[Math.floor(Math.random() * dances.length)]}!`);
	}
}


// whenever extending a class, you must call super() in the child class constructor
// before assigning any values to the instance
class Student extends Person {
	constructor({name, age, interest = 5} = {}) {
		super({name, age});
		this.interest = interest;
		this.grades = new Map();
	}
	
	// override methods appearing in the aprent
	dance(traditional) {
		if(traditional) {
			super.dance(); // call the parents method
			return;
		}
		const dances = ['tap', 'jazz', 'ballet', 'disco'];
		console.log(`${this.name} is doing the ${dances[Math.floor(Math.random() * dances.length)]}!`);
	}
}

let stevenJ = new Student({ name: 'Steven', age: 22, interest: 3 });
stevenJ.dance(false);
console.log(stevenJ);