/*
	NESTED ARRAY EXERCISES
	 
	Given the following array, write a function called countVowels, which returns the count of
	all of the vowels in each string regardless of case. To see if a value is an array, you can
	not use typeof since that will return 'object', so one way to do this is
	by using the Array.isArray function.
	
	var arr = []
	Array.isArray(arr) // true
	Array.isArray('Hello') // false
	
	var nestedArr = ['Elie', ['Matt', ['Tim']],['Colt',['Whisky',['Janey'], 'Tom']], 'Lorien'];
	
	allVowels() // 13

 */

let count = 0;
function countVowels(arr) {
	arr.forEach(function (elm) {
		if(!Array.isArray(elm) && typeof elm === 'string') {
			elm.toLowerCase().split('').forEach(function (l) {
				if('aeiou'.includes(l)) count++;
			})
		} else {
			countVowels(elm);
		}
	});
	return count;
}


/*
 
Write a function called rotate which takes an array and a number, and moves each element however
many spaces the number is to the right. For the value at the end of the array, rotate should move
it back to the beginning.

rotate([1,2,3], 1) // [3,1,2]
rotate([1,2,3], 2) // [2,3,1]
rotate([1,2,3], 3) // [1,2,3]


 */

function rotate(arr, num) {
	let temp = [], index = 0;
	arr.forEach(function (val, i, arr) {
		if(i + num < arr.length) {
			temp[i + num] = val;
		} else {
			index = (i + num) - arr.length;
			temp[index] = val;
		}
	});
	return temp;
}


/*

	Write a function called makeXOGrid which takes in two parameters, rows and columns,
	and returns an array of arrays with the number of values in each subarray equal to the
	columns parameter and the number of subarrays equal to the rows parameter.
	The values in the sub-arrays should switch between "X" and "O".
	
	makeXOGrid(1,4) -> [["X","O","X","O"]]
	
	makeXOGrid(3,2) -> 	[["X","O"],["X","O"],["X","O"]]
	 
	makeXOGrid(3,3) ->	[["X","O","X"],["O","X","O"],["X","O","X"]]


 */
// not quite right - creates correct arr with rows & cols, alternating 'X' & 'O' wrong
function makeXOGrid(rows, cols) {
	let grid = [];
	for(let i = 0; i < rows; i++) {
		let row = [];
		for(let j = 0; j < cols; j++) {
			if(j%2 === 0) row.push('X');
			else row.push('O');
		}
		grid.push(row);
	}
	return grid;
}


// Correct Solution
function makeXOGrid(rows,amount){
	var finalArr = []
	var startWithX = true
	for(var i=0; i<rows; i++){
		var newRow = []
		for(var j=0; j<amount; j++){
			if(startWithX){
				newRow.push("X")
			}
			else {
				newRow.push("O")
			}
			startWithX = !startWithX
		}
		finalArr.push(newRow)
	}
	return finalArr;
}








