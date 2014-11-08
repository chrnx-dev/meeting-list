'use strict';

function Player(name){
	this.status = status || false;
}

Player.prototype.Alive = function(){
	this.status = true;
};

Player.prototype.Die = function(){
	this.status = false;
};

module.exports = Player;