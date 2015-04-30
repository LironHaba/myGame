var events = require('events');

var util = require('util');
util.inherits(Gamer, events.EventEmitter);


// Gamer Object Constructor
function Gamer () {
	this.totalScore = 0;
	events.EventEmitter.call(this);
}


// Gamer Object prototypes
Gamer.prototype.win = function(score) {
	this.totalScore +=score;
	this.emit('totalScoreChanged');
};

Gamer.prototype.lose = function(score) {
	this.totalScore -=score;
	this.emit('totalScoreChanged');
};


// callbacks functions
function displayTotalScore() {
	console.log("Total Score is: " + this.totalScore);
}

function checkGameOver() {
	if(this.totalScore < 0) {
		console.log("Game Over! :( your total score is: " + this.totalScore);
	}

}

// create Gamer instance and attach callbacks to events
var gamer = new Gamer();

gamer.on("totalScoreChanged", displayTotalScore);
gamer.on("totalScoreChanged", checkGameOver);

module.exports = gamer;