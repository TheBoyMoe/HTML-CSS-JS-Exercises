/* Using the Object create method */


let Person = {
	calculateAge: function(){
		return `Age: ${2016 - this.age}`;
	}
};

// create the person instance and populate the properties
let pete = Object.create(Person);
pete.age = 22;
pete.job = 'developer';
