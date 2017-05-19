/*
	De-structuring objects

 */

// use {} when destructuring an object - ONLY use it for obj properties
// 'this' is set to the window object if you destructure methods

let props = {
	firstname: 'Tom',
	lastname: 'Jones',
	age: 34,
	greet() {
		console.log(this);
		return `Hello my name is ${this.firstname} ${this.lastname}`;
	}
};

// you MUST use the same property names
// - simply pull out the value by it's property name - since we're referencing properties by name
// unlike arrays where we reference values by position
let {firstname, lastname} = props;
console.log(firstname, lastname); // Tom Jones

let {first, last, age} = props;
console.log(first, last, age); // undefined undefined 34

// HOWEVER, you can rename property names by using aliases, e.g
let {firstname: fx, lastname: lx} = props;
console.log(`aliasing ${fx} ${lx}`);

// you can ignore properties, but unlike array destructuring don't leave 'gaps'
let {greet} = props;
console.log(greet()); // this - window object - returns undefined for first/lastname
console.log(props.greet()); // this - obj - WORKS


// using destructuring and creating alias values
let person = {
    fname: 'Terry',
    lname: 'Jones',
    info(){
        return `My name is ${this.fname} ${this.lname}`;
    }
};
let {fname: f, lname: l} = person;
console.log('f l', f,l);

// using destructuring and default values
function getData({ url, method = 'post' } = {}, callback) {
	callback(url, method);
}

// getData({ url: 'myposturl.com' }, function (url, method) {
// 	console.log(url, method);
// });
//
// getData({ url: 'myputurl.com', method: 'put' }, function (url, method) {
// 	console.log(url, method);
// });

const fn = (url, method)=>{
    console.log(url, method);
};


getData({ url: 'myposturl.com' }, fn);

getData({ url: 'myputurl.com', method: 'put' }, fn);


// using destructuring to extract the value of a nested objects property

let parentObject = {
	title: 'Super Important',
	childObject: {
		title: 'Equally Important'
	}
};

let { title, childObject: { title: childTitle } } = parentObject;

console.log(childTitle);