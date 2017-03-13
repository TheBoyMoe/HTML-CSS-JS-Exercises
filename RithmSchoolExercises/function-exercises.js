/*
	Print Day
	
	this function takes in one parameter (a number from 1-7) and returns the day
	of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less
	than 1 or greater than 7, the function should return undefined;
	
 */

function printDay(num) {
	let week = {1: 'monday', 2: 'tuesday', 3: 'wednesday', 4: 'thursday', 5: 'friday', 6: 'saturday', 7: 'sunday'};
	if(num > 0 || num < 8) {
		return week[num];
	}
}


/*
	Multiple Letter Count
 
	this function takes in one parameter (a string) and returns an object with the keys being
	the letters and the values being the count of the letter.
	
	Examples:
	multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
	multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

 */

function multipleLetterCount(str) {
	if(typeof str !== 'string') str = '';
	let obj = {};
	str.split('').forEach(function (letter) {
		obj[letter] = obj[letter] || 0;
		obj[letter]++;
	});
	return obj;
}


/*
	Array Manipulation
 
	this function should take in at most four parameters (an array, command, location, and value).
	
	If the command is "remove" and the location is "end", the function should remove the last value
	in the array and return the value removed. (In this case, the function only needs three arguments.)
	
	If the command is "remove" and the location is "beginning", the function should remove the first value
	in the array and return the value removed. (In this case, the function only needs three arguments.)
	
	If the command is "add" and the location is "beginning", the function should add the value (fourth parameter)
	to the beginning of the array and return the array.
	
	If the command is "add" and the location is "end", the function should add the value (fourth parameter)
	to the end of the array and return the array.
	
	Examples:
	
	arrayManipulation([1,2,3], "remove", "end"); // 3
	arrayManipulation([1,2,3], "remove", "beginning"); // 1
	arrayManipulation([1,2,3], "add", "beginning", 20); // [20,1,2,3]
	arrayManipulation([1,2,3], "add", "end", 30); // [1,2,3,30]

 */

function arrayManipulation(arr, cmd, loc, value) {
	if(arguments.length > 4) return 'Function accepts 4 args at most';
	if( cmd === 'remove') {
		if(loc === 'end') return arr[arr.length - 1];
		if(loc === 'beginning') return arr[0];
	} else if(cmd === 'add'){
		if(loc === 'beginning') arr.unshift(value);
		else if(loc === 'end') arr.push(value);
		return arr;
	}
}


/*
	IS PALINDROME
 
	A Palindrome is a word, phrase, number, or other sequence of characters which reads the same
	backward or forward. This function should take in one parameter and returns true or false
	if it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization
	so that isPalindrome('a man a plan a canal Panama'); returns true
	
	Examples:
	
	isPalindrome('testing'); // false
	isPalindrome('tacocat'); // true
	isPalindrome('hannah'); // true
	isPalindrome('robert'); // false

	References:
	[1] https://medium.freecodecamp.com/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7#.iixx2ic75
	[2] http://codepen.io/jeffreypoland/pen/iuItG/
	
	
 */

function isPalindrome(str) {
	str = str.replace(/[^A-Z0-9]/gi, '').toLowerCase();
	let reverse = str.split('').reverse().join('');
	return reverse === str;
}


/*
	ROCK/PAPER/SCISSORS
 
	using your knowledge so far, build a game of Rock/Paper/Scissor where through the use
	of the prompt function, a user can enter their choice and based on a random selection -
	they can either tie/win or lose against a computer.

 */
function rps() {
	let user = prompt('Enter R, P or S').toLowerCase();
	if(!user.match(/[rps]/g)) return rps();
	let num = Math.floor(Math.random() * 3) + 1;
	let moves = {1: 'r', 2: 's', 3: 'p'};
	let move = moves[num];
	if(user === move) return 'tie';
	if((user === 'r' && move === 's') || (user === 's' && move === 'p') || user === 'p' && move === 'r') return 'win';
	return 'lose';
}