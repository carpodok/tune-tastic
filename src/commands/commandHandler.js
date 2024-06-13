const playCommand = require("./play");
const nextCommand = require("./next");
const previousCommand = require("./previous");
const clearCommand = require("./clear");
const addCommand = require("./add");
const helpCommand = require("./help");
const queueCommand = require("./queue");

const commandMap = {
  play: playCommand,
  next: nextCommand,
  prev: previousCommand,
  clear: clearCommand,
  add: addCommand,
  help: helpCommand,
  queue: queueCommand,
};

function handleCommand(command, args, msg, player, connection) {
  const commandFunction = commandMap[command];
  if (commandFunction) {
    commandFunction(args, msg, player, connection);
  } else {
    msg.reply("Unknown command. Use `!help` to see available commands.");
  }
}

module.exports = handleCommand;
