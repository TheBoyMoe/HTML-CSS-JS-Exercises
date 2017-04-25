'use strict';

// invoking a class's methods without instantiating the class
// export the class, import the class by name in other files
class Utils {
	static add(a,b){
		return a+b;
	}
	
	static subtract(a,b){
		return Math.abs(a-b);
	}
}
export {Utils}