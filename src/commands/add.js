const playlistManager = require("../utils/playlistManager");
const yts = require("yt-search");
const play = require("play-dl");
const { createAudioResource } = require("@discordjs/voice");
const isURL = require("../utils/isURL");

async function addCommand(args, msg, player, connection) {
  if (args.length === 0) {
    return msg.channel.send("You need to provide a search query or URL!");
  }

  const query = args.join(" ");
  let videoUrl;

  if (isURL(query)) {
    videoUrl = query;
  } else {
    const videoResult = await yts(query);
    videoUrl = videoResult.videos[0].url;
  }

  playlistManager.addSong(videoUrl);

  if (playlistManager.getPlaylist().length === 1) {
    const stream = await play.stream(videoUrl);
    const resource = createAudioResource(stream.stream, {
      inputType: stream.type,
    });
    player.play(resource);
    connection.subscribe(player);
    msg.reply(`Now playing: ${videoUrl}`);
  } else {
    msg.reply(`Added to playlist: ${videoUrl}`);
  }
}

module.exports = addCommand;
