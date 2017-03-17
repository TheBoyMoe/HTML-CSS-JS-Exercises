document.addEventListener('DOMContentLoaded', function () {
	console.log('Loaded page content');
	
	let load = document.getElementById('load');
	
	/* Build an XHR/ajax request */
	
	// 1. create the request obj
	let xhr = new XMLHttpRequest();
	
	// 2. create the callback function, the code you want to run when the
	// response from the server is received - create a function that is
	// invoked when ever there is a change in the onReadyStateChange event
	xhr.onreadystatechange = function () {
		// we're only interested in the final state change, ready state == 4
		if(xhr.readyState === 4) {
			document.getElementById('ajax').innerHTML = xhr.responseText;
		}
	};
	
	// 3. open the request, passing the http method and url (file or service)
	xhr.open('GET', 'paragraph.html');
	
	// execute ajax call via button click
	load.addEventListener('click', function () {
		// 4. send the request - when submitting info, eg form data, pass it to send()
		xhr.send();
		load.style.display = 'none';
	});
	
});