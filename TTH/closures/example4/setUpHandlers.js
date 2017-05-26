const buttons = document.getElementsByTagName('button');

// using the var keyword to declare variables pollutes the global scope
// for(var i = 0; i < buttons.length; i += 1) {
// 	var button = buttons[i]; // each time the loop runs, the value is reassigned to button since it exists on the global scope
// 	let buttonName = button.innerHTML; // let has block scope, each time the loop is executed a new variable is declared - separate from any other, which the click handler encloses
//
// 	// the value of the button name changes as the loop progresses
// 	// whenever any of the click handlers are triggered they will access the current value
// 	// of the global variable buttonName(when declared with a var)
// 	// one simple way to solve this is to declare buttonName using the let keyword
// 	button.addEventListener('click', function() {
// 		console.log(buttonName);
// 	});
// }


// another solution is to use closures
for(var j = 0; j < buttons.length; j += 1) {
	var button = buttons[j];
	var buttonName = button.innerHTML;
	button.addEventListener('click', createHandler(buttonName));
}


function createHandler(button) {
	return function () {
		console.log(button);
	}
}
