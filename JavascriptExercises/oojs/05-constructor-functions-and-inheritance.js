/*
	Taken from the TTH course on OOJS - Media Player app
	 - example of function constructors and prototypal inheritence
 */
 
const Media = function (title, duration) {
	this.title = title;
	this.duration = duration;
	this.isPlaying = false;
};

Media.prototype.play = function () {
	this.isPlaying = true;
};

Media.prototype.stop = function () {
	this.isPlaying = false;
};


const Song = function (artist, title, duration) {
	// use the Media function constructor to set common properties
	Media.call(this, title, duration);
	this.artist = artist;
};

// create the prototypal chain, Song instances will have access to Media methods
Song.prototype = Object.create(Media.prototype);

// define Song specific methods
Song.prototype.description = function () {
	return `Song title '${this.title}', by ${this.artist}`;
};


const Movie = function (director, year, title, duration) {
	Media.call(this, title, duration);
	this.director = director;
	this.year = year;
};

Movie.prototype = Object.create(Media.prototype);

Movie.prototype.description = function () {
	return `${this.title}, directed by ${this.director}`;
};
