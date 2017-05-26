// count variable is global and shared by both methods
// 1. use two different variables
// 2. use closures (function with access to it's own private variables)

var count = 0;
var countDog = 0;

function countBirds() {
  count += 1;
  return count + ' birds';
}

function countDogs() {
	countDog += 1;
	return countDog + ' dogs';
}


//////
var birds = 3;

function dogHouse() {
	let dogs = 8;
	console.log(birds); // 3
	console.log(dogs); // 8
}

console.log(birds); // 3
// console.log(dogs); // ReferenceError - undeclared


// 2. Closure - has access to variables outside of it's scope as well as it's own variables.
// variables in nested functions are not visible to their enclosing scope
// By returning the inner/nested function - we can access and modify private variables
// Every time the outer function is called a new 'private' scope is created which is separate from any closures created previously
function dogHouseClosure() {
	let dogs = 0;
	function showDogs() {
		console.log(++dogs);
	}
	return showDogs;
}

let getDogs = dogHouseClosure();
getDogs(); // 1


// 3. use closures to solve countBirds and Dogs problem
// each counter is private to the returned closure, 'surviving' the outer function returning
function countBirdsClosure() {
	let count = 0;
	return function() {
		return `${++count} birds`;
	}
}

function countDogsClosure() {
	let count = 0;
	return function () {
		return `${++count} dogs`;
	}
}

// each time animalCounter is called a new counter with it's own private
// scope is created, independent to any other
function animalCounter(animal) {
	let count = 0;
	return function () {
		return `${++count} ${animal}`;
	}
}
