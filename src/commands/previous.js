const playlistManager = require("../utils/playlistManager");
const play = require("play-dl");
const { createAudioResource } = require("@discordjs/voice");

async function previousCommand(args, msg, player, connection) {
  const previousUrl = playlistManager.previousSong();
  if (previousUrl) {
    const stream = await play.stream(previousUrl);
    const resource = createAudioResource(stream.stream, {
      inputType: stream.type,
    });

    player.play(resource);
    connection.subscribe(player);

    msg.reply(`Now playing: ${previousUrl}`);
  } else {
    msg.reply("There is no previous song in the playlist.");
  }
}

module.exports = previousCommand;
