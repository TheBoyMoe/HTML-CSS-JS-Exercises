$(document).ready(function () {
	
	// example 1
	// let url = 'http://website.com/posts';
	// let data = {
	// 	firstName: 'John',
	// 	lastName: 'Smith'
	// };
	// $.post(url, data, callback);
	
	
	// example 2 - submit a form using jquery -
	// add submit event to btn/form elm
	$('form').submit(function (e) {
		e.preventDefault();
		
		// select the form and grab the url from the action attribute
		let url = $(this).attr('action');
		
		// capture all the form data - creates a text string from the input fields
		let formData = $(this).serialize();
		
		// post the data to the server
		$.post(url, formData, function (response) {
			$('#signup').html('<p>Thanks for signing up!</p>p>');
		})
	})
	
	
});