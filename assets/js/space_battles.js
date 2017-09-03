var Game = require('./migame/game.js');
var game_states = require('./states.js');


function SpaceBattlesGame() {
  this.BACKGROUND_COLOUR = 0x999999;

  this.width = 640;
  this.height = 480;

  this.cheats = {
  };

  Game.call(this, game_states);

  this.reset = function TetrisGame_reset() {
  };
}
SpaceBattlesGame.prototype = Object.create(Game.prototype);

module.exports = SpaceBattlesGame;
