/*
	PART 1.
 
	1. Add the necessary code to wait for the DOM to load to make sure that anything
	you manipulate in the DOM has loaded. You can do this either using
	window.onload or adding an event listener for DOMContentLoaded.
	
	2. Replace the text "Change me" with "Hello World!".
	
	3. When a user hovers over one of the colored boxes change the text to display
	the color that is being hovered over.
	
	4. Create a new div element.
	
	5. Give your new div a class of purple and style it so that it has a background
	color of purple.
	
	6. Append your new div to the page to the section tag.


 */

document.addEventListener('DOMContentLoaded', function () {
	
	// 2.
	let h1Heading = document.getElementById('change_heading');
	h1Heading.innerText = 'Hello World!';
	
	// 3.
	let update = document.querySelector('.selected');
	let section = document.querySelector('section');
	section.addEventListener('mouseover', colorHover);
	function colorHover(e) {
		// console.log(`Hover over `, e.target.getAttribute('class'));
		update.innerText = e.target.getAttribute('class');
	}
	
	// 4. - 6.
	let newDiv = document.createElement('div');
	newDiv.setAttribute('class', 'purple');
	newDiv.style.backgroundColor = 'purple';
	section.appendChild(newDiv);
	
	/*
		PART 2
	 
		Create a racing game with the two cars. When the race button is pressed,
		the two cars should move across the screen until one of them is at the
		end of the screen. When one of the blocks reaches the end - you should alert "winner!"

 	*/

	let start = document.querySelector('button');
	let car1 = document.querySelector('.car1');
	let car2 = document.querySelector('.car2');
	let width = window.innerWidth - 50;
	let car1Left = 0;
	let car2Left = 0;
	let move;
	
	start.addEventListener('click', function () {
		move = setInterval(function () {
			race();
		}, 100)
	});
	
	function race() {
		if(car1Left >= width) {
			resetCars('Car 1');
			clearInterval(move);
			return;
		}
		if(car2Left >= width) {
			resetCars('Car 2');
			clearInterval(move);
			return;
		}
		car1Left += Math.floor(Math.random()*10);
		car2Left += Math.floor(Math.random()*10);
		car1.style.marginLeft = car1Left + 'px';
		car2.style.marginLeft = car2Left + 'px';
	}
	
	function resetCars(str) {
		car1Left = 0;
		car2Left = 0;
		car1.style.marginLeft = car1Left + 'px';
		car2.style.marginLeft = car2Left + 'px';
		alert(`${str} is the winner`);
	}

});





