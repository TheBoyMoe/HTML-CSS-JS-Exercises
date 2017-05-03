/* ES5 function constructors and prototypal inheritance */
function Person(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

/*
    OR
    
    let Person = function(....){
        ......
    }

*/

Person.prototype.describe = function () {
    return `${this.firstname} ${this.lastname}, age ${this.age}`;
};

let person = new Person('Tom', 'Jones', 68);
console.log(person);

function Employee(firstname, lastname, age, NINumber) {
    // use the Media function constructor to set common properties
    Person.call(this, firstname, lastname, age);
    this.NINumber = NINumber;
}

// create the prototype chain - employee can access methods of the parent
Employee.prototype = Object.create(Person.prototype);

Employee.prototype.info = function () {
    return `${this.firstname} ${this.lastname}, age ${this.age}, NI number ${this.NINumber}`;
};

let employee = new Employee('Peter', 'Jones', 44, 'NI09787687B');
console.log(employee);
console.log(employee.describe());
console.log(employee.info());


/* ES6 Classes */
class Animal {
    // required if you want to give someone properties
    constructor(species, weight, height, color){
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.color = color;
    }
    
    info(){
        return `${this.species}, weight ${this.weight}, height ${this.height}, color ${this.color}`;
    }
    
    run(){
        console.log(`I can run quickly even though I weigh ${this.weight}`);
    }
}

let gorilla = new Animal('Gorilla', '599lbs', '172cm', 'Black');
console.log(gorilla.info());
gorilla.run();

// classes and inheritance
class Ape extends Animal {
    // you only need to call the constructor if you want to set 'Ape' specific properties
    // if yoy=u call the constructor, you ust also call the parent's constructor via a call to super
}

let ape = new Ape('Ape', '340lbs', '123cm', 'brown');
console.log(ape.info());
ape.run();

class Chimpanzee extends Animal {
    constructor(name, species, weight, height, color){
        super(species, weight, height, color);
        this.name = name;
    }
    // override the parents info() method, to refer to info(), call this.info() from within the class
    info(){
        return `My name is ${this.name}, ${super.info()}`; // call parent's info()
    }
}

let chimp = new Chimpanzee('Cheeta', 'Chimpanzee', '65lbs', '46cm', 'black');
console.log(chimp.info());

// Classes, static methods and exporting
export class Utils {
    static add(a,b) {
        return a + b;
    }
    
    static subtract(a,b) {
        return a - b;
    }
    
    multiply(a,b) {
        return a*b;
    }
}

// add() and subtract() are only available on the class, NOT on an instance
console.log(Utils.add(2,3));
console.log(Utils.subtract(3,1));

// multiply is only available on an instance of the object
let multiply = new Utils().multiply(2,3);
console.log(multiply);

class ImageTools {
    static compress() {
        console.log('compressed image to save space');
    }
    
    static greyscale() {
        console.log('converted the image to black and white');
    }
}

export {ImageTools}