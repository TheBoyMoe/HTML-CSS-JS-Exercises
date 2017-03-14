/* Using the Object create method */


let Person = {
	calculateAge: function(){
		return `Age: ${2016 - this.age}`;
	},
	getName: function () {
		return this.name;
	},
	getOccupation: function () {
		return this.job;
	}
};

// create the person instance and populate the properties
// Object .create builds an object directly from the obj passed in
let pete = Object.create(Person);
pete.name = 'Peter Jones';
pete.yob = 1948;
pete.job = 'developer';


// 2nd example - passing in obj properties to the create method
let jane = Object.create(Person, {
	name: {value: 'jane'},
	yob: {value: 1966},
	job: {value: 'developer'}
});