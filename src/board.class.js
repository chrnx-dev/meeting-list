'use strict';

var Player = require('./player.class'),
	q = require('q');

function Board(){
	this.players = [];
}


Board.prototype={
	getPlayer: function(id){

	},
	getPlayers: function(){
		return this.players;
	}
};

module.exports = Board;