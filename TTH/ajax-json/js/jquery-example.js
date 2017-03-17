document.addEventListener('DOMContentLoaded', function () {
	
	var url = '/employees.php';
	
	/* using the jquery get() method
	 url - file or service on the backend
	 data - query string added to the end of the url (optional)
	      - you can provide a js obj, jquery will format it as a query string
	      - eg {name: 'Tom Jones', age: 34}
	 callback - process the response
	      - you don't need to check onreadystatus or for any errors
	      - callback is only run when complete and successful
	 
	 */
	$.get(url, data, callback);

	// jquery hands the response to the callback
	// response arg is the same as the responseText property of the xhr obj
	var callback = function(response){
		// do something
	};
	
	// you could write it like so:
	$('/employees.php',
		{
			name: 'Tom Jones',
			age: 34
		},
		function(response){
			// do something
		}
	);
	
});
