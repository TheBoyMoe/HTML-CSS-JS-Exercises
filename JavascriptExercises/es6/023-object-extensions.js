// 1. Object.assign() - merge multiple object, passing in a comma separated list of objects

let obj1 = {
	a: 1,
	b: 2, // overwritten
	c: 5 // overwritten
};

let obj2 = {
	b: 6,
	c: 3,
	d: 4
};

let obj12 = Object.assign(obj1, obj2);
console.log(obj12);

// merging objects with different constructors
class Obj3 {
	constructor(){
		this.a = 2; // overwritten
	}
}

class Obj4 {
	constructor() {
		this.a = 6;
		this.b = 3;
	}
}

let obj3 = new Obj3();
let obj4 = new Obj4();

// first object is the base object (uses it's prototype), all subsequent objects in the sequence are merged into it
let obj34 = Object.assign(obj3, obj4);
console.log(obj34);

console.log(obj34 instanceof Obj3); // true
console.log(obj34 instanceof Obj4); // false

console.log(obj34.__proto__ === Obj3.prototype); // true
console.log(obj34.__proto__ === Obj4.prototype); // false

// you can use an empty object as the base
let obj5 = Object.assign({}, obj1, obj2);
console.log(obj5);
console.log(obj5 instanceof Object); // true
console.log(obj5.__proto__ === Object.prototype); // true
