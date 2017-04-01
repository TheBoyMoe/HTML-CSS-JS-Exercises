/*
	Using new string methods
	- startsWith()
	- endsWith()
	- includes()

 */

'use strict';

let strToSearch = 'a-really-long-hyphenated-string';

// startsWith() - takes a 2nd parameter - where the search should start
console.log(/^a-really/.test(strToSearch)); // test string w/ regular expression - ^ indicates start

console.log(strToSearch.indexOf('a-really') === 0); // indexOf

console.log(strToSearch.startsWith('a-really')); // startsWith (returns boolean)


// includes() - takes a 2nd parameter - where the search should start
console.log(/long/.test(strToSearch)); // test string w/ regular expression

console.log(strToSearch.indexOf('long') > -1); // indexOf

console.log(strToSearch.includes('long')); // includes (returns boolean)


// endsWith() - takes a 2nd parameter - length of the string within which to search, e.g if you pass in 12, search only within the first 12 chars
console.log(/hyphenated-string$/.test(strToSearch)); // test string w/ regular expression - $ indicates end

console.log(strToSearch.indexOf('hyphenated-string') === strToSearch.length - 'hyphenated-string'.length); // indexOf

console.log(strToSearch.endsWith('hyphenated-string')); // endsWith (returns boolean)
