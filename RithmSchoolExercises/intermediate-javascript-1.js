/*	THROW ERRORS	*/

try {
	if(Math.random()>0.5) {
		throw 'Error thrown, val > 0.5';
	}
	console.log(`Random num < 0.5`);
} catch(e) {
	console.log(`Error thrown, error: ${e}`);
} finally {
	console.log(`Executed no matter what`);
}


var instructorData = {
	name: "Elie",
	additionalData: {
		instructor: true,
		favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
		moreDetails: {
			favoriteBasketballTeam: "New York Knicks",
			numberOfSiblings: 3,
			isYoungest: true,
			hometown: {
				city: "West Orange",
				state: "NJ",
			},
			citiesLivedIn: ["Seattle", "Providence", "New York"]
		}
	}
};

function displayCities() {
	let cities = instructorData.additionalData.moreDetails.citiesLivedIn;
	cities.forEach(function (city) {
		console.log(city)
	})
}

function displayHomeTown() {
	let homeTown = instructorData.additionalData.moreDetails.hometown;
	for(let p in homeTown) {
		if(homeTown.hasOwnProperty(p)) {
			console.log(homeTown[p]);
		}
	}
}

function addDetail(str, value) {
	let moreDetails = instructorData.additionalData.moreDetails;
	moreDetails[str] = value;
	return moreDetails;
}

function removeDetail(str) {
	let moreDetails = instructorData.additionalData.moreDetails;
	delete moreDetails[str];
	return moreDetails;
}