/*
 Reference:
 [1] https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

'use strict';

let classroom = new Set();
let steven = {name: 'Steven', age: 43};
let anna = {name: 'Anna', age: 34};
let tom = {name: 'Tom', age: 35};
let dick = {name: 'Dick', age: 55};

// sets allow you to store values of any type, primitives or objects
classroom.add(steven);
classroom.add(anna);
classroom.add(steven);
classroom.add(anna);
classroom.add(tom);
classroom.add(dick);

// check that a value exists in a set using has()
if(classroom.has(steven)) console.log('Steven found');

// check number of elements in a set using size property (returns number of values in a set )
// a set accepts unique values, quitely drops any duplicates
console.log('classroom size ' + classroom.size);

// to remove elements from a set, use delete()
classroom.delete(anna);
(classroom.has(anna))? console.log('value found'): console.log('not found');


// ES6 adds the from() method to the Array objext, enabling the creation of an array from an existing set
let arr = Array.from(classroom);
console.log(arr);

// You can alse create a set from an array - duplicates are ignored
let setFromArray = new Set([1,2,5,3,2,4,6,7,1,2,3,4,5]);
console.log(setFromArray);

// You have the clear() method to delete all values from a set
setFromArray.clear();
console.log(setFromArray);