document.addEventListener('DOMContentLoaded', function () {
	console.log('Page content loaded');
	
	// Build and display list of emplees who are in
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4) {
			// console.log(xhr.responseText);
			// JSON object must be an array of items or object of key/value pairs or a combination
			// otherwise JSON.parse() will retiurn an error
			var employees = JSON.parse(xhr.responseText);
			console.table(employees);
			
			// iterate through the list of employess and build an ul
			var list = '<ul class="bulleted">';
			employees.forEach(function(employee){
				if(employee.inoffice){
					list += '<li class="in">';
				} else {
					list += '<li class="out">';
				}
				list += employee.name + '</li>';
			});
			list += '</ul>';
			document.getElementById('employeeList').innerHTML = list;
		}
	};
	xhr.open('GET', 'data/employees.json');
	xhr.send();
	
});