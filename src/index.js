require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const commandHandler = require("./commands/commandHandler");
const play = require("play-dl");
const {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  AudioPlayerStatus,
} = require("@discordjs/voice");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
  ],
});

const playlistManager = require("./utils/playlistManager");

const PREFIX = "!";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (msg) => {
  if (!msg.content.startsWith(PREFIX) || msg.author.bot) return;

  const args = msg.content.slice(PREFIX.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!msg.member.voice.channel) {
    return msg.reply("You need to be in a voice channel to use this command!");
  }

  const voiceChannel = msg.member.voice.channel;
  const connection = joinVoiceChannel({
    channelId: voiceChannel.id,
    guildId: voiceChannel.guild.id,
    adapterCreator: voiceChannel.guild.voiceAdapterCreator,
  });

  const player = createAudioPlayer();

  player.on(AudioPlayerStatus.Idle, async () => {
    const nextSong = playlistManager.nextSong();
    if (nextSong) {
      const stream = await play.stream(nextSong);
      const resource = createAudioResource(stream.stream, {
        inputType: stream.type,
      });
      player.play(resource);
      connection.subscribe(player);

      msg.channel.send(`Now playing: ${nextSong}`);
    } else {
      const endMessage = `
\`The playlist has ended\`.
  `;
      msg.channel.send(endMessage);
    }
  });

  try {
    commandHandler(command, args, msg, player, connection);
  } catch (error) {
    console.error("Error handling command:", error);
    msg.reply("There was an error trying to execute that command!");
  }
});

client.login(process.env.CLIENT_TOKEN);
