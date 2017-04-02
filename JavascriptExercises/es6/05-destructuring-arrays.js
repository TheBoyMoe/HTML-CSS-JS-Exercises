/*
	Destructuring arrays
	- allows you to extract values from arrays (or objects) and assign them to variables
 */

let numbers = [1,2,3,4,5,6,7,8];

// destructuring an array - original array remains unchanged
// use [] on lhs when destructuring an array
// define your variables in the order the values appear in the array
let [a,b,c] = numbers;
console.log(`a: ${a} b: ${b} c: ${c}`);

// using the rest parameter with destructuring
let [d, e, ...f] = numbers; // f == creates a copy of the remaining elements in the array
console.log(`d: ${d} e: ${e} f: ${f}`);

// we can also use default values
let nums = [1,2];
let [g, h = 10, i = 20] = nums; // 1, 2, 20 - provide defaults where no value is available(otherwise undefined)

// we can also ignore values when destructuring, e.g
let [j, k, , , l, , , m] = numbers;
console.log(`j ${j} k ${k} l ${l} m ${m}`); // 1,2,5,8

// we can also use destructuring to aid in swapping variable values, e.g
let n = 10, o = 20;
console.log(`before n ${n} o ${o}`); // 10,20
[o, n] = [n, o];
console.log(`after n ${n} o ${o}`); // 20,10

// we can immediately de-structure an array, e.g
let [p,q, , ...r] = [1,2,3,4,5,6,7,8]; // 1,2, [4,5,6,7,8]
console.log(p, q, r);