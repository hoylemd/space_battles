var what_time_is_it = require('./migame/utils.js').what_time_is_it;

var SpaceBattlesGame = require('./space_battles.js');

function main() {
  var game = new SpaceBattlesGame();
  window.the_game = game;
  game.start_time = what_time_is_it();

  function main_loop() {
    // get timing information
    var now = what_time_is_it();
    var timedelta = now - game.last_timestamp;

    game.update(timedelta);
    game.last_timestamp = now;

    // Schedule next update
    requestAnimationFrame(main_loop);
  }
  main_loop();
}

main();