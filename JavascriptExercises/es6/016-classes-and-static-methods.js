'use strict';

// you cannot access static methods through an instance of that class
// e.g obj.method() throws a TypeError, either use call(), or pass an instance of class to the static method
class Bird {
	constructor({ color = 'red' } = {}) {
		this.color = color;
	}
	
	static changeColor(color) {
		this.color = color;
	}
	// enable the calling of static methods on instances of the class
	static changeColor2(bird, color){
		bird.color = color;
	}
	
}

let redbird = new Bird();
let yellowbird = new Bird({color:'yellow'});
console.log(redbird.color);
console.log(yellowbird.color);

// redbird.changeColor('blue'); // throws TypeError
// instead use call() to pass the appropriate object we want to invoke the method on
Bird.changeColor.call(redbird, 'blue');
Bird.changeColor2(yellowbird, 'green');

console.log(redbird.color); // blue
console.log(yellowbird.color); // yellow
