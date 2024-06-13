const playlistManager = require("../utils/playlistManager");
const play = require("play-dl");
const { createAudioResource } = require("@discordjs/voice");

async function nextCommand(args, msg, player, connection) {
  const nextUrl = playlistManager.nextSong();
  if (nextUrl) {
    const stream = await play.stream(nextUrl);
    const resource = createAudioResource(stream.stream, {
      inputType: stream.type,
    });

    player.play(resource);
    connection.subscribe(player);

    msg.reply(`Now playing: ${nextUrl}`);
  } else {
    player.stop();
    connection.subscribe(player);

    msg.reply("There is no next song in the playlist.");
  }
}

module.exports = nextCommand;
