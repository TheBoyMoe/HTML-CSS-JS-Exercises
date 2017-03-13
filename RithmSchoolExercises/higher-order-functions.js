/*
	write a function called each which accepts two parameters: an array and a callback function.
	The each function should loop over the array passed to it and run the callback
	function on each element in it.
	
	// this function should accept 2 parameters, put them in!
	function each(){
		// put your code inside here!
	}
	
	
	each([1,2,3,4], function(val){
		console.log(val);
	});
	// Here is what should be output if you wrote the function correctly
	
	// 1
	// 2
	// 3
	// 4
	
	each([1,2,3,4], function(val){
		console.log(val*2);
	});
	
	// Here is what should be output if you wrote the function correctly
	
	// 2
	// 4
	// 6
	// 8


 */

function each(arr, fn) {
	for(let i = 0; i < arr.length; i++){
		fn(arr[i]);
	}
}

function print(val) {console.log(`${val}`)}

function printDouble(val) {console.log(`${val*2}`)}


/*
 
	Write a function called map which accepts two parameters: an array and a callback.
	The map function should return a new array with the result of each value being passed
	to the callback function. Here's an example:
	
	map([1,2,3,4], function(val){
		return val * 2;
	}); // [2,4,6,8]


 */

function map(arr, fn) {
	let temp = [];
	for(let i = 0; i < arr.length; i++) {
		fn(temp, arr[i]);
	}
	return temp;
}

function mapCallback(arr, val) {
	 return arr.push(val*2);
}


/*
	
	Write a function called reject which accepts two parameters an array and a callback.
	The function should return a new array with all of the values that do not return true
	to the callback. Here are two examples:
	
	reject([1,2,3,4], function(val){
		return val > 2;
	}); // [1,2]
	
	reject([2,3,4,5], function(val){
		return val % 2 === 0;
	}); // [3,5]

 */


function reject(arr, fn) {
	let temp = [];
	for(let i = 0; i < arr.length; i++) {
		if(!fn(arr[i])) temp.push(arr[i]);
	}
	return temp;
}

function greaterThanTwo(val) {
	return(val > 2);
}

function even(val) {
	return (val%2 === 0);
}


/*
	Asynchronous

 */
// console.log('first');
// setTimeout(function () {
// 	console.log('second');
// }, 0);
// console.log('third');


function foo(b) {
	let a = 10;
	return a+b+11;
}

function bar(x) {
	let y = 3;
	return foo(x*y);
}

console.log(bar(7));


/*
	CLOSURES
	
 */

function createInstructors() {
	let instructors = ['tom', 'dick', 'harry'];
	return {
		displayInstructors: function () {
			return instructors;
		},
		addInstructors: function (instructor) {
			instructors.push(instructor);
			return instructors;
		},
		removeInstructors: function (instructor) {
			instructors = instructors.filter(function (elm) {
				return elm !== instructor;
			});
			return instructors;
		}
	}
}

/*  combine closures with IIFEs */

let instructorModule = (function createInstructors() {
		let instructors = ['tom', 'dick', 'harry'];
		return {
			displayInstructors: function () {
				return instructors;
			},
			addInstructors: function (instructor) {
				instructors.push(instructor);
				return instructors;
			},
			removeInstructors: function (instructor) {
				instructors = instructors.filter(function (elm) {
					return elm !== instructor;
				});
				return instructors;
			}
		}
	}
)();

let instructorModule2 = (function createInstructors(instructors) {
		return {
			displayInstructors: function () {
				return instructors;
			},
			addInstructors: function (instructor) {
				instructors.push(instructor);
				return instructors;
			},
			removeInstructors: function (instructor) {
				instructors = instructors.filter(function (elm) {
					return elm !== instructor;
				});
				return instructors;
			}
		}
	}
)(['tom', 'dick', 'harry']);


let instructorModule3 = (function createInstructors(instructors) {
		
	function addInstructor(instructor) {
		instructors.push(instructor);
		return instructors;
	}
	
	function removeInstructor(instructor) {
		instructors = instructors.filter(function (elm) {
			return elm !== instructor;
		});
		return instructors;
	}
	
	function displayInstructors() {
		return instructors;
	}
	
	return {
		display: displayInstructors,
		add: addInstructor,
		remove: removeInstructor 
	}
	
})(['tom', 'dick', 'harry']);
