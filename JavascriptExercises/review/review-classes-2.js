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


