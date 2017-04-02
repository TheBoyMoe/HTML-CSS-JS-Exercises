/*
 Maps in ES6
 References
 [1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 */
'use strict';

let classroom = new Map();
let stevenJ = { name: 'Steven', age: 22 },
	sarah = { name: 'Sarah', age: 23 },
	stevenS = { name: 'Steven', age: 22 };

// values are added to a map in the form of key value pairs
// any value, primitive or object, can be used as either a key or value
classroom.set('stevenj', stevenJ);
classroom.set('sarah', sarah);
classroom.set('stevenS', stevenS);

// return the number of elements using the size property
console.log('size', classroom.size);

// determine if an element with the specific key exists using has()
// and retrieve it's value using get()
console.log(classroom.has('sarah')? classroom.get('sarah'): 'specified property not found');

// remove elements from a map using delete(), passing in the specific key
let value = classroom.has('sarah')? classroom.delete('sarah'): 'not found'; // returns a boolean
console.log('Deleted value ', value);
console.log(classroom.has('sarah')? classroom.get('sarah'): 'specified property deleted');

// Use the for of loop to iterate over the map (also works on sets)
for(let student of classroom){
	console.log(`'${student[0]}': name ${student[1].name} age ${student[1].age}`);
}

// clear() removes all elements from the map
classroom.clear();
console.log(classroom.size);
