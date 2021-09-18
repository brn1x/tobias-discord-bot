function getCommandFromMessage (prefix, messageContent) {
  const args = messageContent.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase()

  return command
}

module.exports = getCommandFromMessage
