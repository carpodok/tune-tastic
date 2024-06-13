function helpCommand(args, msg, player, connection) {
  const helpMessage = `
**Tune Tastic-Bot Commands:**
- \`!play [YouTube video URL or search query]\` to play a video or add it to the queue.
- \`!add [YouTube video URL or search query]\` to add a video to the playlist.
- \`!next\` to play the next video in the playlist.
- \`!prev\` to play the previous video in the playlist.
- \`!clear\` to clear the current playlist.
- \`!queue\` to display the current music queue.
- \`!help\` to show this help message.
  `;
  msg.reply(helpMessage);
}

module.exports = helpCommand;
