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
	
	// fetch room data and build list
	var roomXhr = new XMLHttpRequest();
	roomXhr.onreadystatechange = function(){
		if(roomXhr.readyState === 4 && roomXhr.status === 200){
			// parse json string into array of json objects
			var rooms = JSON.parse(roomXhr.responseText);
			
			// build the list
			var list = '<ul class="rooms">';
			rooms.forEach(function(room){
				if(room.available) {
					list += '<li class="empty">';
				} else {
					list += '<li class="full">';
				}
				list += room.room + '</li>';
			});
			list += '</ul>';
			
			// insert the list into the DOM elm
			document.getElementById('roomList').innerHTML = list;
		}
	};
	roomXhr.open('GET', '../data/rooms.json');
	roomXhr.send();
	
});