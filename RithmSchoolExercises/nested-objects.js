/*
	Solutions:
 https://github.com/rithmschool/intermediate_javascript_solutions/blob/master/nested_objects_exercise/solution.js

	NESTED OBJECT EXERCISES
 
	Given the following nested object:
 
	var nestedData = {
		innerData: {
			order: ["first", "second", "third"],
			snacks: ["chips", "fruit", "crackers"],
			numberData: {
				primeNumbers: [2,3,5,7,11],
				fibonnaci: [1,1,2,3,5,8,13]
			},
			addSnack: function(snack){
				this.snacks.push(snack);
				return this;
			}
		}
	}
 
 
	1. Using a for loop, console.log all of the numbers in the primeNumbers array.
	2. Using a for loop, console.log all of the even Fibonnaci numbers.
	3. Console.log the value "second" inside the order array.
	4. Invoke the addSnack function and add the snack "chocolate".
	5. Inside of the addSnack function there is a special keyword called this.
		What does the word this refer to inside the addSnack function?


 */

function primeNums(obj) {
	let arr = obj.innerData.numberData.primeNumbers;
	arr.forEach(function (val) {
		console.log(val);
	})
}

function evenFibNums(obj) {
	let arr = obj.innerData.numberData.fibonnaci;
	arr.forEach(function (val) {
		if(val%2 === 0)	console.log(val);
	})
}

function secondVal(obj) {
	console.log(`second: ${obj.innerData.order[1]}`);
}

function invokeAddSnack(obj, str) {
	// let fn = obj.innerData.addSnack;
	// return fn(str);
	return obj.innerData.addSnack(str);
}


/*
	NESTED OBJECTS EXERCISES
 
	Given the following nested object:
 
	var nestedObject = {
		speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
		data: {
			continents: {
				europe: {
					countries: {
						switzerland: {
							capital: "Bern",
							population: 8000000
						}
					}
				}
			},
			languages: {
				spanish: {
					hello: "Hola"
				},
				french: {
					hello: "Bonjour"
				}
			}
		}
	}
 
	Write a function addSpeaker to add a speaker to the array of speakers. The speaker you
	add must be an object with a key of name and a value of whatever you'd like.
	
	Write a function addLanguage that adds a language to the languages object.
	The language object you add should have a key with the name of the language and the
	value of another object with a key of "hello" and a value of however you spell "hello"
	in the language you add.
	
	Write a function addCountry that adds a European country to the countries object
	(inside of the continents object, inside of the countries object). The country you
	add should be an object with the key as name of the country and the value as an object
	with the keys of "capital" and "population" and their respective values.
	
	

 */

function addSpeaker(obj, speaker) {
	let speakers = obj.speakers;
	let newSpeaker = {name: speaker};
	speakers.push(newSpeaker);
	return speakers;
}


function addLanguage(obj, language, greeting) {
	let languages = obj.data.languages;
	languages[language] = {
		hello: greeting
	};
	return languages;
}


function addCountry(obj, country, cap, pop) {
	let countries = obj.data.continents.europe.countries;
	countries[country] = {
		capital: cap,
		population: pop
	};
	return countries;
}


