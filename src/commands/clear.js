const playlistManager = require("../utils/playlistManager");

function clearCommand(args, msg, player, connection) {
  playlistManager.clearPlaylist();
  player.stop();
  connection.subscribe(player);

  msg.reply("Playlist cleared.");
}

module.exports = clearCommand;
