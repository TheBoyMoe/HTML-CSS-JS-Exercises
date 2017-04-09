/*
	when inheriting from function constructors and prototypes
	- must include call to super constructor to ensure props are inherited/or set or both
	- use Object.create() to set up prototypal inheritance
	
 */
 
"use strict";
function Media() {
	this.format = 'digital';
	this.isPlaying = false;
}

Media.prototype.play = function () {
	return this.isPlaying = true;
};

Media.prototype.stop = function () {
	return this.isPlaying = false;
};

function Song(name) {
	// without the call to the super constructor, Song does not inherit
	// Media obj's props, which will be undefined when .description() is called
	Media.call(this);
	this.name = name;
}

// setting Media.prototype as the Song.prototype's prototype
Song.prototype = Object.create(Media.prototype);
Song.prototype.description = function () {
	console.log(`Name ${this.name}, format ${this.format}, playing ${this.isPlaying}`);
};

let song = new Song('The Best is Yet to Come');
song.description();