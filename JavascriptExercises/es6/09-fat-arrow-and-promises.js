'use strict';
/*
	with promises, callbacks are handed off to another scope to to ba called once an event is complete
	- you have to provide a way for the promise to access it's original scope
	
	References
	[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
	[2] https://googlechrome.github.io/samples/arrows-es6/
	[3] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
	[4] http://wesbos.com/arrow-function-no-no/ (When not to use arrow functions)
	
 */
let Teacher = function (data) {
	this.name = data.name;
	this.greet = function (studentCnt) {
		let promise = new Promise(function (resolve, reject) {
			if (studentCnt === 0) {
				reject('Zero students in class');
			} else {
				resolve(`Hello to ${studentCnt} of my favorite students!`);
			}
		});
		return promise;
	}
};

let Classroom = function (data) {
	this.subject = data.name;
	this.teacher = data.teacher;
	this.students = [];
	this.addStudent = function (data) {
		this.students.push(data);
		this.greet();
	};
	this.greet = () => {
		this.teacher.greet(this.students.length).then(
		
			// old version
			// using the iife pattern to ensure we've got access to the original scope
			// (function (classroom) {
			// 	return function (greeting) {
			// 		console.log(`${classroom.teacher.name} says: `, greeting);
			// 	}
			// })(this), // passing in the Classroom instance
			// function (err) { // passing an error to the callback in the event an error happens
			// 	console.log(err);
			// })
		
			// ES6 version using fat arrow
			greeting => console.log(`${classroom.teacher.name} says: `, greeting),
			err => console.log(err));
			
	}
};

let myTeacher = new Teacher({ name: 'James' });
let myClassroom = new Classroom({ name: 'The Future of JavaScript', teacher: myTeacher });

myClassroom.addStudent({ name: 'Dave' });