const playlistManager = require("../utils/playlistManager");

function queueCommand(args, msg, player, connection) {
  const playlist = playlistManager.getPlaylist();
  if (playlist.length === 0) {
    msg.reply("The queue is currently empty.");
  } else {
    const queueMessage = playlist
      .map((url, index) => `${index + 1}: ${url}`)
      .join("\n");
    msg.reply(`Current Queue:\n${queueMessage}`);
  }
}

module.exports = queueCommand;
