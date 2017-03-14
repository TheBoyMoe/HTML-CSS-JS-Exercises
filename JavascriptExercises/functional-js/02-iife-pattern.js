/* IIFE Pattern */

function game() {
	let score = Math.floor(Math.random() * 6) + 1;
	console.log(`Score: ${score}`);
}
game();

// IIFE using an anonymous function - creates data privacy
(function (a,b) {
	let score = Math.floor(Math.random() * 6) + 1;
	console.log(`IIFE Score: ${score}, sum: ${a*b}`);
})(2,3);