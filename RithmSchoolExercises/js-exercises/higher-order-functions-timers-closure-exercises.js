 /*
 	COUNTDOWN
 
	Write a function called countdown that accepts a number as a parameter and every
	1000 milliseconds decrements the value and console.logs it.
	
	Once the value is 0 it should log "DONE!" and stop.
	
	countDown(4);
	// 3
	// 2
	// 1
	// "DONE!"
 
  */
 function countDown(num) {
	 let counter = setInterval(function () {
		 if(num === 0) {
			 clearInterval(counter);
			 console.log('DONE!');
			 return;
		 }
		 --num;
		 console.log(num);
	 }, 1000);
	
 }
 
/*
 	RANDOM GAME
 
	Write a function called randomGame that selects a random number between 0 and 1 every 1000
	milliseconds and each time that a random number is picked, add 1 to a counter.
	
	If the number is greater than .75, stop the timer and return the number of tries it took
	before we found a number greater than .75.
 
  */

 function randomGame() {
	 let counter = 0;
	 let randomNum = setInterval(function () {
		 let num = Math.random();
		 ++counter;
		 console.log('counter ' + counter + ' num: ' + num);
		 if(num > 0.75) {
			 clearInterval(randomNum);
			 console.log('Counter' + counter);
		 }
	 }, 1000);
	
 }
 
 /*
 	ISEVEN
 
	Write a function called isEven which takes in a number and returns true if the number is
	even and returns false if it is not
	
	isEven(2); // true
	isEven(3);

  */
function isEven(num) {
	return (num%2 === 0)
}

/*
	ISODD
 
	Write a function called isOdd which takes in a number and returns true if the number
	is odd and returns false if it is not
	
	isOdd(3); // true
	isOdd(14); // false

 */
function isOdd(num) {
	return (num%2 !== 0)
}

/*
	ISPRIME
 
	Write a function called isPrime which takes in a number and returns true if the number
	is a prime number (is greater than 1 and can only be divided in whole by itself and 1),
	otherwise returns false
	
	isPrime(8); // false
	isPrime(17); // true
	
	References
	[1] https://www.thepolyglotdeveloper.com/2015/04/determine-if-a-number-is-prime-using-javascript/
	[2] http://studymaths.co.uk/topics/checkIfPrime.php
	
	
 */
function isPrime(num) {
	for(let i = 2; i < num; i++) {
		if(num%i === 0) return false;
	}
	return num > 1
}


/*
	NUMBER FACT
 
	Write a function called numberFact which takes in a number and a callback and returns
	the result of the callback with the number passed to it
	
	numberFact(59,isEven); // false
	numberFact(59,isOdd); // true
	numberFact(59,isPrime); // true

 */
function numberFact(num, callback) {
	return callback(num);
}


/*

	FIND
 
	Write a function called find. It should take in an array and a callback and return the
	first value found in the array that matches the condition.
	
	find([8,11,4,27], function(val){return val >= 10}); // 11
	find([8,11,4,27], function(val){return val === 5}); // undefined
	

 */

function find(arr, callback) {
	for(let i = 0; i < arr.length; i++) {
		if(callback(arr[i])) return arr[i];
	}
}

// example callbacks
function func1(num) {
	return num >= 10;
}

function func2(num) {
	return num === 5;
}


/*
	FIND INDEX
 
	Write a function called findIndex. It should take in an array and a callback and
	return the index of first value found in the array that matches the condition.
	
	// returns 1 (index of the first value greater than or equal to 10)

	findIndex([8,11,4,27], function(val){return val >= 10});
	
	findIndex([8,11,4,27], function(val){return val === 7}); // undefined
	

 */
function findIndex(arr, callback) {
	for(let i = 0; i < arr.length; i++) {
		if(callback(arr[i])) return i;
	}
}

/*
	SPECIAL MULTIPLICITY
 
	Write a function called specialMultiply which accepts two parameters.
	If the function is passed both parameters, it should return the product of the two.
	If the function is only passed one parameter - it should return a function which can
	later be passed another parameter to return the product. You will have to use closure
	and arguments to solve this.
	
	specialMultiply(3,4); // 12
	specialMultiply(3)(4); // 12
	specialMultiply(3); // returns a function


 */
function specialMultiply(a, b) {
	if(arguments.length === 2) return a*b;
	if(arguments.length === 1) {
		let val = arguments[0];
		return function (c) {
			return val*c;
		}
	}
}
