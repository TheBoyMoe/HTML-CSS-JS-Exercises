/* Examples of using bind(), apply() and call() */


// Using call() to 'borrow' methods from other objects
let john = {
	name: 'John Smith',
	age: 34,
	job: 'Developer',
	presentation: function (style, timeOfDay) {
		if(style === 'formal') {
			console.log(`Good ${timeOfDay}, Ladies and Gentlemen and Welcome, my name 
				is ${this.name} and I'm a ${this.age} year old ${this.job}`);
		} else if(style === 'informal') {
			console.log(`Hi, Good ${timeOfDay} and Welcome, my name 
				is ${this.name} and I'm a ${this.age} year old ${this.job}`);
		}
	}
};

let emily = {
	name: 'Emily Smith',
	age: 28,
	job: 'Designer'
};

let peter = {
	name: 'Peter Smith',
	age: 48,
	job: 'Teacher'
};

john.presentation('informal', 'Afternoon');

// Using call() to borrow methods - first parameter is the obj that you want to bind 'this' to
// use the call method to set the 'this' variable
john.presentation.call(emily, 'formal', 'Morning');


// Using the apply() method to borrow methods - similar to call() except you pass the args as an array
john.presentation.apply(peter, ['informal', 'Evening']);