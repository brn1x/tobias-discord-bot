const path = require('path')
const fs = require('fs')

function getCommands (commandSetter) {
  const commandFiles = fs.readdirSync(path.resolve(__dirname, '..', 'commands'))
  for (const file of commandFiles) {
    const command = require(`../commands/${file}`)

    commandSetter.set(command.name, command)
  }
}

module.exports = getCommands
